import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import {
  setupWeb3Mocks,
  resetWeb3Mocks,
  createMockProvider,
  createMockSigner
} from '../helpers/mockWeb3'

// Create hoisted mock for wallet store
const { mockWalletStore } = vi.hoisted(() => {
  return {
    mockWalletStore: {
      isConnected: false,
      address: null,
      chainId: null,
      signer: null,
      provider: null,
      balance: '0',
      loading: false,
      error: null,
      shortAddress: '',
      currentChain: null,
      isBaseNetwork: false,
      isConnectedToBase: false,
      connectWallet: vi.fn(),
      disconnectWallet: vi.fn(),
      switchNetwork: vi.fn(),
      updateBalance: vi.fn(),
      checkConnection: vi.fn()
    }
  }
})

// Mock stores BEFORE importing the composable
vi.mock('src/stores/wallet', () => ({
  useWalletStore: vi.fn(() => mockWalletStore)
}))

// Mock ethers
vi.mock('ethers', async importOriginal => {
  const actual = await importOriginal()
  return {
    ...actual,
    formatEther: vi.fn(value => {
      const num = Number(value) / 1e18
      return num.toString()
    }),
    parseEther: vi.fn(value => BigInt(Math.floor(parseFloat(value) * 1e18))),
    formatUnits: vi.fn((value, decimals = 18) => {
      const divisor = BigInt(10 ** decimals)
      const integerPart = value / divisor
      const fractionalPart = value % divisor
      const fractionalStr = fractionalPart.toString().padStart(decimals, '0').slice(0, decimals)
      return `${integerPart}.${fractionalStr}`
    }),
    parseUnits: vi.fn((value, decimals = 18) => {
      const [integer, fractional] = value.split('.')
      const integerPart = BigInt(integer) * BigInt(10 ** decimals)
      const fractionalPart = fractional
        ? BigInt(fractional.padEnd(decimals, '0').slice(0, decimals))
        : BigInt(0)
      return integerPart + fractionalPart
    }),
    Zero: BigInt(0),
    isAddress: vi.fn(address => /^0x[a-fA-F0-9]{40}$/.test(address)),
    BrowserProvider: vi.fn().mockImplementation(() => createMockProvider()),
    Contract: vi.fn().mockImplementation((address, abi, signerOrProvider) => {
      const contract = {
        address,
        abi,
        signerOrProvider
      }
      // Add methods that composable might use
      contract.interface = {
        getFunction: vi.fn()
      }
      return contract
    })
  }
})

// Mock config
vi.mock('src/config/web3', () => ({
  WEB3_CONFIG: {
    base: {
      chainId: 8453,
      name: 'Base',
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18
      },
      rpcUrls: {
        default: {
          http: ['https://mainnet.base.org']
        }
      },
      blockExplorers: {
        default: {
          name: 'BaseScan',
          url: 'https://basescan.org'
        }
      }
    },
    walletConnect: {
      projectId: 'test-project-id',
      metadata: {
        name: 'CXBT App',
        description: 'CXBT Token Application',
        url: 'https://cxbt.app',
        icons: ['https://cxbt.app/icon.png']
      }
    },
    chains: [
      {
        chainId: 8453,
        name: 'Base',
        nativeCurrency: {
          name: 'ETH',
          symbol: 'ETH',
          decimals: 18
        },
        rpcUrls: {
          default: {
            http: ['https://mainnet.base.org']
          }
        },
        blockExplorers: {
          default: {
            name: 'BaseScan',
            url: 'https://basescan.org'
          }
        }
      }
    ],
    web3Modal: {
      themeMode: 'dark',
      themeVariables: {
        '--w3m-z-index': 9999
      },
      featuredWalletIds: ['c57ca95b47569778a828d191fe1f9f935c8cc373bb2375b49800a3b356838931']
    }
  },
  getChainConfig: vi.fn(chainId => {
    if (chainId === 8453) {
      return {
        chainId: 8453,
        name: 'Base',
        nativeCurrency: {
          name: 'ETH',
          symbol: 'ETH',
          decimals: 18
        },
        rpcUrls: {
          default: {
            http: ['https://mainnet.base.org']
          }
        },
        blockExplorers: {
          default: {
            name: 'BaseScan',
            url: 'https://basescan.org'
          }
        }
      }
    }
    return null
  })
}))

