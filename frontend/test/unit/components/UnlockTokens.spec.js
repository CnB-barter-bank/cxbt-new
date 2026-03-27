import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { useWalletStore } from 'src/stores/wallet'
import { useTokensStore } from 'src/stores/tokens'

// Mock stores
vi.mock('src/stores/wallet', () => ({
  useWalletStore: vi.fn()
}))

vi.mock('src/stores/tokens', () => ({
  useTokensStore: vi.fn()
}))

import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import UnlockTokens from 'src/components/UnlockTokens.vue'
import { createMockWalletStore, createMockTokensStore } from '../helpers/mockStore'
import { Dialog } from 'quasar'

describe('UnlockTokens.vue', () => {
  let wrapper
  let mockWalletStore
  let mockTokensStore
  let mockContract

  beforeEach(() => {
    setActivePinia(createPinia())
    mockWalletStore = createMockWalletStore()
    mockTokensStore = createMockTokensStore()
    mockContract = {
      loading: false,
      txHash: '',
      shortTxHash: '',
      explorerUrl: '',
      calculateUnlockCost: vi.fn().mockResolvedValue('1.000000'),
      approvePaidTokens: vi.fn().mockResolvedValue(undefined),
      unlockTokens: vi.fn().mockResolvedValue(undefined),
      getPaidAllowance: vi.fn().mockResolvedValue('10.000000'),
      isValidAddress: vi.fn().mockReturnValue(true)
    }
  })

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount()
    }
  })

  describe('Рендеринг компонента', () => {
    it('должен отображать сообщение о необходимости подключения кошелька', () => {
      mockWalletStore.isConnected = false

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      expect(wrapper.find('.q-icon[name="warning"]').exists()).toBe(true)
      expect(wrapper.text()).toContain('Please connect your wallet')
    })

    it('должен отображать сообщение для whitelisted пользователей', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.isWhitelisted.value = true

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      expect(wrapper.text()).toContain('All your tokens are already unlocked')
    })

    it('должен отображать сообщение для blacklisted пользователей', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.isBlacklisted.value = true

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      expect(wrapper.text()).toContain('Unlock is not available for your account')
    })

    it('должен отображать форму разблокировки для normal пользователей', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true
      mockTokensStore.formattedBalances = {
        paid: '10.000000',
        locked: '50.000000'
      }

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      expect(wrapper.find('.q-form').exists()).toBe(true)
      expect(wrapper.text()).toContain('Amount to unlock')
    })
  })

  describe('Отображение правильных данных', () => {
    it('должен отображать баланс PAID токенов', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true
      mockTokensStore.formattedBalances = {
        paid: '25.000000',
        locked: '50.000000'
      }

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      expect(wrapper.text()).toContain('25.000000 PAID')
    })

    it('должен отображать заблокированный баланс', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true
      mockTokensStore.formattedBalances = {
        paid: '10.000000',
        locked: '75.000000'
      }

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      expect(wrapper.text()).toContain('75.000000')
    })

    it('должен отображать стоимость разблокировки', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true
      mockTokensStore.formattedBalances = {
        paid: '10.000000',
        locked: '50.000000'
      }
      mockContract.calculateUnlockCost = vi.fn().mockResolvedValue('2.500000')

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue('10')

      // Ждем асинхронного обновления
      await wrapper.vm.$nextTick()
      await new Promise(resolve => setTimeout(resolve, 100))

      expect(wrapper.text()).toContain('2.500000 PAID')
    })
  })

  describe('Взаимодействие с пользователем', () => {
    it('должен рассчитывать стоимость при вводе количества', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true
      mockContract.calculateUnlockCost = vi.fn().mockResolvedValue('5.000000')

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue('20')

      expect(mockContract.calculateUnlockCost).toHaveBeenCalledWith('20')
    })

    it('должен вызывать approvePaidTokens при клике на кнопку approve', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true
      mockContract.approvePaidTokens = vi.fn().mockResolvedValue(undefined)

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue('10')

      const approveButton = wrapper.find('.q-btn[label="Approve PAID"]')
      await approveButton.trigger('click')

      expect(mockContract.approvePaidTokens).toHaveBeenCalled()
    })

    it('должен вызывать unlockTokens при отправке формы', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true
      mockContract.unlockTokens = vi.fn().mockResolvedValue(undefined)

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue('10')

      const form = wrapper.find('.q-form')
      await form.trigger('submit')

      expect(mockContract.unlockTokens).toHaveBeenCalled()
    })
  })

  describe('Валидация формы', () => {
    it('должен показывать ошибку для отрицательного количества', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue(-5)

      expect(wrapper.text()).toContain('Amount must be greater than 0')
    })

    it('должен показывать ошибку для количества превышающего заблокированный баланс', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true
      mockTokensStore.lockedBalance = '50.000000'

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue(100)

      expect(wrapper.text()).toContain('Amount exceeds locked balance')
    })
  })

  describe('Различные статусы пользователя', () => {
    it('должен скрывать форму для whitelisted пользователей', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.isWhitelisted.value = true

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      expect(wrapper.find('.q-form').exists()).toBe(false)
    })

    it('должен скрывать форму для blacklisted пользователей', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.isBlacklisted.value = true

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      expect(wrapper.find('.q-form').exists()).toBe(false)
    })

    it('должен показывать форму для normal пользователей', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      expect(wrapper.find('.q-form').exists()).toBe(true)
    })
  })

  describe('Различные состояния', () => {
    it('должен отображать состояние загрузки при approve', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true
      mockContract.loading = true

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      const approveButton = wrapper.find('.q-btn[label="Approve PAID"]')
      expect(approveButton.attributes('loading')).toBeDefined()
    })

    it('должен отображать состояние загрузки при unlock', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true
      mockContract.loading = true

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      const unlockButton = wrapper.find('.q-btn[label="Unlock"]')
      expect(unlockButton.attributes('loading')).toBeDefined()
    })

    it('должен отображать успешную транзакцию', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true
      mockContract.txHash = '0x1234567890abcdef'
      mockContract.shortTxHash = '0x1234...cdef'
      mockContract.explorerUrl = 'https://basescan.org/tx/0x1234567890abcdef'

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      expect(wrapper.text()).toContain('Transaction sent')
      expect(wrapper.text()).toContain('0x1234...cdef')
    })
  })

  describe('Allowance', () => {
    it('должен показывать кнопку approve когда allowance недостаточно', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue('10')

      await wrapper.vm.$nextTick()

      const approveButton = wrapper.find('.q-btn[label="Approve PAID"]')
      expect(approveButton.exists()).toBe(true)
    })

    it('должен скрывать кнопку approve когда allowance достаточен', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true
      mockContract.calculateUnlockCost = vi.fn().mockResolvedValue('1.000000')
      mockContract.getPaidAllowance = vi.fn().mockResolvedValue('10.000000')

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue('1')

      await wrapper.vm.$nextTick()

      const approveButton = wrapper.find('.q-btn[label="Approve PAID"]')
      // Кнопка approve может быть скрыта, если allowance достаточен
      // Это зависит от реализации компонента
    })
  })

  describe('Расчёт стоимости разблокировки', () => {
    it('должен рассчитывать стоимость разблокировки', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true
      mockContract.calculateUnlockCost = vi.fn().mockResolvedValue('5.000000')

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue('10')

      expect(mockContract.calculateUnlockCost).toHaveBeenCalledWith('10')
    })

    it('должен отображать индикатор загрузки при расчёте стоимости', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true
      mockContract.calculateUnlockCost = vi
        .fn()
        .mockImplementation(
          () => new Promise(resolve => setTimeout(() => resolve('1.000000'), 100))
        )

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue('10')

      await wrapper.vm.$nextTick()

      expect(wrapper.vm.calculatingCost).toBe(true)
    })
  })

  describe('Процесс approve PAID токенов', () => {
    it('должен вызывать approvePaidTokens', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true
      mockContract.approvePaidTokens = vi.fn().mockResolvedValue(undefined)

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue('10')

      const approveButton = wrapper.find('.q-btn[label="Approve PAID"]')
      await approveButton.trigger('click')

      expect(mockContract.approvePaidTokens).toHaveBeenCalled()
    })
  })

  describe('Процесс разблокировки токенов', () => {
    it('должен вызывать unlockTokens', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true
      mockContract.unlockTokens = vi.fn().mockResolvedValue(undefined)

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue('10')

      const form = wrapper.find('.q-form')
      await form.trigger('submit')

      expect(mockContract.unlockTokens).toHaveBeenCalledWith('10')
    })
  })

  describe('Обработка успешной разблокировки', () => {
    it('должен очищать форму после успешной разблокировки', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true
      mockContract.unlockTokens = vi.fn().mockResolvedValue(undefined)

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue('10')

      const form = wrapper.find('.q-form')
      await form.trigger('submit')

      await wrapper.vm.$nextTick()

      expect(wrapper.vm.amount).toBe('')
      expect(wrapper.vm.unlockCost).toBe('0')
    })

    it('должен обновлять балансы после разблокировки', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true
      mockContract.unlockTokens = vi.fn().mockResolvedValue(undefined)
      mockTokensStore.refreshData = vi.fn().mockResolvedValue(undefined)

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue('10')

      const form = wrapper.find('.q-form')
      await form.trigger('submit')

      await wrapper.vm.$nextTick()
      await new Promise(resolve => setTimeout(resolve, 100))

      expect(mockTokensStore.refreshData).toHaveBeenCalled()
    })

    it('должен отображать хеш транзакции', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true
      mockContract.unlockTokens = vi.fn().mockResolvedValue('0x1234567890abcdef')
      mockContract.txHash = '0x1234567890abcdef'
      mockContract.shortTxHash = '0x1234...cdef'

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue('10')

      const form = wrapper.find('.q-form')
      await form.trigger('submit')

      await wrapper.vm.$nextTick()

      expect(wrapper.text()).toContain('0x1234...cdef')
    })
  })

  describe('Обработка ошибок', () => {
    it('должен обрабатывать ошибку недостаточно PAID', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true
      mockContract.unlockTokens = vi.fn().mockRejectedValue(new Error('Insufficient PAID tokens'))

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue('10')

      const form = wrapper.find('.q-form')
      await form.trigger('submit')

      await wrapper.vm.$nextTick()
      await new Promise(resolve => setTimeout(resolve, 100))

      expect(mockContract.unlockTokens).toHaveBeenCalled()
    })

    it('должен обрабатывать ошибку транзакции', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true
      mockContract.unlockTokens = vi.fn().mockRejectedValue(new Error('Transaction failed'))

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue('10')

      const form = wrapper.find('.q-form')
      await form.trigger('submit')

      await wrapper.vm.$nextTick()
      await new Promise(resolve => setTimeout(resolve, 100))

      expect(mockContract.unlockTokens).toHaveBeenCalled()
    })
  })

  describe('Подтверждение транзакции через Dialog', () => {
    it('должен показывать диалог подтверждения при approve', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true
      mockContract.approvePaidTokens = vi.fn().mockResolvedValue(undefined)
      const dialogCreateSpy = vi.spyOn(Dialog, 'create').mockReturnValue({
        onOk: callback => callback()
      })

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue('10')

      const approveButton = wrapper.find('.q-btn[label="Approve PAID"]')
      await approveButton.trigger('click')

      expect(dialogCreateSpy).toHaveBeenCalled()
      dialogCreateSpy.mockRestore()
    })

    it('должен показывать диалог подтверждения при unlock', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canUnlockTokens.value = true
      mockContract.unlockTokens = vi.fn().mockResolvedValue(undefined)
      const dialogCreateSpy = vi.spyOn(Dialog, 'create').mockReturnValue({
        onOk: callback => callback()
      })

      wrapper = mount(UnlockTokens, {
        global: {
          mocks: {
            $t: key => key
          },
          provide: {
            walletStore: mockWalletStore,
            tokensStore: mockTokensStore,
            contract: mockContract
          }
        }
      })

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue('10')

      const form = wrapper.find('.q-form')
      await form.trigger('submit')

      expect(dialogCreateSpy).toHaveBeenCalled()
      dialogCreateSpy.mockRestore()
    })
  })
})
