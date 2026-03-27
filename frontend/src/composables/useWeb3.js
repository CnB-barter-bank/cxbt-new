import { ref, computed, onUnmounted } from 'vue'
import { ethers } from 'ethers'
// eslint-disable-next-line import/no-unresolved
import { createWeb3Modal, defaultConfig } from '@web3modal/vue'
import { useWalletStore } from '../stores/wallet'
import { WEB3_CONFIG } from '../config/web3'
import { CONTRACTS, CXBT_ABI, ERC20_ABI } from '../config/contracts'

let web3Modal = null
let web3ModalConfig = null

export function useWeb3() {
  const walletStore = useWalletStore()
  const isInitialized = ref(false)
  const error = ref(null)

  // Initialize Web3Modal Vue
  // eslint-disable-next-line require-await
  const initWeb3Modal = async () => {
    if (isInitialized.value) return

    try {
      const metadata = WEB3_CONFIG.walletConnect.metadata

      web3ModalConfig = defaultConfig({
        metadata,
        enableCoinbase: true,
        enableEmail: false,
        enableInjected: true,
        enableWalletConnect: true,
        projectId: WEB3_CONFIG.walletConnect.projectId,
        chains: WEB3_CONFIG.chains,
        themeVariables: WEB3_CONFIG.web3Modal.themeVariables
      })

      web3Modal = createWeb3Modal({
        wagmiConfig: web3ModalConfig,
        projectId: WEB3_CONFIG.walletConnect.projectId,
        enableAnalytics: false,
        themeMode: WEB3_CONFIG.web3Modal.themeMode,
        featuredWalletIds: WEB3_CONFIG.web3Modal.featuredWalletIds
      })

      isInitialized.value = true
    } catch (err) {
      console.error('Ошибка инициализации Web3Modal:', err)
      error.value = err.message
      throw err
    }
  }

  // Open Web3Modal
  const openWeb3Modal = async () => {
    if (!web3Modal) {
      await initWeb3Modal()
    }

    try {
      web3Modal.open()
    } catch (err) {
      console.error('Ошибка открытия Web3Modal:', err)
      error.value = err.message
      throw err
    }
  }

  // Close Web3Modal
  const closeWeb3Modal = () => {
    if (web3Modal) {
      web3Modal.close()
    }
  }

  // Get CXBT contract instance
  const getCXBTContract = (withSigner = true) => {
    try {
      const provider = walletStore.provider
      if (!provider) {
        throw new Error('Provider не инициализирован. Подключите кошелек.')
      }

      const signerOrProvider = withSigner ? walletStore.signer : provider
      return new ethers.Contract(CONTRACTS.CXBT_DIAMOND, CXBT_ABI, signerOrProvider)
    } catch (err) {
      console.error('Ошибка получения контракта CXBT:', err)
      error.value = err.message
      throw err
    }
  }

  // Get PAID contract instance
  const getPAIDContract = (withSigner = true) => {
    try {
      const provider = walletStore.provider
      if (!provider) {
        throw new Error('Provider не инициализирован. Подключите кошелек.')
      }

      const signerOrProvider = withSigner ? walletStore.signer : provider
      return new ethers.Contract(CONTRACTS.PAID_TOKEN, ERC20_ABI, signerOrProvider)
    } catch (err) {
      console.error('Ошибка получения контракта PAID:', err)
      error.value = err.message
      throw err
    }
  }

  // Get custom contract instance
  const getContract = (address, abi, withSigner = true) => {
    try {
      const provider = walletStore.provider
      if (!provider) {
        throw new Error('Provider не инициализирован. Подключите кошелек.')
      }

      const signerOrProvider = withSigner ? walletStore.signer : provider
      return new ethers.Contract(address, abi, signerOrProvider)
    } catch (err) {
      console.error('Ошибка получения контракта:', err)
      error.value = err.message
      throw err
    }
  }

  // Utility: Format ETH amount
  const formatEther = value => {
    try {
      return ethers.formatEther(value)
    } catch (err) {
      console.error('Ошибка форматирования:', err)
      return '0'
    }
  }

  // Utility: Parse ETH amount
  const parseEther = value => {
    try {
      return ethers.parseEther(value.toString())
    } catch (err) {
      console.error('Ошибка парсинга:', err)
      return 0n
    }
  }

  // Utility: Format token amount with decimals
  const formatUnits = (value, decimals = 18) => {
    try {
      return ethers.formatUnits(value, decimals)
    } catch (err) {
      console.error('Ошибка форматирования:', err)
      return '0'
    }
  }

  // Utility: Parse token amount with decimals
  const parseUnits = (value, decimals = 18) => {
    try {
      return ethers.parseUnits(value.toString(), decimals)
    } catch (err) {
      console.error('Ошибка парсинга:', err)
      return 0n
    }
  }

  // Utility: Get transaction receipt
  const waitForTransaction = async txHash => {
    try {
      const provider = walletStore.provider
      if (!provider) {
        throw new Error('Provider не инициализирован.')
      }

      const receipt = await provider.waitForTransaction(txHash, 1, 60000) // 60 seconds timeout
      return receipt
    } catch (err) {
      console.error('Ошибка ожидания транзакции:', err)
      error.value = err.message
      throw err
    }
  }

  // Utility: Estimate gas
  const estimateGas = async transaction => {
    try {
      const provider = walletStore.provider
      if (!provider) {
        throw new Error('Provider не инициализирован.')
      }

      const gasEstimate = await provider.estimateGas(transaction)
      return gasEstimate
    } catch (err) {
      console.error('Ошибка оценки газа:', err)
      error.value = err.message
      throw err
    }
  }

  // Utility: Get current gas price
  const getGasPrice = async () => {
    try {
      const provider = walletStore.provider
      if (!provider) {
        throw new Error('Provider не инициализирован.')
      }

      const feeData = await provider.getFeeData()
      return feeData
    } catch (err) {
      console.error('Ошибка получения цены газа:', err)
      error.value = err.message
      throw err
    }
  }

  // Utility: Check if address is valid
  const isValidAddress = address => {
    try {
      return ethers.isAddress(address)
    } catch {
      return false
    }
  }

  // Utility: Shorten address
  const shortenAddress = (address, chars = 4) => {
    if (!address || !isValidAddress(address)) return ''
    return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`
  }

  // Utility: Get block number
  const getBlockNumber = async () => {
    try {
      const provider = walletStore.provider
      if (!provider) {
        throw new Error('Provider не инициализирован.')
      }

      const blockNumber = await provider.getBlockNumber()
      return blockNumber
    } catch (err) {
      console.error('Ошибка получения номера блока:', err)
      error.value = err.message
      throw err
    }
  }

  // Utility: Get block
  const getBlock = async (blockTag = 'latest') => {
    try {
      const provider = walletStore.provider
      if (!provider) {
        throw new Error('Provider не инициализирован.')
      }

      const block = await provider.getBlock(blockTag)
      return block
    } catch (err) {
      console.error('Ошибка получения блока:', err)
      error.value = err.message
      throw err
    }
  }

  // Computed properties
  const isReady = computed(() => {
    return isInitialized.value && walletStore.isConnected
  })

  const isConnected = computed(() => walletStore.isConnected)
  const isConnectedToBase = computed(() => walletStore.isConnectedToBase)

  // Cleanup on unmount
  onUnmounted(() => {
    if (web3Modal) {
      web3Modal.close()
    }
  })

  return {
    // State
    isInitialized,
    error,
    isReady,
    isConnected,
    isConnectedToBase,

    // Web3Modal methods
    initWeb3Modal,
    openWeb3Modal,
    closeWeb3Modal,

    // Contract methods
    getCXBTContract,
    getPAIDContract,
    getContract,

    // Utility methods
    formatEther,
    parseEther,
    formatUnits,
    parseUnits,
    waitForTransaction,
    estimateGas,
    getGasPrice,
    isValidAddress,
    shortenAddress,
    getBlockNumber,
    getBlock,

    // Store reference
    walletStore
  }
}
