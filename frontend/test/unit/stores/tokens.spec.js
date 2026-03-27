import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useTokensStore } from 'src/stores/tokens'
import { createMockWalletStore } from '../helpers/mockStore'
import { Notify } from 'quasar'

// Mock Notify
vi.mock('quasar', () => ({
  Notify: {
    create: vi.fn()
  }
}))

// Mock useContract composable
const mockUseContract = vi.fn()
vi.mock('src/composables/useContract', () => ({
  useContract: () => mockUseContract()
}))

describe('Tokens Store', () => {
  let tokensStore
  let mockWalletStore

  beforeEach(() => {
    setActivePinia(createPinia())
    tokensStore = useTokensStore()
    mockWalletStore = createMockWalletStore()

    // Mock useContract to return a mock contract
    mockUseContract.mockReturnValue({
      fetchBalances: vi.fn().mockResolvedValue({
        unlockedBalance: '100.000000',
        lockedBalance: '50.000000',
        totalBalance: '150.000000',
        paidBalance: '10.000000000000000000'
      }),
      fetchUserStatus: vi.fn().mockResolvedValue('normal')
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('Инициализация состояния', () => {
    it('должен инициализировать состояние с значениями по умолчанию', () => {
      expect(tokensStore.unlockedBalance).toBe('0')
      expect(tokensStore.lockedBalance).toBe('0')
      expect(tokensStore.totalBalance).toBe('0')
      expect(tokensStore.paidBalance).toBe('0')
      expect(tokensStore.userStatus).toBe('normal')
      expect(tokensStore.loading).toBe(false)
      expect(tokensStore.error).toBe(null)
    })

    it('должен инициализировать все state переменные', () => {
      expect(tokensStore.unlockedBalance).toBeDefined()
      expect(tokensStore.lockedBalance).toBeDefined()
      expect(tokensStore.totalBalance).toBeDefined()
      expect(tokensStore.paidBalance).toBeDefined()
      expect(tokensStore.userStatus).toBeDefined()
      expect(tokensStore.loading).toBeDefined()
      expect(tokensStore.error).toBeDefined()
    })

    it('должен инициализировать loading в false', () => {
      expect(tokensStore.loading).toBe(false)
    })

    it('должен инициализировать error в null', () => {
      expect(tokensStore.error).toBe(null)
    })

    it('должен инициализировать userStatus в "normal"', () => {
      expect(tokensStore.userStatus).toBe('normal')
    })

    it('должен инициализировать все балансы в "0"', () => {
      expect(tokensStore.unlockedBalance).toBe('0')
      expect(tokensStore.lockedBalance).toBe('0')
      expect(tokensStore.totalBalance).toBe('0')
      expect(tokensStore.paidBalance).toBe('0')
    })
  })

  describe('Getters', () => {
    describe('formattedBalances', () => {
      it('должен форматировать балансы', () => {
        tokensStore.unlockedBalance = '100.123456'
        tokensStore.lockedBalance = '50.654321'
        tokensStore.totalBalance = '150.777777'
        tokensStore.paidBalance = '10.000000000000000000'

        const formatted = tokensStore.formattedBalances

        expect(formatted.unlocked).toBe('100.123456')
        expect(formatted.locked).toBe('50.654321')
        expect(formatted.total).toBe('150.777777')
        expect(formatted.paid).toBe('10.000000')
      })

      it('должен форматировать нулевые балансы', () => {
        tokensStore.unlockedBalance = '0'
        tokensStore.lockedBalance = '0'
        tokensStore.totalBalance = '0'
        tokensStore.paidBalance = '0'

        const formatted = tokensStore.formattedBalances

        expect(formatted.unlocked).toBe('0.000000')
        expect(formatted.locked).toBe('0.000000')
        expect(formatted.total).toBe('0.000000')
        expect(formatted.paid).toBe('0.000000')
      })

      it('должен форматировать очень маленькие балансы', () => {
        tokensStore.unlockedBalance = '0.0000005'
        tokensStore.lockedBalance = '0.0000001'
        tokensStore.totalBalance = '0.0000006'
        tokensStore.paidBalance = '0.000000000000000001'

        const formatted = tokensStore.formattedBalances

        expect(formatted.unlocked).toBe('< 0.000001')
        expect(formatted.locked).toBe('< 0.000001')
        expect(formatted.total).toBe('< 0.000001')
        expect(formatted.paid).toBe('< 0.000001')
      })

      it('должен форматировать очень большие балансы', () => {
        tokensStore.unlockedBalance = '999999999999.999999'
        tokensStore.lockedBalance = '888888888888.888888'
        tokensStore.totalBalance = '1888888888888.888887'
        tokensStore.paidBalance = '777777777777.777777'

        const formatted = tokensStore.formattedBalances

        expect(formatted.unlocked).toBe('999999999999.999999')
        expect(formatted.locked).toBe('888888888888.888888')
        expect(formatted.total).toBe('1888888888888.888887')
        expect(formatted.paid).toBe('777777777777.777777')
      })

      it('должен форматировать отрицательные балансы как 0', () => {
        tokensStore.unlockedBalance = '-100.000000'
        tokensStore.lockedBalance = '-50.000000'
        tokensStore.totalBalance = '-150.000000'
        tokensStore.paidBalance = '-10.000000'

        const formatted = tokensStore.formattedBalances

        // Отрицательные значения должны обрабатываться как ошибки и возвращать 0.000000
        expect(formatted.unlocked).toBe('0.000000')
        expect(formatted.locked).toBe('0.000000')
        expect(formatted.total).toBe('0.000000')
        expect(formatted.paid).toBe('0.000000')
      })

      it('должен форматировать балансы с разным количеством десятичных знаков', () => {
        tokensStore.unlockedBalance = '100.1'
        tokensStore.lockedBalance = '50.12'
        tokensStore.totalBalance = '150.123'
        tokensStore.paidBalance = '10.1234'

        const formatted = tokensStore.formattedBalances

        expect(formatted.unlocked).toBe('100.100000')
        expect(formatted.locked).toBe('50.120000')
        expect(formatted.total).toBe('150.123000')
        expect(formatted.paid).toBe('10.123400')
      })

      it('должен форматировать балансы с научной нотацией', () => {
        tokensStore.unlockedBalance = '1e-10'
        tokensStore.lockedBalance = '1e-7'
        tokensStore.totalBalance = '1.0000001e-7'
        tokensStore.paidBalance = '1e-9'

        const formatted = tokensStore.formattedBalances

        expect(formatted.unlocked).toBe('< 0.000001')
        expect(formatted.locked).toBe('< 0.000001')
        expect(formatted.total).toBe('< 0.000001')
        expect(formatted.paid).toBe('< 0.000001')
      })

      it('должен возвращать объект со всеми полями', () => {
        const formatted = tokensStore.formattedBalances

        expect(formatted).toHaveProperty('unlocked')
        expect(formatted).toHaveProperty('locked')
        expect(formatted).toHaveProperty('total')
        expect(formatted).toHaveProperty('paid')
      })

      it('должен возвращать строки для всех полей', () => {
        const formatted = tokensStore.formattedBalances

        expect(typeof formatted.unlocked).toBe('string')
        expect(typeof formatted.locked).toBe('string')
        expect(typeof formatted.total).toBe('string')
        expect(typeof formatted.paid).toBe('string')
      })

      it('должен форматировать балансы с нулевым значением после запятой', () => {
        tokensStore.unlockedBalance = '100.000000'
        tokensStore.lockedBalance = '50.000000'
        tokensStore.totalBalance = '150.000000'
        tokensStore.paidBalance = '10.000000'

        const formatted = tokensStore.formattedBalances

        expect(formatted.unlocked).toBe('100.000000')
        expect(formatted.locked).toBe('50.000000')
        expect(formatted.total).toBe('150.000000')
        expect(formatted.paid).toBe('10.000000')
      })

      it('должен форматировать балансы с максимальным количеством знаков', () => {
        tokensStore.unlockedBalance = '0.999999'
        tokensStore.lockedBalance = '0.999999'
        tokensStore.totalBalance = '1.999998'
        tokensStore.paidBalance = '0.999999'

        const formatted = tokensStore.formattedBalances

        expect(formatted.unlocked).toBe('0.999999')
        expect(formatted.locked).toBe('0.999999')
        expect(formatted.total).toBe('1.999998')
        expect(formatted.paid).toBe('0.999999')
      })
    })

    describe('isWhitelisted', () => {
      it('должен возвращать true для whitelisted статуса', () => {
        tokensStore.userStatus = 'whitelisted'
        expect(tokensStore.isWhitelisted).toBe(true)
      })

      it('должен возвращать false для других статусов', () => {
        tokensStore.userStatus = 'normal'
        expect(tokensStore.isWhitelisted).toBe(false)

        tokensStore.userStatus = 'blacklisted'
        expect(tokensStore.isWhitelisted).toBe(false)
      })

      it('должен возвращать boolean', () => {
        tokensStore.userStatus = 'whitelisted'
        expect(typeof tokensStore.isWhitelisted).toBe('boolean')
      })
    })

    describe('isBlacklisted', () => {
      it('должен возвращать true для blacklisted статуса', () => {
        tokensStore.userStatus = 'blacklisted'
        expect(tokensStore.isBlacklisted).toBe(true)
      })

      it('должен возвращать false для других статусов', () => {
        tokensStore.userStatus = 'normal'
        expect(tokensStore.isBlacklisted).toBe(false)

        tokensStore.userStatus = 'whitelisted'
        expect(tokensStore.isBlacklisted).toBe(false)
      })

      it('должен возвращать boolean', () => {
        tokensStore.userStatus = 'blacklisted'
        expect(typeof tokensStore.isBlacklisted).toBe('boolean')
      })
    })

    describe('isNormal', () => {
      it('должен возвращать true для normal статуса', () => {
        tokensStore.userStatus = 'normal'
        expect(tokensStore.isNormal).toBe(true)
      })

      it('должен возвращать false для других статусов', () => {
        tokensStore.userStatus = 'whitelisted'
        expect(tokensStore.isNormal).toBe(false)

        tokensStore.userStatus = 'blacklisted'
        expect(tokensStore.isNormal).toBe(false)
      })

      it('должен возвращать boolean', () => {
        tokensStore.userStatus = 'normal'
        expect(typeof tokensStore.isNormal).toBe('boolean')
      })
    })

    describe('statusLabel', () => {
      it('должен возвращать "Whitelisted" для whitelisted статуса', () => {
        tokensStore.userStatus = 'whitelisted'
        expect(tokensStore.statusLabel).toBe('Whitelisted')
      })

      it('должен возвращать "Blacklisted" для blacklisted статуса', () => {
        tokensStore.userStatus = 'blacklisted'
        expect(tokensStore.statusLabel).toBe('Blacklisted')
      })

      it('должен возвращать "Normal" для normal статуса', () => {
        tokensStore.userStatus = 'normal'
        expect(tokensStore.statusLabel).toBe('Normal')
      })

      it('должен возвращать "Normal" для неизвестного статуса', () => {
        tokensStore.userStatus = 'unknown'
        expect(tokensStore.statusLabel).toBe('Normal')
      })

      it('должен возвращать строку', () => {
        tokensStore.userStatus = 'normal'
        expect(typeof tokensStore.statusLabel).toBe('string')
      })
    })

    describe('statusColor', () => {
      it('должен возвращать "positive" для whitelisted статуса', () => {
        tokensStore.userStatus = 'whitelisted'
        expect(tokensStore.statusColor).toBe('positive')
      })

      it('должен возвращать "negative" для blacklisted статуса', () => {
        tokensStore.userStatus = 'blacklisted'
        expect(tokensStore.statusColor).toBe('negative')
      })

      it('должен возвращать "grey" для normal статуса', () => {
        tokensStore.userStatus = 'normal'
        expect(tokensStore.statusColor).toBe('grey')
      })

      it('должен возвращать "grey" для неизвестного статуса', () => {
        tokensStore.userStatus = 'unknown'
        expect(tokensStore.statusColor).toBe('grey')
      })

      it('должен возвращать строку', () => {
        tokensStore.userStatus = 'normal'
        expect(typeof tokensStore.statusColor).toBe('string')
      })
    })

    describe('canUnlockTokens', () => {
      it('должен возвращать true для normal статуса', () => {
        tokensStore.userStatus = 'normal'
        expect(tokensStore.canUnlockTokens).toBe(true)
      })

      it('должен возвращать false для whitelisted статуса', () => {
        tokensStore.userStatus = 'whitelisted'
        expect(tokensStore.canUnlockTokens).toBe(false)
      })

      it('должен возвращать false для blacklisted статуса', () => {
        tokensStore.userStatus = 'blacklisted'
        expect(tokensStore.canUnlockTokens).toBe(false)
      })

      it('должен возвращать boolean', () => {
        tokensStore.userStatus = 'normal'
        expect(typeof tokensStore.canUnlockTokens).toBe('boolean')
      })
    })

    describe('canTransferTokens', () => {
      it('должен возвращать true для normal статуса', () => {
        tokensStore.userStatus = 'normal'
        expect(tokensStore.canTransferTokens).toBe(true)
      })

      it('должен возвращать true для whitelisted статуса', () => {
        tokensStore.userStatus = 'whitelisted'
        expect(tokensStore.canTransferTokens).toBe(true)
      })

      it('должен возвращать false для blacklisted статуса', () => {
        tokensStore.userStatus = 'blacklisted'
        expect(tokensStore.canTransferTokens).toBe(false)
      })

      it('должен возвращать boolean', () => {
        tokensStore.userStatus = 'normal'
        expect(typeof tokensStore.canTransferTokens).toBe('boolean')
      })
    })

    describe('canTransferLockedTokens', () => {
      it('должен возвращать true для whitelisted статуса', () => {
        tokensStore.userStatus = 'whitelisted'
        expect(tokensStore.canTransferLockedTokens).toBe(true)
      })

      it('должен возвращать false для normal статуса', () => {
        tokensStore.userStatus = 'normal'
        expect(tokensStore.canTransferLockedTokens).toBe(false)
      })

      it('должен возвращать false для blacklisted статуса', () => {
        tokensStore.userStatus = 'blacklisted'
        expect(tokensStore.canTransferLockedTokens).toBe(false)
      })

      it('должен возвращать boolean', () => {
        tokensStore.userStatus = 'whitelisted'
        expect(typeof tokensStore.canTransferLockedTokens).toBe('boolean')
      })
    })

    describe('availableBalanceForTransfer', () => {
      it('должен возвращать totalBalance для whitelisted статуса', () => {
        tokensStore.userStatus = 'whitelisted'
        tokensStore.unlockedBalance = '100.000000'
        tokensStore.totalBalance = '150.000000'

        expect(tokensStore.availableBalanceForTransfer).toBe('150.000000')
      })

      it('должен возвращать unlockedBalance для normal статуса', () => {
        tokensStore.userStatus = 'normal'
        tokensStore.unlockedBalance = '100.000000'
        tokensStore.totalBalance = '150.000000'

        expect(tokensStore.availableBalanceForTransfer).toBe('100.000000')
      })

      it('должен возвращать unlockedBalance для blacklisted статуса', () => {
        tokensStore.userStatus = 'blacklisted'
        tokensStore.unlockedBalance = '100.000000'
        tokensStore.totalBalance = '150.000000'

        expect(tokensStore.availableBalanceForTransfer).toBe('100.000000')
      })

      it('должен возвращать строку', () => {
        tokensStore.userStatus = 'normal'
        tokensStore.unlockedBalance = '100.000000'
        expect(typeof tokensStore.availableBalanceForTransfer).toBe('string')
      })

      it('должен возвращать ноль если unlockedBalance равен нулю', () => {
        tokensStore.userStatus = 'normal'
        tokensStore.unlockedBalance = '0'
        tokensStore.totalBalance = '150.000000'

        expect(tokensStore.availableBalanceForTransfer).toBe('0')
      })
    })
  })

  describe('Actions', () => {
    describe('fetchBalances', () => {
      it('должен успешно получить балансы', async () => {
        await tokensStore.fetchBalances()

        expect(tokensStore.loading).toBe(false)
        expect(tokensStore.error).toBe(null)
        expect(tokensStore.unlockedBalance).toBe('100.000000')
        expect(tokensStore.lockedBalance).toBe('50.000000')
        expect(tokensStore.totalBalance).toBe('150.000000')
        expect(tokensStore.paidBalance).toBe('10.000000000000000000')
      })

      it('должен устанавливать loading во время получения', async () => {
        const fetchPromise = tokensStore.fetchBalances()
        expect(tokensStore.loading).toBe(true)
        await fetchPromise
        expect(tokensStore.loading).toBe(false)
      })

      it('должен устанавливать ошибку при неудачном получении', async () => {
        mockUseContract.mockReturnValueOnce({
          fetchBalances: vi.fn().mockRejectedValue(new Error('Network error'))
        })

        await tokensStore.fetchBalances()

        expect(tokensStore.loading).toBe(false)
        expect(tokensStore.error).toBe('Network error')
        expect(Notify.create).toHaveBeenCalledWith({
          type: 'negative',
          message: 'Ошибка получения балансов',
          caption: 'Network error',
          timeout: 5000
        })
      })

      it('должен вызывать useContract', async () => {
        await tokensStore.fetchBalances()
        expect(mockUseContract).toHaveBeenCalled()
      })

      it('должен обрабатывать ошибки сети', async () => {
        mockUseContract.mockReturnValueOnce({
          fetchBalances: vi.fn().mockRejectedValue(new Error('Network error'))
        })

        await tokensStore.fetchBalances()

        expect(tokensStore.error).toBe('Network error')
        expect(Notify.create).toHaveBeenCalled()
      })

      it('должен обрабатывать ошибки таймаута', async () => {
        mockUseContract.mockReturnValueOnce({
          fetchBalances: vi.fn().mockRejectedValue(new Error('Timeout'))
        })

        await tokensStore.fetchBalances()

        expect(tokensStore.error).toBe('Timeout')
        expect(Notify.create).toHaveBeenCalled()
      })

      it('должен обрабатывать ошибки с пустым сообщением', async () => {
        mockUseContract.mockReturnValueOnce({
          fetchBalances: vi.fn().mockRejectedValue(new Error(''))
        })

        await tokensStore.fetchBalances()

        expect(tokensStore.error).toBe('')
        expect(Notify.create).toHaveBeenCalled()
      })

      it('должен обрабатывать ошибки без сообщения', async () => {
        mockUseContract.mockReturnValueOnce({
          fetchBalances: vi.fn().mockRejectedValue(new Error())
        })

        await tokensStore.fetchBalances()

        expect(tokensStore.error).toBeDefined()
        expect(Notify.create).toHaveBeenCalled()
      })
    })

    describe('fetchUserStatus', () => {
      it('должен успешно получить статус пользователя', async () => {
        mockUseContract.mockReturnValueOnce({
          fetchUserStatus: vi.fn().mockResolvedValue('whitelisted')
        })

        await tokensStore.fetchUserStatus()

        expect(tokensStore.loading).toBe(false)
        expect(tokensStore.error).toBe(null)
        expect(tokensStore.userStatus).toBe('whitelisted')
      })

      it('должен устанавливать loading во время получения', async () => {
        const fetchPromise = tokensStore.fetchUserStatus()
        expect(tokensStore.loading).toBe(true)
        await fetchPromise
        expect(tokensStore.loading).toBe(false)
      })

      it('должен устанавливать статус "normal" при ошибке', async () => {
        mockUseContract.mockReturnValueOnce({
          fetchUserStatus: vi.fn().mockRejectedValue(new Error('Network error'))
        })

        await tokensStore.fetchUserStatus()

        expect(tokensStore.loading).toBe(false)
        expect(tokensStore.error).toBe('Network error')
        expect(tokensStore.userStatus).toBe('normal')
      })

      it('должен устанавливать статус "blacklisted"', async () => {
        mockUseContract.mockReturnValueOnce({
          fetchUserStatus: vi.fn().mockResolvedValue('blacklisted')
        })

        await tokensStore.fetchUserStatus()

        expect(tokensStore.userStatus).toBe('blacklisted')
      })

      it('должен вызывать useContract', async () => {
        await tokensStore.fetchUserStatus()
        expect(mockUseContract).toHaveBeenCalled()
      })

      it('должен обрабатывать ошибки сети', async () => {
        mockUseContract.mockReturnValueOnce({
          fetchUserStatus: vi.fn().mockRejectedValue(new Error('Network error'))
        })

        await tokensStore.fetchUserStatus()

        expect(tokensStore.error).toBe('Network error')
        expect(tokensStore.userStatus).toBe('normal')
      })

      it('должен обрабатывать ошибки с пустым сообщением', async () => {
        mockUseContract.mockReturnValueOnce({
          fetchUserStatus: vi.fn().mockRejectedValue(new Error(''))
        })

        await tokensStore.fetchUserStatus()

        expect(tokensStore.error).toBe('')
        expect(tokensStore.userStatus).toBe('normal')
      })
    })

    describe('refreshData', () => {
      it('должен обновить все данные', async () => {
        mockUseContract.mockReturnValue({
          fetchBalances: vi.fn().mockResolvedValue({
            unlockedBalance: '200.000000',
            lockedBalance: '100.000000',
            totalBalance: '300.000000',
            paidBalance: '20.000000000000000000'
          }),
          fetchUserStatus: vi.fn().mockResolvedValue('whitelisted')
        })

        await tokensStore.refreshData()

        expect(tokensStore.unlockedBalance).toBe('200.000000')
        expect(tokensStore.lockedBalance).toBe('100.000000')
        expect(tokensStore.totalBalance).toBe('300.000000')
        expect(tokensStore.paidBalance).toBe('20.000000000000000000')
        expect(tokensStore.userStatus).toBe('whitelisted')
      })

      it('должен выполнять оба запроса параллельно', async () => {
        const mockFetchBalances = vi.fn().mockResolvedValue({
          unlockedBalance: '100.000000',
          lockedBalance: '50.000000',
          totalBalance: '150.000000',
          paidBalance: '10.000000000000000000'
        })
        const mockFetchUserStatus = vi.fn().mockResolvedValue('normal')

        mockUseContract.mockReturnValue({
          fetchBalances: mockFetchBalances,
          fetchUserStatus: mockFetchUserStatus
        })

        await tokensStore.refreshData()

        expect(mockFetchBalances).toHaveBeenCalled()
        expect(mockFetchUserStatus).toHaveBeenCalled()
      })

      it('должен устанавливать loading во время обновления', async () => {
        const refreshPromise = tokensStore.refreshData()
        expect(tokensStore.loading).toBe(true)
        await refreshPromise
        expect(tokensStore.loading).toBe(false)
      })

      it('должен обрабатывать ошибки при обновлении', async () => {
        mockUseContract.mockReturnValue({
          fetchBalances: vi.fn().mockRejectedValue(new Error('Network error')),
          fetchUserStatus: vi.fn().mockResolvedValue('normal')
        })

        await tokensStore.refreshData()

        expect(tokensStore.error).toBe('Network error')
        expect(Notify.create).toHaveBeenCalled()
      })

      it('должен продолжать выполнение если один из запросов не удался', async () => {
        mockUseContract.mockReturnValue({
          fetchBalances: vi.fn().mockRejectedValue(new Error('Network error')),
          fetchUserStatus: vi.fn().mockResolvedValue('whitelisted')
        })

        await tokensStore.refreshData()

        expect(tokensStore.userStatus).toBe('whitelisted')
        expect(tokensStore.error).toBe('Network error')
      })
    })

    describe('reset', () => {
      it('должен сбросить состояние', () => {
        tokensStore.unlockedBalance = '100.000000'
        tokensStore.lockedBalance = '50.000000'
        tokensStore.totalBalance = '150.000000'
        tokensStore.paidBalance = '10.000000000000000000'
        tokensStore.userStatus = 'whitelisted'
        tokensStore.loading = true
        tokensStore.error = 'Some error'

        tokensStore.reset()

        expect(tokensStore.unlockedBalance).toBe('0')
        expect(tokensStore.lockedBalance).toBe('0')
        expect(tokensStore.totalBalance).toBe('0')
        expect(tokensStore.paidBalance).toBe('0')
        expect(tokensStore.userStatus).toBe('normal')
        expect(tokensStore.loading).toBe(false)
        expect(tokensStore.error).toBe(null)
      })

      it('должен сбрасывать все state переменные', () => {
        tokensStore.reset()

        expect(tokensStore.unlockedBalance).toBe('0')
        expect(tokensStore.lockedBalance).toBe('0')
        expect(tokensStore.totalBalance).toBe('0')
        expect(tokensStore.paidBalance).toBe('0')
        expect(tokensStore.userStatus).toBe('normal')
        expect(tokensStore.loading).toBe(false)
        expect(tokensStore.error).toBe(null)
      })

      it('должен работать после нескольких изменений', () => {
        tokensStore.unlockedBalance = '100.000000'
        tokensStore.userStatus = 'whitelisted'
        tokensStore.loading = true

        tokensStore.reset()

        expect(tokensStore.unlockedBalance).toBe('0')
        expect(tokensStore.userStatus).toBe('normal')
        expect(tokensStore.loading).toBe(false)
      })
    })
  })

  describe('Взаимодействие с внешними зависимостями', () => {
    it('должен использовать useContract composable для получения балансов', async () => {
      await tokensStore.fetchBalances()

      expect(mockUseContract).toHaveBeenCalled()
    })

    it('должен использовать useContract composable для получения статуса', async () => {
      await tokensStore.fetchUserStatus()

      expect(mockUseContract).toHaveBeenCalled()
    })

    it('должен показывать уведомление при ошибке получения балансов', async () => {
      mockUseContract.mockReturnValueOnce({
        fetchBalances: vi.fn().mockRejectedValue(new Error('Connection failed'))
      })

      await tokensStore.fetchBalances()

      expect(Notify.create).toHaveBeenCalledWith({
        type: 'negative',
        message: 'Ошибка получения балансов',
        caption: 'Connection failed',
        timeout: 5000
      })
    })

    it('должен вызывать Notify.create с правильными параметрами', async () => {
      mockUseContract.mockReturnValueOnce({
        fetchBalances: vi.fn().mockRejectedValue(new Error('Test error'))
      })

      await tokensStore.fetchBalances()

      expect(Notify.create).toHaveBeenCalledWith({
        type: 'negative',
        message: 'Ошибка получения балансов',
        caption: 'Test error',
        timeout: 5000
      })
    })
  })

  describe('Edge cases', () => {
    describe('Очень большие балансы', () => {
      it('должен корректно обрабатывать очень большие балансы', () => {
        tokensStore.unlockedBalance = '999999999999999999999999.999999'
        tokensStore.lockedBalance = '888888888888888888888888.888888'
        tokensStore.totalBalance = '1888888888888888888888888.888887'
        tokensStore.paidBalance = '777777777777777777777777.777777'

        const formatted = tokensStore.formattedBalances

        expect(formatted.unlocked).toBe('999999999999999999999999.999999')
        expect(formatted.locked).toBe('888888888888888888888888.888888')
        expect(formatted.total).toBe('1888888888888888888888888.888887')
        expect(formatted.paid).toBe('777777777777777777777777.777777')
      })

      it('должен корректно обрабатывать максимальные значения', () => {
        const maxBalance = '999999999999999999999999999.999999'
        tokensStore.unlockedBalance = maxBalance
        tokensStore.lockedBalance = maxBalance
        tokensStore.totalBalance = maxBalance
        tokensStore.paidBalance = maxBalance

        const formatted = tokensStore.formattedBalances

        expect(formatted.unlocked).toBe(maxBalance)
        expect(formatted.locked).toBe(maxBalance)
        expect(formatted.total).toBe(maxBalance)
        expect(formatted.paid).toBe(maxBalance)
      })
    })

    describe('Отрицательные значения', () => {
      it('должен корректно обрабатывать отрицательные значения как 0', () => {
        tokensStore.unlockedBalance = '-100.000000'
        tokensStore.lockedBalance = '-50.000000'
        tokensStore.totalBalance = '-150.000000'
        tokensStore.paidBalance = '-10.000000'

        const formatted = tokensStore.formattedBalances

        expect(formatted.unlocked).toBe('0.000000')
        expect(formatted.locked).toBe('0.000000')
        expect(formatted.total).toBe('0.000000')
        expect(formatted.paid).toBe('0.000000')
      })

      it('должен корректно обрабатывать очень маленькие отрицательные значения', () => {
        tokensStore.unlockedBalance = '-0.0000001'
        tokensStore.lockedBalance = '-0.00000001'
        tokensStore.totalBalance = '-0.000000001'
        tokensStore.paidBalance = '-0.0000000001'

        const formatted = tokensStore.formattedBalances

        expect(formatted.unlocked).toBe('0.000000')
        expect(formatted.locked).toBe('0.000000')
        expect(formatted.total).toBe('0.000000')
        expect(formatted.paid).toBe('0.000000')
      })

      it('должен корректно обрабатывать очень большие отрицательные значения', () => {
        tokensStore.unlockedBalance = '-999999999999999999999999.999999'
        tokensStore.lockedBalance = '-888888888888888888888888.888888'
        tokensStore.totalBalance = '-1888888888888888888888888.888887'
        tokensStore.paidBalance = '-777777777777777777777777.777777'

        const formatted = tokensStore.formattedBalances

        expect(formatted.unlocked).toBe('0.000000')
        expect(formatted.locked).toBe('0.000000')
        expect(formatted.total).toBe('0.000000')
        expect(formatted.paid).toBe('0.000000')
      })
    })

    describe('Невалидные значения', () => {
      it('должен корректно обрабатывать null значения', () => {
        tokensStore.unlockedBalance = null
        tokensStore.lockedBalance = null
        tokensStore.totalBalance = null
        tokensStore.paidBalance = null

        const formatted = tokensStore.formattedBalances

        expect(formatted.unlocked).toBe('0.000000')
        expect(formatted.locked).toBe('0.000000')
        expect(formatted.total).toBe('0.000000')
        expect(formatted.paid).toBe('0.000000')
      })

      it('должен корректно обрабатывать undefined значения', () => {
        tokensStore.unlockedBalance = undefined
        tokensStore.lockedBalance = undefined
        tokensStore.totalBalance = undefined
        tokensStore.paidBalance = undefined

        const formatted = tokensStore.formattedBalances

        expect(formatted.unlocked).toBe('0.000000')
        expect(formatted.locked).toBe('0.000000')
        expect(formatted.total).toBe('0.000000')
        expect(formatted.paid).toBe('0.000000')
      })

      it('должен корректно обрабатывать пустые строки', () => {
        tokensStore.unlockedBalance = ''
        tokensStore.lockedBalance = ''
        tokensStore.totalBalance = ''
        tokensStore.paidBalance = ''

        const formatted = tokensStore.formattedBalances

        expect(formatted.unlocked).toBe('0.000000')
        expect(formatted.locked).toBe('0.000000')
        expect(formatted.total).toBe('0.000000')
        expect(formatted.paid).toBe('0.000000')
      })

      it('должен корректно обрабатывать невалидные строки', () => {
        tokensStore.unlockedBalance = 'invalid'
        tokensStore.lockedBalance = 'not a number'
        tokensStore.totalBalance = 'abc123'
        tokensStore.paidBalance = 'xyz'

        const formatted = tokensStore.formattedBalances

        expect(formatted.unlocked).toBe('0.000000')
        expect(formatted.locked).toBe('0.000000')
        expect(formatted.total).toBe('0.000000')
        expect(formatted.paid).toBe('0.000000')
      })

      it('должен корректно обрабатывать объекты', () => {
        tokensStore.unlockedBalance = {}
        tokensStore.lockedBalance = { value: '100' }
        tokensStore.totalBalance = []
        tokensStore.paidBalance = [1, 2, 3]

        const formatted = tokensStore.formattedBalances

        expect(formatted.unlocked).toBe('0.000000')
        expect(formatted.locked).toBe('0.000000')
        expect(formatted.total).toBe('0.000000')
        expect(formatted.paid).toBe('0.000000')
      })
    })

    describe('Особые случаи форматирования', () => {
      it('должен корректно обрабатывать Infinity', () => {
        tokensStore.unlockedBalance = 'Infinity'
        tokensStore.lockedBalance = '-Infinity'
        tokensStore.totalBalance = 'Infinity'
        tokensStore.paidBalance = '-Infinity'

        const formatted = tokensStore.formattedBalances

        // Infinity должно быть преобразовано в 0.000000 при ошибке
        expect(formatted.unlocked).toBe('0.000000')
        expect(formatted.locked).toBe('0.000000')
        expect(formatted.total).toBe('0.000000')
        expect(formatted.paid).toBe('0.000000')
      })

      it('должен корректно обрабатывать NaN', () => {
        tokensStore.unlockedBalance = 'NaN'
        tokensStore.lockedBalance = 'NaN'
        tokensStore.totalBalance = 'NaN'
        tokensStore.paidBalance = 'NaN'

        const formatted = tokensStore.formattedBalances

        expect(formatted.unlocked).toBe('0.000000')
        expect(formatted.locked).toBe('0.000000')
        expect(formatted.total).toBe('0.000000')
        expect(formatted.paid).toBe('0.000000')
      })

      it('должен корректно обрабатывать значения с пробелами', () => {
        tokensStore.unlockedBalance = ' 100.000000 '
        tokensStore.lockedBalance = ' 50.000000'
        tokensStore.totalBalance = '150.000000 '
        tokensStore.paidBalance = ' 10.000000 '

        const formatted = tokensStore.formattedBalances

        expect(formatted.unlocked).toBe('100.000000')
        expect(formatted.locked).toBe('50.000000')
        expect(formatted.total).toBe('150.000000')
        expect(formatted.paid).toBe('10.000000')
      })
    })

    describe('Смешанные сценарии', () => {
      it('должен корректно обрабатывать смешанные валидные и невалидные значения', () => {
        tokensStore.unlockedBalance = '100.000000'
        tokensStore.lockedBalance = 'invalid'
        tokensStore.totalBalance = '150.000000'
        tokensStore.paidBalance = null

        const formatted = tokensStore.formattedBalances

        expect(formatted.unlocked).toBe('100.000000')
        expect(formatted.locked).toBe('0.000000')
        expect(formatted.total).toBe('150.000000')
        expect(formatted.paid).toBe('0.000000')
      })

      it('должен корректно обрабатывать чередующиеся валидные и невалидные значения', () => {
        tokensStore.unlockedBalance = '100.000000'
        tokensStore.lockedBalance = '-50.000000'
        tokensStore.totalBalance = '150.000000'
        tokensStore.paidBalance = '0.0000005'

        const formatted = tokensStore.formattedBalances

        expect(formatted.unlocked).toBe('100.000000')
        expect(formatted.locked).toBe('0.000000')
        expect(formatted.total).toBe('150.000000')
        expect(formatted.paid).toBe('< 0.000001')
      })
    })
  })

  describe('Тесты производительности', () => {
    it('должен быстро выполнять formattedBalances getter', () => {
      tokensStore.unlockedBalance = '100.000000'
      tokensStore.lockedBalance = '50.000000'
      tokensStore.totalBalance = '150.000000'
      tokensStore.paidBalance = '10.000000'

      const startTime = performance.now()

      for (let i = 0; i < 1000; i++) {
        const formatted = tokensStore.formattedBalances
      }

      const endTime = performance.now()
      const duration = endTime - startTime

      // Должен выполняться менее чем за 100ms для 1000 операций
      expect(duration).toBeLessThan(100)
    })

    it('должен быстро выполнять status getters', () => {
      tokensStore.userStatus = 'normal'

      const startTime = performance.now()

      for (let i = 0; i < 1000; i++) {
        const isWhitelisted = tokensStore.isWhitelisted
        const isBlacklisted = tokensStore.isBlacklisted
        const isNormal = tokensStore.isNormal
        const statusLabel = tokensStore.statusLabel
        const statusColor = tokensStore.statusColor
      }

      const endTime = performance.now()
      const duration = endTime - startTime

      // Должен выполняться менее чем за 10ms для 1000 операций
      expect(duration).toBeLessThan(10)
    })

    it('должен быстро выполнять permission getters', () => {
      tokensStore.userStatus = 'normal'
      tokensStore.unlockedBalance = '100.000000'
      tokensStore.totalBalance = '150.000000'

      const startTime = performance.now()

      for (let i = 0; i < 1000; i++) {
        const canUnlock = tokensStore.canUnlockTokens
        const canTransfer = tokensStore.canTransferTokens
        const canTransferLocked = tokensStore.canTransferLockedTokens
        const available = tokensStore.availableBalanceForTransfer
      }

      const endTime = performance.now()
      const duration = endTime - startTime

      // Должен выполняться менее чем за 10ms для 1000 операций
      expect(duration).toBeLessThan(10)
    })

    describe('Persist состояния', () => {
      it('должен сохранять состояние в localStorage при изменении', async () => {
        const mockLocalStorage = {
          setItem: vi.fn(),
          getItem: vi.fn().mockReturnValue(null),
          removeItem: vi.fn()
        }

        // Mock localStorage перед созданием store
        Object.defineProperty(window, 'localStorage', {
          value: mockLocalStorage,
          writable: true
        })

        // Создаем новый pinia и store для тестирования persist
        const newPinia = createPinia()
        setActivePinia(newPinia)
        const newStore = useTokensStore()

        // Ждем следующего тика для срабатывания watch
        await new Promise(resolve => setTimeout(resolve, 0))

        newStore.unlockedBalance = '200.000000'
        newStore.lockedBalance = '100.000000'

        // Ждем следующего тика для срабатывания watch
        await new Promise(resolve => setTimeout(resolve, 0))

        // Проверяем, что localStorage.setItem был вызван
        expect(mockLocalStorage.setItem).toHaveBeenCalled()
      })

      it('должен загружать состояние из localStorage при инициализации', () => {
        const mockLocalStorage = {
          setItem: vi.fn(),
          getItem: vi.fn().mockReturnValue(
            JSON.stringify({
              unlockedBalance: '150.000000',
              lockedBalance: '75.000000',
              totalBalance: '225.000000',
              paidBalance: '15.000000000000000000',
              userStatus: 'whitelisted'
            })
          ),
          removeItem: vi.fn()
        }

        // Mock localStorage перед созданием store
        Object.defineProperty(window, 'localStorage', {
          value: mockLocalStorage,
          writable: true
        })

        // Создаем новый pinia и store для тестирования загрузки
        const newPinia = createPinia()
        setActivePinia(newPinia)
        const newStore = useTokensStore()

        // Проверяем, что состояние было загружено из localStorage
        expect(newStore.unlockedBalance).toBe('150.000000')
        expect(newStore.lockedBalance).toBe('75.000000')
        expect(newStore.totalBalance).toBe('225.000000')
        expect(newStore.paidBalance).toBe('15.000000000000000000')
        expect(newStore.userStatus).toBe('whitelisted')
      })

      it('должен очищать persist при вызове reset', async () => {
        const mockLocalStorage = {
          setItem: vi.fn(),
          getItem: vi.fn().mockReturnValue(null),
          removeItem: vi.fn()
        }

        // Mock localStorage перед созданием store
        Object.defineProperty(window, 'localStorage', {
          value: mockLocalStorage,
          writable: true
        })

        // Создаем новый pinia и store для тестирования
        const newPinia = createPinia()
        setActivePinia(newPinia)
        const newStore = useTokensStore()
        newStore.reset()

        // Проверяем, что localStorage.removeItem был вызван
        expect(mockLocalStorage.removeItem).toHaveBeenCalledWith('cxbt-tokens')
      })
    })
  })
})