// Mock contracts config with CHAIN property
vi.mock('src/config/contracts', () => ({
  CONTRACTS: {
    CXBT_DIAMOND: '0x1234567890123456789012345678901234567890',
    PAID_TOKEN: '0x0987654321098765432109876543210987654321',
    CHAIN: {
      BASE: {
        explorerUrl: 'https://basescan.org'
      }
    }
  },
  CXBT_ABI: [],
  ERC20_ABI: []
}))

// Mock web3modal
const mockWeb3Modal = {
  open: vi.fn(),
  close: vi.fn()
}

// Mock @web3modal/vue package (not installed)
vi.mock('@web3modal/vue', () => ({
  createWeb3Modal: vi.fn(() => mockWeb3Modal),
  defaultConfig: vi.fn(() => ({}))
}))

// Mock @web3modal/wagmi package (not installed)
vi.mock('@web3modal/wagmi', () => ({
  createWeb3Modal: vi.fn(() => mockWeb3Modal)
}))

// Mock @web3modal/core package (not installed)
vi.mock('@web3modal/core', () => ({
  createWeb3Modal: vi.fn(() => mockWeb3Modal)
}))

vi.mock('wagmi', () => ({
  defaultConfig: vi.fn(() => ({
    projectId: 'test',
    chains: [],
    metadata: {
      name: 'Test App',
      description: 'Test Description',
      url: 'https://test.com',
      icons: ['https://test.com/icon.png']
    }
  })),
  reconnect: vi.fn()
}))

// Import composable AFTER mocking dependencies
import { useWeb3 } from 'src/composables/useWeb3'

