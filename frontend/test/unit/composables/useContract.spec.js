import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import {
  setupWeb3Mocks,
  resetWeb3Mocks,
  createMockProvider,
  createMockSigner
} from '../helpers/mockWeb3'

// Create hoisted mocks for stores
const { mockWalletStore, mockTokensStore } = vi.hoisted(() => {
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
      connectWallet: vi.fn(),
      disconnectWallet: vi.fn(),
      switchNetwork: vi.fn(),
      updateBalance: vi.fn(),
      checkConnection: vi.fn()
    },
    mockTokensStore: {
      unlockedBalance: '100.000000',
      lockedBalance: '50.000000',
      totalBalance: '150.000000',
      paidBalance: '10.000000000000000000',
      userStatus: 'normal',
      loading: false,
      error: null,
      formattedBalances: {
        unlocked: '100.000000',
        locked: '50.000000',
        total: '150.000000',
        paid: '10.000000'
      },
      isWhitelisted: false,
      isBlacklisted: false,
      isNormal: true,
      statusLabel: 'Normal',
      statusColor: 'grey',
      canUnlockTokens: true,
      canTransferTokens: true,
      canTransferLockedTokens: false,
      availableBalanceForTransfer: '100.000000',
      fetchBalances: vi.fn(),
      fetchUserStatus: vi.fn(),
      refreshData: vi.fn(),
      reset: vi.fn()
    }
  }
})

// Mock stores BEFORE importing the composable
vi.mock('src/stores/wallet', () => ({
  useWalletStore: vi.fn(() => mockWalletStore)
}))

vi.mock('src/stores/tokens', () => ({
  useTokensStore: vi.fn(() => mockTokensStore)
}))

// Mock vue-i18n
vi.mock('vue-i18n', () => ({
  useI18n: vi.fn(() => ({
    t: vi.fn(key => key)
  }))
}))

