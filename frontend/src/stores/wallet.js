import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { ethers } from 'ethers'
import { WEB3_CONFIG, getChainConfig } from '../config/web3'
import { CONTRACTS, CXBT_ABI, ERC20_ABI } from '../config/contracts'

// Persist helpers
const PERSIST_KEY = 'cxbt-wallet'

function loadPersistedState() {
  try {
    const saved = localStorage.getItem(PERSIST_KEY)
    if (saved) {
      return JSON.parse(saved)
    }
  } catch (err) {
    console.error('Error loading persisted wallet state:', err)
  }
  return null
}

function savePersistedState(state) {
  try {
    localStorage.setItem(PERSIST_KEY, JSON.stringify(state))
  } catch (err) {
    console.error('Error saving wallet state:', err)
  }
}

function clearPersistedState() {
  try {
    localStorage.removeItem(PERSIST_KEY)
  } catch (err) {
    console.error('Error clearing wallet state:', err)
  }
}

export const useWalletStore = defineStore('wallet', () => {
  // State
  const isConnected = ref(false)
  const address = ref(null)
  const chainId = ref(null)
  const signer = ref(null)
  const provider = ref(null)
  const balance = ref('0')
  const loading = ref(false)
  const error = ref(null)

  // Load persisted state on initialization
  const persisted = loadPersistedState()
  if (persisted) {
    isConnected.value = persisted.isConnected || false
    address.value = persisted.address || null
    chainId.value = persisted.chainId || null
    balance.value = persisted.balance || '0'
  }

  // Persist state changes
  watch(
    () => ({
      isConnected: isConnected.value,
      address: address.value,
      chainId: chainId.value,
      balance: balance.value
    }),
    state => {
      savePersistedState(state)
    },
    { deep: true }
  )

  // Getters
  const shortAddress = computed(() => {
    if (!address.value) return ''
    return `${address.value.slice(0, 6)}...${address.value.slice(-4)}`
  })

  const currentChain = computed(() => {
    if (!chainId.value) return null
    return getChainConfig(chainId.value)
  })

  const isBaseNetwork = computed(() => {
    return chainId.value === WEB3_CONFIG.base.chainId
  })

  const isConnectedToBase = computed(() => {
    return isConnected.value && isBaseNetwork.value
  })

  // Actions
  const updateBalance = async () => {
    if (!address.value || !provider.value) return

    try {
      const balanceWei = await provider.value.getBalance(address.value)
      balance.value = ethers.formatEther(balanceWei)
    } catch (err) {
      console.error('Ошибка получения баланса:', err)
    }
  }

  const switchNetwork = async targetChainId => {
    if (!provider.value) {
      throw new Error('Provider не инициализирован')
    }

    try {
      // Try to switch to the network
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${targetChainId.toString(16)}` }]
      })
    } catch (switchError) {
      // Обработка отказа пользователя (код 4001)
      if (switchError.code === 4001) {
        throw new Error('errors.userRejectedTransaction')
      }

      // This error code indicates that the chain has not been added to MetaMask
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: `0x${targetChainId.toString(16)}`,
                chainName: WEB3_CONFIG.base.name,
                nativeCurrency: WEB3_CONFIG.base.nativeCurrency,
                rpcUrls: WEB3_CONFIG.base.rpcUrls.default.http,
                blockExplorerUrls: [WEB3_CONFIG.base.blockExplorers.default.url]
              }
            ]
          })
        } catch (addError) {
          throw new Error('errors.failedToAddNetwork')
        }
      } else {
        throw new Error('errors.failedToSwitchNetwork')
      }
    }
  }

  const setupEventListeners = () => {
    if (typeof window.ethereum === 'undefined') return

    // Handle account changes
    window.ethereum.on('accountsChanged', accounts => {
      if (accounts.length === 0) {
        // eslint-disable-next-line no-use-before-define
        disconnectWallet()
      } else {
        address.value = accounts[0]
        updateBalance()
      }
    })

    // Handle chain changes
    window.ethereum.on('chainChanged', newChainId => {
      chainId.value = Number(newChainId)
      // Reload page on chain change
      window.location.reload()
    })

    // Handle disconnect
    window.ethereum.on('disconnect', () => {
      // eslint-disable-next-line no-use-before-define
      disconnectWallet()
    })
  }

  const connectWallet = async () => {
    loading.value = true
    error.value = null

    try {
      if (typeof window.ethereum === 'undefined') {
        throw new Error('errors.walletNotFound')
      }

      // Create provider and signer
      provider.value = new ethers.BrowserProvider(window.ethereum)

      // Request account access
      const accounts = await provider.value.send('eth_requestAccounts', [])
      address.value = accounts[0]

      // Get signer
      signer.value = await provider.value.getSigner()

      // Get network
      const network = await provider.value.getNetwork()
      chainId.value = Number(network.chainId)

      // Get balance
      await updateBalance()

      // Check if on Base network, if not switch
      if (chainId.value !== WEB3_CONFIG.base.chainId) {
        await switchNetwork(WEB3_CONFIG.base.chainId)
      }

      isConnected.value = true

      // Setup event listeners
      setupEventListeners()

      return { success: true, address: address.value }
    } catch (err) {
      console.error('Ошибка подключения кошелька:', err)

      // Обработка отказа пользователя (код 4001)
      if (err.code === 4001) {
        error.value = 'errors.userRejectedTransaction'
        return { success: false, error: error.value }
      }

      error.value = err.message || 'Не удалось подключить кошелек'
      return { success: false, error: error.value }
    } finally {
      loading.value = false
    }
  }

  const disconnectWallet = () => {
    isConnected.value = false
    address.value = null
    chainId.value = null
    signer.value = null
    provider.value = null
    balance.value = '0'
    error.value = null

    // Clear persisted state
    clearPersistedState()

    // Remove event listeners
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum.removeAllListeners()
    }
  }

  const checkConnection = async () => {
    if (typeof window.ethereum === 'undefined') return false

    try {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' })

      if (accounts.length > 0) {
        provider.value = new ethers.BrowserProvider(window.ethereum)
        address.value = accounts[0]
        signer.value = await provider.value.getSigner()

        const network = await provider.value.getNetwork()
        chainId.value = Number(network.chainId)

        await updateBalance()
        isConnected.value = true

        setupEventListeners()

        return true
      }
    } catch (err) {
      console.error('Ошибка проверки подключения:', err)
    }

    return false
  }

  // Contract helpers
  const getCXBTContract = () => {
    if (!signer.value) {
      throw new Error('Signer не инициализирован. Подключите кошелек.')
    }
    return new ethers.Contract(CONTRACTS.CXBT_DIAMOND, CXBT_ABI, signer.value)
  }

  const getPAIDContract = () => {
    if (!signer.value) {
      throw new Error('Signer не инициализирован. Подключите кошелек.')
    }
    return new ethers.Contract(CONTRACTS.PAID_TOKEN, ERC20_ABI, signer.value)
  }

  const getContract = (contractAddress, abi) => {
    if (!signer.value) {
      throw new Error('Signer не инициализирован. Подключите кошелек.')
    }
    return new ethers.Contract(contractAddress, abi, signer.value)
  }

  const getCXBTContractWithProvider = () => {
    if (!provider.value) {
      throw new Error('Provider не инициализирован. Подключите кошелек.')
    }
    return new ethers.Contract(CONTRACTS.CXBT_DIAMOND, CXBT_ABI, provider.value)
  }

  const getPAIDContractWithProvider = () => {
    if (!provider.value) {
      throw new Error('Provider не инициализирован. Подключите кошелек.')
    }
    return new ethers.Contract(CONTRACTS.PAID_TOKEN, ERC20_ABI, provider.value)
  }

  // Utility функции для работы с контрактами
  const parseUnits = (value, decimals = 18) => {
    try {
      return ethers.parseUnits(value.toString(), decimals)
    } catch {
      return 0n
    }
  }

  const formatUnits = (value, decimals = 18) => {
    try {
      return ethers.formatUnits(value, decimals)
    } catch {
      return '0'
    }
  }

  const isValidAddress = addr => {
    try {
      return ethers.isAddress(addr)
    } catch {
      return false
    }
  }

  // eslint-disable-next-line require-await
  const waitForTransaction = async (txHash, confirmations = 1, timeout = 60000) => {
    if (!provider.value) {
      throw new Error('Provider не инициализирован.')
    }
    return provider.value.waitForTransaction(txHash, confirmations, timeout)
  }

  return {
    // State
    isConnected,
    address,
    chainId,
    signer,
    provider,
    balance,
    loading,
    error,

    // Getters
    shortAddress,
    currentChain,
    isBaseNetwork,
    isConnectedToBase,

    // Actions
    connectWallet,
    disconnectWallet,
    switchNetwork,
    updateBalance,
    checkConnection,
    getCXBTContract,
    getPAIDContract,
    getCXBTContractWithProvider,
    getPAIDContractWithProvider,
    getContract,

    // Utility функции
    parseUnits,
    formatUnits,
    isValidAddress,
    waitForTransaction
  }
})