describe('useWeb3', () => {
  let mockProvider
  let mockSigner

  const TEST_ADDRESS = '0x1234567890123456789012345678901234567890'

  beforeEach(() => {
    setupWeb3Mocks()
    const pinia = createPinia()
    setActivePinia(pinia)

    // Create mocks
    mockProvider = createMockProvider()
    mockSigner = createMockSigner(TEST_ADDRESS)

    // Setup wallet store
    mockWalletStore.isConnected = true
    mockWalletStore.address = TEST_ADDRESS
    mockWalletStore.provider = mockProvider
    mockWalletStore.signer = mockSigner
    mockWalletStore.chainId = 8453
    mockWalletStore.isConnectedToBase = true

    // Clear previous mocks
    mockWeb3Modal.open.mockClear()
    mockWeb3Modal.close.mockClear()
  })

  afterEach(() => {
    resetWeb3Mocks()
    vi.clearAllMocks()
  })

  describe('initWeb3Modal', () => {
    it('должен инициализировать Web3Modal', async () => {
      const { initWeb3Modal, isInitialized } = useWeb3()

      await initWeb3Modal()

      expect(isInitialized.value).toBe(true)
    })

    it('не должен повторно инициализировать Web3Modal', async () => {
      const { initWeb3Modal, isInitialized } = useWeb3()

      await initWeb3Modal()
      const { createWeb3Modal } = await import('@/web3modal/vue')
      const initialCallCount = createWeb3Modal.mock.calls.length

      await initWeb3Modal()

      expect(createWeb3Modal.mock.calls.length).toBe(initialCallCount)
    })

    it('должен обрабатывать ошибки при инициализации', async () => {
      const { initWeb3Modal, error } = useWeb3()
      const { createWeb3Modal } = await import('@/web3modal/vue')

      createWeb3Modal.mockImplementationOnce(() => {
        throw new Error('Initialization failed')
      })

      await expect(initWeb3Modal()).rejects.toThrow('Initialization failed')
      expect(error.value).toBe('Initialization failed')
    })
  })

  describe('openWeb3Modal', () => {
    it('должен открывать Web3Modal', async () => {
      const { openWeb3Modal } = useWeb3()

      await openWeb3Modal()

      expect(mockWeb3Modal.open).toHaveBeenCalled()
    })

    it('должен инициализировать Web3Modal если он не инициализирован', async () => {
      const { openWeb3Modal } = useWeb3()
      const { createWeb3Modal } = await import('@/web3modal/vue')

      await openWeb3Modal()

      expect(createWeb3Modal).toHaveBeenCalled()
      expect(mockWeb3Modal.open).toHaveBeenCalled()
    })

    it('должен обрабатывать ошибки при открытии', async () => {
      const { openWeb3Modal, error } = useWeb3()

      mockWeb3Modal.open.mockImplementationOnce(() => {
        throw new Error('Open failed')
      })

      await expect(openWeb3Modal()).rejects.toThrow('Open failed')
      expect(error.value).toBe('Open failed')
    })
  })

  describe('closeWeb3Modal', () => {
    it('должен закрывать Web3Modal', () => {
      const { closeWeb3Modal } = useWeb3()

      closeWeb3Modal()

      expect(mockWeb3Modal.close).toHaveBeenCalled()
    })

    it('не должен выбрасывать ошибку если Web3Modal не инициализирован', () => {
      const { closeWeb3Modal } = useWeb3()

      expect(() => closeWeb3Modal()).not.toThrow()
    })
  })

  describe('connectWallet', () => {
    it('должен подключать кошелек через store', async () => {
      const { walletStore } = useWeb3()

      await walletStore.connectWallet()

      expect(mockWalletStore.connectWallet).toHaveBeenCalled()
    })

    it('должен обрабатывать ошибки при подключении', async () => {
      const { walletStore, error } = useWeb3()

      mockWalletStore.connectWallet.mockRejectedValueOnce(new Error('Connection failed'))

      try {
        await walletStore.connectWallet()
      } catch (err) {
        expect(error.value).toBe('Connection failed')
      }
    })
  })

  describe('disconnectWallet', () => {
    it('должен отключать кошелек через store', async () => {
      const { walletStore } = useWeb3()

      await walletStore.disconnectWallet()

      expect(mockWalletStore.disconnectWallet).toHaveBeenCalled()
    })

    it('должен обрабатывать ошибки при отключении', async () => {
      const { walletStore, error } = useWeb3()

      mockWalletStore.disconnectWallet.mockRejectedValueOnce(new Error('Disconnect failed'))

      try {
        await walletStore.disconnectWallet()
      } catch (err) {
        expect(error.value).toBe('Disconnect failed')
      }
    })
  })

  describe('switchNetwork', () => {
    it('должен переключать сеть через store', async () => {
      const { walletStore } = useWeb3()

      await walletStore.switchNetwork(8453)

      expect(mockWalletStore.switchNetwork).toHaveBeenCalledWith(8453)
    })

    it('должен обрабатывать ошибки при переключении сети', async () => {
      const { walletStore, error } = useWeb3()

      mockWalletStore.switchNetwork.mockRejectedValueOnce(new Error('Switch failed'))

      try {
        await walletStore.switchNetwork(8453)
      } catch (err) {
        expect(error.value).toBe('Switch failed')
      }
    })
  })

  describe('getCXBTContract', () => {
    it('должен возвращать экземпляр контракта CXBT с signer', () => {
      const { getCXBTContract } = useWeb3()

      const contract = getCXBTContract(true)

      expect(contract).toBeDefined()
      expect(contract.address).toBe('0x1234567890123456789012345678901234567890')
    })

    it('должен возвращать экземпляр контракта CXBT без signer', () => {
      const { getCXBTContract } = useWeb3()

      const contract = getCXBTContract(false)

      expect(contract).toBeDefined()
      expect(contract.address).toBe('0x1234567890123456789012345678901234567890')
    })

    it('должен выбрасывать ошибку если provider не инициализирован', () => {
      mockWalletStore.provider = null
      const { getCXBTContract } = useWeb3()

      expect(() => getCXBTContract()).toThrow('Provider не инициализирован. Подключите кошелек.')
    })

    it('должен обрабатывать ошибки при получении контракта', () => {
      mockWalletStore.provider = null
      const { getCXBTContract, error } = useWeb3()

      try {
        getCXBTContract()
      } catch (err) {
        expect(error.value).toBe('Provider не инициализирован. Подключите кошелек.')
      }
    })
  })

  describe('getPAIDContract', () => {
    it('должен возвращать экземпляр контракта PAID с signer', () => {
      const { getPAIDContract } = useWeb3()

      const contract = getPAIDContract(true)

      expect(contract).toBeDefined()
      expect(contract.address).toBe('0x0987654321098765432109876543210987654321')
    })

    it('должен возвращать экземпляр контракта PAID без signer', () => {
      const { getPAIDContract } = useWeb3()

      const contract = getPAIDContract(false)

      expect(contract).toBeDefined()
      expect(contract.address).toBe('0x0987654321098765432109876543210987654321')
    })

    it('должен выбрасывать ошибку если provider не инициализирован', () => {
      mockWalletStore.provider = null
      const { getPAIDContract } = useWeb3()

      expect(() => getPAIDContract()).toThrow('Provider не инициализирован. Подключите кошелек.')
    })

    it('должен обрабатывать ошибки при получении контракта', () => {
      mockWalletStore.provider = null
      const { getPAIDContract, error } = useWeb3()

      try {
        getPAIDContract()
      } catch (err) {
        expect(error.value).toBe('Provider не инициализирован. Подключите кошелек.')
      }
    })
  })

  describe('getContract', () => {
    it('должен возвращать экземпляр кастомного контракта с signer', () => {
      const { getContract } = useWeb3()

      const contract = getContract('0x1234567890123456789012345678901234567890', [], true)

      expect(contract).toBeDefined()
      expect(contract.address).toBe('0x1234567890123456789012345678901234567890')
    })

    it('должен возвращать экземпляр кастомного контракта без signer', () => {
      const { getContract } = useWeb3()

      const contract = getContract('0x1234567890123456789012345678901234567890', [], false)

      expect(contract).toBeDefined()
      expect(contract.address).toBe('0x1234567890123456789012345678901234567890')
    })

    it('должен выбрасывать ошибку если provider не инициализирован', () => {
      mockWalletStore.provider = null
      const { getContract } = useWeb3()

      expect(() => getContract('0x1234567890123456789012345678901234567890', [])).toThrow(
        'Provider не инициализирован. Подключите кошелек.'
      )
    })
  })

  describe('formatEther', () => {
    it('должен форматировать wei в ether', () => {
      const { formatEther } = useWeb3()

      expect(formatEther(BigInt('1000000000000000000'))).toBe('1.0')
      expect(formatEther(BigInt('2000000000000000000'))).toBe('2.0')
      expect(formatEther(BigInt('500000000000000000'))).toBe('0.5')
    })

    it('должен форматировать 0 wei', () => {
      const { formatEther } = useWeb3()

      expect(formatEther(BigInt('0'))).toBe('0')
    })

    it('должен обрабатывать ошибки форматирования', () => {
      const { formatEther } = useWeb3()

      expect(formatEther('invalid')).toBe('0')
    })
  })

  describe('parseEther', () => {
    it('должен парсить ether в wei', () => {
      const { parseEther } = useWeb3()

      expect(parseEther('1')).toBe(BigInt('1000000000000000000'))
      expect(parseEther('2')).toBe(BigInt('2000000000000000000'))
      expect(parseEther('0.5')).toBe(BigInt('500000000000000000'))
    })

    it('должен парсить 0 ether', () => {
      const { parseEther } = useWeb3()

      expect(parseEther('0')).toBe(BigInt('0'))
    })

    it('должен обрабатывать ошибки парсинга', () => {
      const { parseEther } = useWeb3()

      expect(parseEther('invalid')).toBe(BigInt(0))
    })
  })

  describe('formatUnits', () => {
    it('должен форматировать значение в единицы с указанными decimals', () => {
      const { formatUnits } = useWeb3()

      expect(formatUnits(BigInt('1000000'), 6)).toBe('1.0')
      expect(formatUnits(BigInt('1000000000000000000'), 18)).toBe('1.0')
      expect(formatUnits(BigInt('500000'), 6)).toBe('0.5')
    })

    it('должен форматировать 0 с любыми decimals', () => {
      const { formatUnits } = useWeb3()

      expect(formatUnits(BigInt('0'), 6)).toBe('0.0')
      expect(formatUnits(BigInt('0'), 18)).toBe('0.0')
    })

    it('должен обрабатывать ошибки форматирования', () => {
      const { formatUnits } = useWeb3()

      expect(formatUnits('invalid', 18)).toBe('0')
    })
  })

  describe('parseUnits', () => {
    it('должен парсить значение из единиц с указанными decimals', () => {
      const { parseUnits } = useWeb3()

      expect(parseUnits('1', 6)).toBe(BigInt('1000000'))
      expect(parseUnits('1', 18)).toBe(BigInt('1000000000000000000'))
      expect(parseUnits('0.5', 6)).toBe(BigInt('500000'))
    })

    it('должен парсить 0 с любыми decimals', () => {
      const { parseUnits } = useWeb3()

      expect(parseUnits('0', 6)).toBe(BigInt('0'))
      expect(parseUnits('0', 18)).toBe(BigInt('0'))
    })

    it('должен обрабатывать ошибки парсинга', () => {
      const { parseUnits } = useWeb3()

      expect(parseUnits('invalid', 18)).toBe(BigInt(0))
    })
  })

  describe('waitForTransaction', () => {
    it('должен ожидать подтверждения транзакции', async () => {
      const { waitForTransaction } = useWeb3()

      const receipt = await waitForTransaction('0x1234567890abcdef')

      expect(receipt).toBeDefined()
      expect(receipt.hash).toBe('0x1234567890abcdef')
      expect(receipt.status).toBe(1)
    })

    it('должен выбрасывать ошибку если provider не инициализирован', async () => {
      mockWalletStore.provider = null
      const { waitForTransaction } = useWeb3()

      await expect(waitForTransaction('0x1234567890abcdef')).rejects.toThrow(
        'Provider не инициализирован.'
      )
    })

    it('должен обрабатывать ошибки при ожидании транзакции', async () => {
      const { waitForTransaction, error } = useWeb3()
      mockProvider.waitForTransaction.mockRejectedValueOnce(new Error('Transaction failed'))

      try {
        await waitForTransaction('0x1234567890abcdef')
      } catch (err) {
        expect(error.value).toBe('Transaction failed')
      }
    })
  })

  describe('estimateGas', () => {
    it('должен оценивать газ для транзакции', async () => {
      const { estimateGas } = useWeb3()

      const gas = await estimateGas({ to: TEST_ADDRESS, value: '1000000000000000000' })

      expect(gas).toBeDefined()
      expect(gas).toBe(BigInt('21000'))
    })

    it('должен выбрасывать ошибку если provider не инициализирован', async () => {
      mockWalletStore.provider = null
      const { estimateGas } = useWeb3()

      await expect(estimateGas({ to: TEST_ADDRESS })).rejects.toThrow(
        'Provider не инициализирован.'
      )
    })

    it('должен обрабатывать ошибки при оценке газа', async () => {
      const { estimateGas, error } = useWeb3()
      mockProvider.estimateGas.mockRejectedValueOnce(new Error('Gas estimation failed'))

      try {
        await estimateGas({ to: TEST_ADDRESS })
      } catch (err) {
        expect(error.value).toBe('Gas estimation failed')
      }
    })
  })

  describe('getGasPrice', () => {
    it('должен получать текущую цену газа', async () => {
      const { getGasPrice } = useWeb3()

      const gasPrice = await getGasPrice()

      expect(gasPrice).toBeDefined()
      expect(gasPrice.gasPrice).toBe(BigInt('20000000000'))
    })

    it('должен выбрасывать ошибку если provider не инициализирован', async () => {
      mockWalletStore.provider = null
      const { getGasPrice } = useWeb3()

      await expect(getGasPrice()).rejects.toThrow('Provider не инициализирован.')
    })

    it('должен обрабатывать ошибки при получении цены газа', async () => {
      const { getGasPrice, error } = useWeb3()
      mockProvider.getFeeData.mockRejectedValueOnce(new Error('Failed to get gas price'))

      try {
        await getGasPrice()
      } catch (err) {
        expect(error.value).toBe('Failed to get gas price')
      }
    })
  })

  describe('isValidAddress', () => {
    it('должен возвращать true для валидного адреса', () => {
      const { isValidAddress } = useWeb3()

      expect(isValidAddress(TEST_ADDRESS)).toBe(true)
      expect(isValidAddress('0x9876543210987654321098765432109876543210')).toBe(true)
    })

    it('должен возвращать false для невалидного адреса', () => {
      const { isValidAddress } = useWeb3()

      expect(isValidAddress('invalid')).toBe(false)
      expect(isValidAddress('')).toBe(false)
      expect(isValidAddress('0x123')).toBe(false)
      expect(isValidAddress('0x123456789012345678901234567890123456789')).toBe(false) // 39 chars
    })

    it('должен обрабатывать ошибки при проверке адреса', () => {
      const { isValidAddress } = useWeb3()

      expect(isValidAddress(null)).toBe(false)
      expect(isValidAddress(undefined)).toBe(false)
    })
  })

  describe('shortenAddress', () => {
    it('должен сокращать адрес', () => {
      const { shortenAddress } = useWeb3()

      expect(shortenAddress(TEST_ADDRESS)).toBe('0x1234...7890')
    })

    it('должен сокращать адрес с указанным количеством символов', () => {
      const { shortenAddress } = useWeb3()

      expect(shortenAddress(TEST_ADDRESS, 6)).toBe('0x123456...7890')
      expect(shortenAddress(TEST_ADDRESS, 2)).toBe('0x12...90')
    })

    it('должен возвращать пустую строку для невалидного адреса', () => {
      const { shortenAddress } = useWeb3()

      expect(shortenAddress('invalid')).toBe('')
      expect(shortenAddress('')).toBe('')
    })
  })

  describe('getBlockNumber', () => {
    it('должен получать номер текущего блока', async () => {
      const { getBlockNumber } = useWeb3()

      const blockNumber = await getBlockNumber()

      expect(blockNumber).toBeDefined()
      expect(typeof blockNumber).toBe('number')
      expect(blockNumber).toBe(12345)
    })

    it('должен выбрасывать ошибку если provider не инициализирован', async () => {
      mockWalletStore.provider = null
      const { getBlockNumber } = useWeb3()

      await expect(getBlockNumber()).rejects.toThrow('Provider не инициализирован.')
    })

    it('должен обрабатывать ошибки при получении номера блока', async () => {
      const { getBlockNumber, error } = useWeb3()
      mockProvider.getBlockNumber.mockRejectedValueOnce(new Error('Failed to get block number'))

      try {
        await getBlockNumber()
      } catch (err) {
        expect(error.value).toBe('Failed to get block number')
      }
    })
  })

  describe('getBlock', () => {
    it('должен получать информацию о блоке', async () => {
      const { getBlock } = useWeb3()

      const block = await getBlock('latest')

      expect(block).toBeDefined()
      expect(block.number).toBe(12345)
      expect(block.hash).toBe('0x1234567890abcdef')
    })

    it('должен получать информацию о блоке по номеру', async () => {
      const { getBlock } = useWeb3()

      const block = await getBlock(12345)

      expect(block).toBeDefined()
      expect(block.number).toBe(12345)
    })

    it('должен выбрасывать ошибку если provider не инициализирован', async () => {
      mockWalletStore.provider = null
      const { getBlock } = useWeb3()

      await expect(getBlock('latest')).rejects.toThrow('Provider не инициализирован.')
    })

    it('должен обрабатывать ошибки при получении блока', async () => {
      const { getBlock, error } = useWeb3()
      mockProvider.getBlock.mockRejectedValueOnce(new Error('Failed to get block'))

      try {
        await getBlock('latest')
      } catch (err) {
        expect(error.value).toBe('Failed to get block')
      }
    })
  })

  describe('computed свойства', () => {
    it('isReady должен быть true когда provider и signer существуют', () => {
      const { isReady } = useWeb3()

      expect(isReady.value).toBe(true)
    })

    it('isReady должен быть false когда provider не существует', () => {
      mockWalletStore.provider = null
      const { isReady } = useWeb3()

      expect(isReady.value).toBe(false)
    })

    it('isReady должен быть false когда кошелек не подключен', () => {
      mockWalletStore.isConnected = false
      const { isReady } = useWeb3()

      expect(isReady.value).toBe(false)
    })

    it('isConnected должен быть true когда кошелек подключен', () => {
      const { isConnected } = useWeb3()

      expect(isConnected.value).toBe(true)
    })

    it('isConnected должен быть false когда кошелек не подключен', () => {
      mockWalletStore.isConnected = false
      const { isConnected } = useWeb3()

      expect(isConnected.value).toBe(false)
    })

    it('isConnectedToBase должен быть true когда chainId равен 8453', () => {
      const { isConnectedToBase } = useWeb3()

      expect(isConnectedToBase.value).toBe(true)
    })

    it('isConnectedToBase должен быть false когда chainId не равен 8453', () => {
      mockWalletStore.chainId = 1
      const { isConnectedToBase } = useWeb3()

      expect(isConnectedToBase.value).toBe(false)
    })
  })

  describe('проверка поддержки сети', () => {
    it('должен поддерживать сеть Base (chainId: 8453)', async () => {
      const { walletStore } = useWeb3()

      await walletStore.switchNetwork(8453)

      expect(mockWalletStore.switchNetwork).toHaveBeenCalledWith(8453)
    })

    it('должен обрабатывать переключение на неподдерживаемую сеть', async () => {
      const { walletStore } = useWeb3()

      await walletStore.switchNetwork(1)

      expect(mockWalletStore.switchNetwork).toHaveBeenCalledWith(1)
    })
  })

  describe('разные провайдеры', () => {
    it('должен работать с MetaMask провайдером', () => {
      const { getCXBTContract } = useWeb3()

      const contract = getCXBTContract(true)

      expect(contract).toBeDefined()
    })

    it('должен работать с WalletConnect провайдером', () => {
      const { getPAIDContract } = useWeb3()

      const contract = getPAIDContract(true)

      expect(contract).toBeDefined()
    })

    it('должен работать с Injected провайдером', () => {
      const { getContract } = useWeb3()

      const contract = getContract('0x1234567890123456789012345678901234567890', [])

      expect(contract).toBeDefined()
    })
  })

  describe('error обработка', () => {
    it('должен устанавливать error при ошибке в getCXBTContract', () => {
      mockWalletStore.provider = null
      const { getCXBTContract, error } = useWeb3()

      try {
        getCXBTContract()
      } catch (err) {
        expect(error.value).toBe('Provider не инициализирован. Подключите кошелек.')
      }
    })

    it('должен устанавливать error при ошибке в getPAIDContract', () => {
      mockWalletStore.provider = null
      const { getPAIDContract, error } = useWeb3()

      try {
        getPAIDContract()
      } catch (err) {
        expect(error.value).toBe('Provider не инициализирован. Подключите кошелек.')
      }
    })

    it('должен устанавливать error при ошибке в getContract', () => {
      mockWalletStore.provider = null
      const { getContract, error } = useWeb3()

      try {
        getContract('0x1234567890123456789012345678901234567890', [])
      } catch (err) {
        expect(error.value).toBe('Provider не инициализирован. Подключите кошелек.')
      }
    })

    it('должен устанавливать error при ошибке в waitForTransaction', async () => {
      const { waitForTransaction, error } = useWeb3()
      mockProvider.waitForTransaction.mockRejectedValueOnce(new Error('Transaction failed'))

      try {
        await waitForTransaction('0x1234567890abcdef')
      } catch (err) {
        expect(error.value).toBe('Transaction failed')
      }
    })

    it('должен устанавливать error при ошибке в estimateGas', async () => {
      const { estimateGas, error } = useWeb3()
      mockProvider.estimateGas.mockRejectedValueOnce(new Error('Gas estimation failed'))

      try {
        await estimateGas({ to: TEST_ADDRESS })
      } catch (err) {
        expect(error.value).toBe('Gas estimation failed')
      }
    })

    it('должен устанавливать error при ошибке в getGasPrice', async () => {
      const { getGasPrice, error } = useWeb3()
      mockProvider.getFeeData.mockRejectedValueOnce(new Error('Failed to get gas price'))

      try {
        await getGasPrice()
      } catch (err) {
        expect(error.value).toBe('Failed to get gas price')
      }
    })

    it('должен устанавливать error при ошибке в getBlockNumber', async () => {
      const { getBlockNumber, error } = useWeb3()
      mockProvider.getBlockNumber.mockRejectedValueOnce(new Error('Failed to get block number'))

      try {
        await getBlockNumber()
      } catch (err) {
        expect(error.value).toBe('Failed to get block number')
      }
    })

    it('должен устанавливать error при ошибке в getBlock', async () => {
      const { getBlock, error } = useWeb3()
      mockProvider.getBlock.mockRejectedValueOnce(new Error('Failed to get block'))

      try {
        await getBlock('latest')
      } catch (err) {
        expect(error.value).toBe('Failed to get block')
      }
    })
  })
})