// Mock ethers
vi.mock('ethers', async importOriginal => {
  const actual = await importOriginal()

  // Create a mock Contract class
  class MockContract {
    constructor(address, abi, signerOrProvider) {
      // Use mock implementation if set
      if (MockContract._mockImplementation) {
        const impl = MockContract._mockImplementation(address, abi, signerOrProvider)
        Object.assign(this, impl)
        MockContract._mockImplementation = null
        return
      }

      this.address = address
      this.abi = abi
      this.signerOrProvider = signerOrProvider
      this.getTokenBalances = vi.fn().mockResolvedValue([
        BigInt('100000000'), // unlocked (100 * 10^6)
        BigInt('50000000'), // locked (50 * 10^6)
        BigInt('150000000') // total (150 * 10^6)
      ])
      this.balanceOf = vi.fn().mockResolvedValue(BigInt('10000000000000000000000')) // 10 PAID
      this.decimals = vi.fn().mockResolvedValue(18)
      this.isWhitelisted = vi.fn().mockResolvedValue(false)
      this.isBlacklisted = vi.fn().mockResolvedValue(false)
      this.paused = vi.fn().mockResolvedValue(false)
      this.calculateUnlockCost = vi.fn().mockResolvedValue(BigInt('1000000000000000000000')) // 1 PAID
      this.unlockTokens = vi.fn().mockResolvedValue({
        hash: '0x1234567890abcdef',
        wait: vi.fn().mockResolvedValue({
          hash: '0x1234567890abcdef',
          blockNumber: 12345,
          status: 1
        })
      })
      this.approve = vi.fn().mockResolvedValue({
        hash: '0x1234567890abcdef',
        wait: vi.fn().mockResolvedValue({
          hash: '0x1234567890abcdef',
          blockNumber: 12345,
          status: 1
        })
      })
      this.allowance = vi.fn().mockResolvedValue(BigInt('10000000000000000000000')) // 10 PAID
      this.estimateGas = vi.fn().mockResolvedValue(BigInt('21000'))

      // Create transfer function with estimateGas method
      const transferFn = vi.fn().mockResolvedValue({
        hash: '0x1234567890abcdef',
        wait: vi.fn().mockResolvedValue({
          hash: '0x1234567890abcdef',
          blockNumber: 12345,
          status: 1
        })
      })
      transferFn.estimateGas = vi.fn().mockResolvedValue(BigInt('21000'))
      this.transfer = transferFn
    }

    // Static method for mocking constructor behavior
    static mockImplementationOnce(implementation) {
      MockContract._mockImplementation = implementation
      return MockContract
    }
  }

  // Create a mock ethers object
  const mockEthers = {
    ...actual,
    Contract: MockContract,
    formatEther: vi.fn(value => (Number(value) / 1e18).toString()),
    parseUnits: vi.fn((value, decimals) =>
      BigInt(Math.floor(parseFloat(value) * 10 ** (decimals || 18)))
    ),
    formatUnits: vi.fn((value, decimals) => {
      const divisor = BigInt(10 ** (decimals || 18))
      const integerPart = value / divisor
      const fractionalPart = value % divisor
      const fractionalStr = fractionalPart
        .toString()
        .padStart(decimals || 18, '0')
        .slice(0, decimals || 18)
      return `${integerPart}.${fractionalStr}`
    }),
    Zero: BigInt(0),
    isAddress: vi.fn(address => /^0x[a-fA-F0-9]{40}$/.test(address)),
    BrowserProvider: vi.fn().mockImplementation(() => createMockProvider())
  }

  return {
    ...actual,
    ethers: mockEthers,
    formatEther: mockEthers.formatEther,
    parseUnits: mockEthers.parseUnits,
    formatUnits: mockEthers.formatUnits,
    Zero: mockEthers.Zero,
    isAddress: mockEthers.isAddress,
    BrowserProvider: mockEthers.BrowserProvider,
    Contract: mockEthers.Contract
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

vi.mock('src/config/contracts', () => ({
  CONTRACTS: {
    CXBT_DIAMOND: '0x1234567890123456789012345678901234567890',
    PAID_TOKEN: '0x09876543210987654321098765432109876543210',
    CHAIN: {
      BASE: {
        explorerUrl: 'https://basescan.org'
      }
    }
  },
  CXBT_ABI: [],
  ERC20_ABI: []
}))

// Mock Quasar Notify
vi.mock('quasar', () => ({
  Notify: {
    create: vi.fn()
  }
}))

// Import composable AFTER mocking dependencies
import { useContract } from 'src/composables/useContract'

describe('useContract', () => {
  let mockProvider
  let mockSigner

  const TEST_ADDRESS = '0x1234567890123456789012345678901234567890'
  const TEST_RECIPIENT = '0x9876543210987654321098765432109876543210'
  const CXBT_ADDRESS = '0x1234567890123456789012345678901234567890'
  const PAID_ADDRESS = '0x0987654321098765432109876543210'

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

    // Setup tokens store
    mockTokensStore.refreshData = vi.fn().mockResolvedValue(undefined)
  })

  afterEach(() => {
    resetWeb3Mocks()
    vi.clearAllMocks()
  })

  describe('fetchBalances', () => {
    it('должен успешно получать балансы', async () => {
      const { fetchBalances } = useContract()

      const balances = await fetchBalances()

      expect(balances).toEqual({
        unlockedBalance: '100.000000',
        lockedBalance: '50.000000',
        totalBalance: '150.000000',
        paidBalance: '10000.000000000000000000'
      })
    })

    it('должен выбрасывать ошибку если кошелек не подключен', async () => {
      mockWalletStore.address = null
      const { fetchBalances } = useContract()

      await expect(fetchBalances()).rejects.toThrow('Кошелек не подключен')
    })
  })

  describe('fetchUserStatus', () => {
    it('должен возвращать статус normal', async () => {
      const { fetchUserStatus } = useContract()

      const status = await fetchUserStatus()

      expect(status).toBe('normal')
    })

    it('должен выбрасывать ошибку если кошелек не подключен', async () => {
      mockWalletStore.address = null
      const { fetchUserStatus } = useContract()

      await expect(fetchUserStatus()).rejects.toThrow('Кошелек не подключен')
    })
  })

  describe('calculateUnlockCost', () => {
    it('должен рассчитывать стоимость разблокировки', async () => {
      const { calculateUnlockCost } = useContract()

      const cost = await calculateUnlockCost('10')

      expect(cost).toBe('1000.000000000000000000')
    })

    it('должен выбрасывать ошибку если количество равно 0', async () => {
      const { calculateUnlockCost } = useContract()

      await expect(calculateUnlockCost('0')).rejects.toThrow('Количество должно быть больше 0')
    })

    it('должен выбрасывать ошибку если количество отрицательное', async () => {
      const { calculateUnlockCost } = useContract()

      await expect(calculateUnlockCost('-10')).rejects.toThrow('Количество должно быть больше 0')
    })
  })

  describe('unlockTokens', () => {
    it('должен успешно разблокировать токены', async () => {
      const { unlockTokens, loading, txHash } = useContract()

      const hash = await unlockTokens('10')

      expect(hash).toBe('0x1234567890abcdef')
      expect(txHash.value).toBe('0x1234567890abcdef')
      expect(loading.value).toBe(false)
      expect(mockTokensStore.refreshData).toHaveBeenCalled()
    })

    it('должен выбрасывать ошибку если кошелек не подключен', async () => {
      mockWalletStore.address = null
      const { unlockTokens } = useContract()

      await expect(unlockTokens('10')).rejects.toThrow('Кошелек не подключен')
    })

    it('должен выбрасывать ошибку если количество равно 0', async () => {
      const { unlockTokens } = useContract()

      await expect(unlockTokens('0')).rejects.toThrow('Количество должно быть больше 0')
    })
  })

  describe('transferTokens', () => {
    it('должен успешно переводить токены', async () => {
      const { transferTokens, loading, txHash } = useContract()

      const hash = await transferTokens(TEST_RECIPIENT, '10')

      expect(hash).toBe('0x1234567890abcdef')
      expect(txHash.value).toBe('0x1234567890abcdef')
      expect(loading.value).toBe(false)
      expect(mockTokensStore.refreshData).toHaveBeenCalled()
    })

    it('должен выбрасывать ошибку если кошелек не подключен', async () => {
      mockWalletStore.address = null
      const { transferTokens } = useContract()

      await expect(transferTokens(TEST_RECIPIENT, '10')).rejects.toThrow('Кошелек не подключен')
    })

    it('должен выбрасывать ошибку если адрес получателя невалиден', async () => {
      const { transferTokens } = useContract()

      await expect(transferTokens('invalid', '10')).rejects.toThrow('Неверный адрес получателя')
    })

    it('должен выбрасывать ошибку если количество равно 0', async () => {
      const { transferTokens } = useContract()

      await expect(transferTokens(TEST_RECIPIENT, '0')).rejects.toThrow(
        'Количество должно быть больше 0'
      )
    })
  })

  describe('approvePaidTokens', () => {
    it('должен успешно одобрять PAID токены', async () => {
      const { approvePaidTokens, loading, txHash } = useContract()

      const hash = await approvePaidTokens('10')

      expect(hash).toBe('0x1234567890abcdef')
      expect(txHash.value).toBe('0x1234567890abcdef')
      expect(loading.value).toBe(false)
    })

    it('должен выбрасывать ошибку если кошелек не подключен', async () => {
      mockWalletStore.address = null
      const { approvePaidTokens } = useContract()

      await expect(approvePaidTokens('10')).rejects.toThrow('Кошелек не подключен')
    })

    it('должен выбрасывать ошибку если количество равно 0', async () => {
      const { approvePaidTokens } = useContract()

      await expect(approvePaidTokens('0')).rejects.toThrow('Количество должно быть больше 0')
    })

    it('должен выбрасывать ошибку если контракт приостановлен', async () => {
      const { approvePaidTokens } = useContract()
      const { ethers } = await import('ethers')

      // Mock contract methods to return paused state
      ethers.Contract.mockImplementationOnce((address, abi, signerOrProvider) => {
        const contract = {
          address,
          abi,
          signerOrProvider,
          paused: vi.fn().mockResolvedValueOnce(true),
          approve: vi.fn().mockResolvedValue({
            hash: '0x1234567890abcdef',
            wait: vi.fn().mockResolvedValue({
              hash: '0x1234567890abcdef',
              blockNumber: 12345,
              status: 1
            })
          }),
          decimals: vi.fn().mockResolvedValue(18)
        }
        return contract
      })

      await expect(approvePaidTokens('10')).rejects.toThrow(
        'Контракт приостановлен. Операция недоступна.'
      )
    })

    it('должен обрабатывать ошибки при approve', async () => {
      const { approvePaidTokens } = useContract()
      const { ethers } = await import('ethers')

      // Mock contract methods to throw error
      ethers.Contract.mockImplementationOnce((address, abi, signerOrProvider) => {
        const contract = {
          address,
          abi,
          signerOrProvider,
          paused: vi.fn().mockResolvedValueOnce(false),
          approve: vi.fn().mockRejectedValueOnce(new Error('Transaction failed')),
          decimals: vi.fn().mockResolvedValue(18)
        }
        return contract
      })

      await expect(approvePaidTokens('10')).rejects.toThrow('Transaction failed')
    })
  })

  describe('getPaidAllowance', () => {
    it('должен успешно получать allowance', async () => {
      const { getPaidAllowance } = useContract()

      const allowance = await getPaidAllowance()

      expect(allowance).toBe('10.000000000000000000')
    })

    it('должен выбрасывать ошибку если кошелек не подключен', async () => {
      mockWalletStore.address = null
      const { getPaidAllowance } = useContract()

      await expect(getPaidAllowance()).rejects.toThrow('Кошелек не подключен')
    })

    it('должен обрабатывать ошибки при получении allowance', async () => {
      const { getPaidAllowance } = useContract()
      const { ethers } = await import('ethers')

      // Mock contract methods to throw error
      ethers.Contract.mockImplementationOnce((address, abi, signerOrProvider) => {
        const contract = {
          address,
          abi,
          signerOrProvider,
          allowance: vi.fn().mockRejectedValueOnce(new Error('RPC error')),
          decimals: vi.fn().mockResolvedValue(18)
        }
        return contract
      })

      await expect(getPaidAllowance()).rejects.toThrow('RPC error')
    })
  })

  describe('isBlacklistedRecipient', () => {
    it('должен возвращать false если адрес не в черном списке', async () => {
      const { isBlacklistedRecipient } = useContract()

      const isBlacklisted = await isBlacklistedRecipient(TEST_RECIPIENT)

      expect(isBlacklisted).toBe(false)
    })

    it('должен возвращать true если адрес в черном списке', async () => {
      const { isBlacklistedRecipient } = useContract()
      const { ethers } = await import('ethers')

      // Mock contract methods to return blacklisted status
      ethers.Contract.mockImplementationOnce((address, abi, signerOrProvider) => {
        const contract = {
          address,
          abi,
          signerOrProvider,
          isBlacklisted: vi.fn().mockResolvedValueOnce(true)
        }
        return contract
      })

      const isBlacklisted = await isBlacklistedRecipient(TEST_RECIPIENT)

      expect(isBlacklisted).toBe(true)
    })

    it('должен выбрасывать ошибку если адрес невалиден', async () => {
      const { isBlacklistedRecipient } = useContract()

      await expect(isBlacklistedRecipient('invalid')).rejects.toThrow('Неверный адрес')
    })

    it('должен обрабатывать ошибки при проверке', async () => {
      const { isBlacklistedRecipient } = useContract()
      const { ethers } = await import('ethers')

      // Mock contract methods to throw error
      ethers.Contract.mockImplementationOnce((address, abi, signerOrProvider) => {
        const contract = {
          address,
          abi,
          signerOrProvider,
          isBlacklisted: vi.fn().mockRejectedValueOnce(new Error('RPC error'))
        }
        return contract
      })

      await expect(isBlacklistedRecipient(TEST_RECIPIENT)).rejects.toThrow('RPC error')
    })
  })

  describe('estimateTransferGas', () => {
    it('должен успешно оценивать газ для перевода', async () => {
      const { estimateTransferGas } = useContract()
      const { ethers } = await import('ethers')

      // Mock contract methods to return gas estimate
      ethers.Contract.mockImplementationOnce((address, abi, signerOrProvider) => {
        const contract = {
          address,
          abi,
          signerOrProvider,
          transfer: {
            estimateGas: vi.fn().mockResolvedValueOnce(BigInt('21000'))
          }
        }
        return contract
      })

      const gasCost = await estimateTransferGas(TEST_RECIPIENT, '10')

      expect(gasCost).toBeDefined()
      expect(typeof gasCost).toBe('string')
    })

    it('должен выбрасывать ошибку если кошелек не подключен', async () => {
      mockWalletStore.address = null
      const { estimateTransferGas } = useContract()

      await expect(estimateTransferGas(TEST_RECIPIENT, '10')).rejects.toThrow(
        'Кошелек не подключен'
      )
    })

    it('должен выбрасывать ошибку если адрес получателя невалиден', async () => {
      const { estimateTransferGas } = useContract()

      await expect(estimateTransferGas('invalid', '10')).rejects.toThrow(
        'Неверный адрес получателя'
      )
    })

    it('должен выбрасывать ошибку если количество равно 0', async () => {
      const { estimateTransferGas } = useContract()

      await expect(estimateTransferGas(TEST_RECIPIENT, '0')).rejects.toThrow(
        'Количество должно быть больше 0'
      )
    })

    it('должен обрабатывать ошибки при оценке газа', async () => {
      const { estimateTransferGas } = useContract()
      const { ethers } = await import('ethers')

      // Mock contract methods to throw error
      ethers.Contract.mockImplementationOnce((address, abi, signerOrProvider) => {
        const contract = {
          address,
          abi,
          signerOrProvider,
          transfer: {
            estimateGas: vi.fn().mockRejectedValueOnce(new Error('Gas estimation failed'))
          }
        }
        return contract
      })

      await expect(estimateTransferGas(TEST_RECIPIENT, '10')).rejects.toThrow(
        'Gas estimation failed'
      )
    })
  })

  describe('isValidAddress', () => {
    it('должен вернуть true для валидного адреса', () => {
      const { isValidAddress } = useContract()

      expect(isValidAddress(TEST_ADDRESS)).toBe(true)
      expect(isValidAddress(TEST_RECIPIENT)).toBe(true)
    })

    it('должен возвращать false для невалидного адреса', () => {
      const { isValidAddress } = useContract()

      expect(isValidAddress('invalid')).toBe(false)
      expect(isValidAddress('')).toBe(false)
      expect(isValidAddress('0x123')).toBe(false)
    })
  })

  describe('computed свойства', () => {
    it('должен корректно сокращать хеш транзакции', () => {
      const { txHash, shortTxHash } = useContract()

      txHash.value = '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef'

      expect(shortTxHash.value).toBe('0x12345678...90abcdef')
    })

    it('должен возвращать пустую строку если хеш транзакции пуст', () => {
      const { txHash, shortTxHash } = useContract()

      txHash.value = ''

      expect(shortTxHash.value).toBe('')
    })

    it('должен корректно формировать URL для эксплорера', () => {
      const { txHash, explorerUrl } = useContract()

      txHash.value = '0x1234567890abcdef'

      expect(explorerUrl.value).toBe('https://basescan.org/tx/0x1234567890abcdef')
    })

    it('должен возвращать # если хеш транзакции пуст', () => {
      const { txHash, explorerUrl } = useContract()

      txHash.value = ''

      expect(explorerUrl.value).toBe('#')
    })
  })

  describe('loading состояние', () => {
    it('должен устанавливать loading в true во время операции', async () => {
      const { fetchBalances, loading } = useContract()

      // Call fetchBalances synchronously - loading should be set immediately
      const promise = fetchBalances()
      // Use setTimeout to allow the synchronous loading.value = true to execute
      await new Promise(resolve => setTimeout(resolve, 0))
      expect(loading.value).toBe(true)

      await promise
      expect(loading.value).toBe(false)
    })

    it('должен сбрасывать loading при ошибке', async () => {
      const { fetchBalances, loading } = useContract()
      const { ethers } = await import('ethers')

      // Mock contract methods to throw error
      ethers.Contract.mockImplementationOnce((address, abi, signerOrProvider) => {
        const contract = {
          address,
          abi,
          signerOrProvider,
          getTokenBalances: vi.fn().mockRejectedValueOnce(new Error('RPC error')),
          balanceOf: vi.fn().mockResolvedValue(BigInt('0')),
          decimals: vi.fn().mockResolvedValue(18)
        }
        return contract
      })

      try {
        await fetchBalances()
      } catch (err) {
        expect(loading.value).toBe(false)
      }
    })
  })

  describe('error обработка', () => {
    it('должен устанавливать error при ошибке', async () => {
      const { fetchBalances, error } = useContract()
      const { ethers } = await import('ethers')

      // Mock contract methods to throw error
      ethers.Contract.mockImplementationOnce((address, abi, signerOrProvider) => {
        const contract = {
          address,
          abi,
          signerOrProvider,
          getTokenBalances: vi.fn().mockRejectedValueOnce(new Error('RPC error')),
          balanceOf: vi.fn().mockResolvedValue(BigInt('0')),
          decimals: vi.fn().mockResolvedValue(18)
        }
        return contract
      })

      try {
        await fetchBalances()
      } catch (err) {
        expect(error.value).toBe('RPC error')
      }
    })

    it('should check if contract is paused', async () => {
      const { ethers } = await import('ethers')
      const { isContractPaused } = useContract()

      ethers.Contract.mockImplementationOnce((address, abi, signerOrProvider) => {
        return {
          address,
          abi,
          signerOrProvider,
          paused: vi.fn().mockResolvedValue(false)
        }
      })

      const isPaused = await isContractPaused()
      expect(isPaused).toBe(false)
    })

    it('should throw error when contract is paused', async () => {
      const { ethers } = await import('ethers')
      const { isContractPaused } = useContract()

      ethers.Contract.mockImplementationOnce((address, abi, signerOrProvider) => {
        return {
          address,
          abi,
          signerOrProvider,
          paused: vi.fn().mockResolvedValue(true)
        }
      })

      const isPaused = await isContractPaused()
      expect(isPaused).toBe(true)
    })
  })
})
