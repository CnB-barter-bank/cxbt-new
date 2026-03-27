import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import TokenBalances from 'src/components/TokenBalances.vue'
import { useWalletStore } from 'src/stores/wallet'
import { useTokensStore } from 'src/stores/tokens'
import { createMockWalletStore, createMockTokensStore } from '../helpers/mockStore'

// Mock stores
vi.mock('src/stores/wallet', () => ({
  useWalletStore: vi.fn()
}))

vi.mock('src/stores/tokens', () => ({
  useTokensStore: vi.fn()
}))

describe('TokenBalances.vue', () => {
  let wrapper
  let mockWalletStore
  let mockTokensStore

  beforeEach(() => {
    setActivePinia(createPinia())
    mockWalletStore = createMockWalletStore()
    mockTokensStore = createMockTokensStore()
    vi.mocked(useWalletStore).mockReturnValue(mockWalletStore)
    vi.mocked(useTokensStore).mockReturnValue(mockTokensStore)
  })

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount()
    }
  })

  describe('Рендеринг компонента', () => {
    it('должен отображать состояние загрузки', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.loading.value = true

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      expect(wrapper.find('.q-spinner').exists()).toBe(true)
      expect(wrapper.text()).toContain('Loading balances...')
    })

    it('должен отображать сообщение о необходимости подключения кошелька', () => {
      mockWalletStore.isConnected = false

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      expect(wrapper.find('.q-icon[name="warning"]').exists()).toBe(true)
      expect(wrapper.text()).toContain('Please connect your wallet')
    })

    it('должен отображать балансы когда кошелек подключен', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.loading.value = false
      mockTokensStore.formattedBalances = {
        total: '150.000000',
        unlocked: '100.000000',
        locked: '50.000000',
        paid: '10.000000'
      }

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      expect(wrapper.text()).toContain('150.000000')
      expect(wrapper.text()).toContain('100.000000')
      expect(wrapper.text()).toContain('50.000000')
      expect(wrapper.text()).toContain('10.000000')
    })

    it('должен отображать ошибку при загрузке балансов', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.loading.value = false
      mockTokensStore.error.value = 'Failed to load balances'

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      expect(wrapper.find('.q-banner.bg-negative').exists()).toBe(true)
      expect(wrapper.text()).toContain('Failed to load balances')
    })
  })

  describe('Отображение правильных данных', () => {
    it('должен отображать правильные балансы токенов', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.loading.value = false
      mockTokensStore.formattedBalances = {
        total: '200.000000',
        unlocked: '150.000000',
        locked: '50.000000',
        paid: '25.000000'
      }

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      expect(wrapper.text()).toContain('200.000000')
      expect(wrapper.text()).toContain('150.000000')
      expect(wrapper.text()).toContain('50.000000')
      expect(wrapper.text()).toContain('25.000000')
    })

    it('должен отображать статус пользователя', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.loading.value = false
      mockTokensStore.statusLabel.value = 'Normal'
      mockTokensStore.statusColor.value = 'grey'

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      expect(wrapper.text()).toContain('Normal')
    })

    it('должен отображать баланс PAID токена', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.loading.value = false
      mockTokensStore.formattedBalances = {
        total: '100.000000',
        unlocked: '50.000000',
        locked: '50.000000',
        paid: '15.500000'
      }

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      expect(wrapper.text()).toContain('15.500000 PAID')
    })
  })

  describe('Взаимодействие с пользователем', () => {
    it('должен вызывать refreshData при клике на кнопку обновления', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.loading.value = false
      mockTokensStore.refreshData = vi.fn().mockResolvedValue(undefined)

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      const refreshButton = wrapper.find('.q-btn[label="Refresh"]')
      await refreshButton.trigger('click')

      expect(mockTokensStore.refreshData).toHaveBeenCalled()
    })

    it('должен обновлять балансы (refresh)', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.loading.value = false
      mockTokensStore.refreshData = vi.fn().mockImplementation(async () => {
        mockTokensStore.formattedBalances = {
          total: '200.000000',
          unlocked: '150.000000',
          locked: '50.000000',
          paid: '30.000000'
        }
      })

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      const refreshButton = wrapper.find('.q-btn[label="Refresh"]')
      await refreshButton.trigger('click')

      await wrapper.vm.$nextTick()

      expect(wrapper.text()).toContain('200.000000')
      expect(wrapper.text()).toContain('150.000000')
      expect(wrapper.text()).toContain('50.000000')
      expect(wrapper.text()).toContain('30.000000')
    })
  })

  describe('Различные статусы пользователя', () => {
    it('должен скрывать заблокированные токены для whitelisted пользователей', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.loading.value = false
      mockTokensStore.userStatus.value = 'whitelisted'
      mockTokensStore.isWhitelisted.value = true

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      // Проверяем, что элемент с заблокированными токенами не отображается
      const lockedTokens = wrapper.findAll('.q-item').filter(item => item.text().includes('Locked'))
      expect(lockedTokens.length).toBe(0)
    })

    it('должен отображать заблокированные токены для normal пользователей', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.loading.value = false
      mockTokensStore.userStatus.value = 'normal'
      mockTokensStore.isWhitelisted.value = false
      mockTokensStore.formattedBalances = {
        total: '150.000000',
        unlocked: '100.000000',
        locked: '50.000000',
        paid: '10.000000'
      }

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      expect(wrapper.text()).toContain('Locked')
    })

    it('должен отображать правильный цвет статуса для whitelisted', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.loading.value = false
      mockTokensStore.userStatus.value = 'whitelisted'
      mockTokensStore.statusLabel.value = 'Whitelisted'
      mockTokensStore.statusColor.value = 'positive'

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      const statusChip = wrapper.find('.q-chip[icon="verified_user"]')
      expect(statusChip.classes()).toContain('bg-positive')
      expect(wrapper.text()).toContain('Whitelisted')
    })

    it('должен отображать правильный цвет статуса для blacklisted', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.loading.value = false
      mockTokensStore.userStatus.value = 'blacklisted'
      mockTokensStore.statusLabel.value = 'Blacklisted'
      mockTokensStore.statusColor.value = 'negative'

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      const statusChip = wrapper.find('.q-chip[icon="verified_user"]')
      expect(statusChip.classes()).toContain('bg-negative')
      expect(wrapper.text()).toContain('Blacklisted')
    })

    it('должен отображать правильный цвет статуса для normal', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.loading.value = false
      mockTokensStore.userStatus.value = 'normal'
      mockTokensStore.statusLabel.value = 'Normal'
      mockTokensStore.statusColor.value = 'grey'

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      const statusChip = wrapper.find('.q-chip[icon="verified_user"]')
      expect(statusChip.classes()).toContain('bg-grey')
      expect(wrapper.text()).toContain('Normal')
    })
  })

  describe('Различные состояния', () => {
    it('должен отображать состояние загрузки', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.loading.value = true

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      expect(wrapper.find('.q-spinner').exists()).toBe(true)
      expect(wrapper.text()).toContain('Loading balances...')
    })

    it('должен отключать кнопку обновления когда кошелек не подключен', () => {
      mockWalletStore.isConnected = false

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      const refreshButton = wrapper.find('.q-btn[label="Refresh"]')
      expect(refreshButton.attributes('disabled')).toBeDefined()
    })

    it('должен показывать состояние загрузки на кнопке обновления', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.loading.value = true

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      const refreshButton = wrapper.find('.q-btn[label="Refresh"]')
      expect(refreshButton.attributes('loading')).toBeDefined()
    })
  })

  describe('Edge cases', () => {
    it('должен обрабатывать нулевые балансы', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.loading.value = false
      mockTokensStore.formattedBalances = {
        total: '0.000000',
        unlocked: '0.000000',
        locked: '0.000000',
        paid: '0.000000'
      }

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      expect(wrapper.text()).toContain('0.000000')
      expect(wrapper.text()).toContain('0.000000')
      expect(wrapper.text()).toContain('0.000000')
      expect(wrapper.text()).toContain('0.000000')
    })

    it('должен обрабатывать очень большие числа', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.loading.value = false
      mockTokensStore.formattedBalances = {
        total: '999999999999.999999',
        unlocked: '999999999999.999999',
        locked: '0.000000',
        paid: '999999999999.999999'
      }

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      expect(wrapper.text()).toContain('999999999999.999999')
    })

    it('должен обрабатывать очень маленькие числа', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.loading.value = false
      mockTokensStore.formattedBalances = {
        total: '0.000001',
        unlocked: '0.000001',
        locked: '0.000000',
        paid: '0.000001'
      }

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      expect(wrapper.text()).toContain('0.000001')
    })

    it('должен обрабатывать null значения балансов', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.loading.value = false
      mockTokensStore.formattedBalances = {
        total: null,
        unlocked: null,
        locked: null,
        paid: null
      }

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      // Компонент должен рендериться без ошибок
      expect(wrapper.find('.token-balances').exists()).toBe(true)
    })

    it('должен обрабатывать undefined значения балансов', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.loading.value = false
      mockTokensStore.formattedBalances = {
        total: undefined,
        unlocked: undefined,
        locked: undefined,
        paid: undefined
      }

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      // Компонент должен рендериться без ошибок
      expect(wrapper.find('.token-balances').exists()).toBe(true)
    })
  })

  describe('Обработка ошибок', () => {
    it('должен обрабатывать ошибки при загрузке балансов', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.loading.value = false
      mockTokensStore.error.value = 'Network error: Failed to fetch balances'

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      expect(wrapper.find('.q-banner.bg-negative').exists()).toBe(true)
      expect(wrapper.text()).toContain('Network error: Failed to fetch balances')
    })

    it('должен обрабатывать пустую ошибку', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.loading.value = false
      mockTokensStore.error.value = ''

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      // Компонент должен рендериться без ошибок
      expect(wrapper.find('.token-balances').exists()).toBe(true)
    })

    it('должен обрабатывать null ошибку', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.loading.value = false
      mockTokensStore.error.value = null

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      // Компонент должен рендериться без ошибок
      expect(wrapper.find('.token-balances').exists()).toBe(true)
    })
  })

  describe('Наблюдение за изменениями', () => {
    it('должен обновлять данные при подключении кошелька', async () => {
      mockWalletStore.isConnected = false
      mockTokensStore.refreshData = vi.fn().mockResolvedValue(undefined)

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      // Симулируем подключение кошелька
      mockWalletStore.isConnected = true
      await wrapper.vm.$nextTick()

      // Должен быть вызван refreshData
      expect(mockTokensStore.refreshData).toHaveBeenCalled()
    })

    it('должен сбрасывать данные при отключении кошелька', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.reset = vi.fn()

      wrapper = mount(TokenBalances, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      // Симулируем отключение кошелька
      mockWalletStore.isConnected = false
      await wrapper.vm.$nextTick()

      // Должен быть вызван reset
      expect(mockTokensStore.reset).toHaveBeenCalled()
    })
  })
})
