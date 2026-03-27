import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useWalletStore } from 'src/stores/wallet'
import { Notify } from 'quasar'

// Mock Notify
vi.mock('quasar', () => ({
  Notify: {
    create: vi.fn()
  }
}))

// Mock ethers
vi.mock('ethers', async importOriginal => {
  const actual = await importOriginal()

  return {
    ...actual,
    BrowserProvider: vi.fn().mockImplementation(() => ({
      getNetwork: vi.fn().mockResolvedValue({ chainId: 8453n }),
      getSigner: vi.fn(),
      send: vi.fn()
    }))
  }
})

describe('Wallet Store', () => {
  let walletStore

  beforeEach(() => {
    setActivePinia(createPinia())
    walletStore = useWalletStore()
    localStorage.clear()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('Инициализация состояния', () => {
    it('должен инициализировать состояние с значениями по умолчанию', () => {
      expect(walletStore.isConnected).toBe(false)
      expect(walletStore.address).toBe(null)
      expect(walletStore.chainId).toBe(null)
      expect(walletStore.signer).toBe(null)
      expect(walletStore.provider).toBe(null)
      expect(walletStore.balance).toBe('0')
      expect(walletStore.loading).toBe(false)
      expect(walletStore.error).toBe(null)
    })
  })

  describe('Getters', () => {
    it('должен возвращать короткий адрес', () => {
      walletStore.address = '0x123456789012345678901234567890123456'

      expect(walletStore.shortAddress).toBe('0x1234...7890')
    })

    it('должен возвращать null для короткого адреса если адрес null', () => {
      walletStore.address = null

      expect(walletStore.shortAddress).toBe('')
    })

    it('должен возвращать текущую сеть', () => {
      walletStore.chainId = 8453

      expect(walletStore.currentChain).toEqual({
        chainId: 8453,
        name: 'Base',
        currency: 'ETH',
        rpcUrl: 'https://mainnet.base.org'
      })
    })

    it('должен возвращать null для текущей сети если chainId null', () => {
      walletStore.chainId = null

      expect(walletStore.currentChain).toBe(null)
    })

    it('должен проверять, что сеть Base', () => {
      walletStore.chainId = 8453

      expect(walletStore.isBaseNetwork).toBe(true)
    })

    it('должен возвращать false если сеть не Base', () => {
      walletStore.chainId = 1

      expect(walletStore.isBaseNetwork).toBe(false)
    })
  })

  describe('Actions', () => {
    it('должен устанавливать isConnected в true при успешном подключении', async () => {
      const mockProvider = {
        getNetwork: vi.fn().mockResolvedValue({ chainId: 8453n }),
        getSigner: vi.fn().mockResolvedValue({ address: '0x123456789012345678901234567890123456' })
      }

      global.window.ethereum.request = vi
        .fn()
        .mockResolvedValue([{ chainId: '0x2105' }, [0, '0x123456789012345678901234567890123456']])

      await walletStore.connectWallet()

      expect(walletStore.isConnected).toBe(true)
    })

    it('должен сбрасывать состояние при отключении', () => {
      walletStore.isConnected = true
      walletStore.address = '0x123456789012345678901234567890123456'
      walletStore.chainId = 8453

      walletStore.disconnectWallet()

      expect(walletStore.isConnected).toBe(false)
      expect(walletStore.address).toBe(null)
      expect(walletStore.chainId).toBe(null)
    })
  })
})
