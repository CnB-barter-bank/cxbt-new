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
import TransferTokens from 'src/components/TransferTokens.vue'
import { createMockWalletStore, createMockTokensStore } from '../helpers/mockStore'
import { Dialog } from 'quasar'

describe('TransferTokens.vue', () => {
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
      transferTokens: vi.fn().mockResolvedValue(undefined),
      isValidAddress: vi.fn().mockReturnValue(true),
      estimateTransferGas: vi.fn().mockResolvedValue('0.000001'),
      isBlacklistedRecipient: vi.fn().mockResolvedValue(false)
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

      wrapper = mount(TransferTokens, {
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

    it('должен отображать сообщение для blacklisted пользователей', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.isBlacklisted.value = true

      wrapper = mount(TransferTokens, {
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

      expect(wrapper.text()).toContain('Transfers are not available for your account')
    })

    it('должен отображать форму перевода для normal пользователей', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canTransferTokens.value = true
      mockTokensStore.availableBalanceForTransfer.value = '100.000000'

      wrapper = mount(TransferTokens, {
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
      expect(wrapper.text()).toContain('Recipient Address')
      expect(wrapper.text()).toContain('Amount')
    })
  })

  describe('Отображение правильных данных', () => {
    it('должен отображать доступный баланс', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canTransferTokens.value = true
      mockTokensStore.availableBalanceForTransfer.value = '150.000000'

      wrapper = mount(TransferTokens, {
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

      expect(wrapper.text()).toContain('150.000000 CXBT')
    })

    it('должен отображать сообщение о возможности перевода заблокированных токенов для whitelisted', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canTransferTokens.value = true
      mockTokensStore.canTransferLockedTokens.value = true
      mockTokensStore.availableBalanceForTransfer.value = '200.000000'

      wrapper = mount(TransferTokens, {
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

      expect(wrapper.text()).toContain('You can transfer locked tokens')
    })
  })

  describe('Взаимодействие с пользователем', () => {
    it('должен вызывать transferTokens при отправке формы', async () => {
      mockWalletStore.isConnected = true
      mockWalletStore.address = '0x1234567890123456789012345678901234567890'
      mockTokensStore.canTransferTokens.value = true
      mockTokensStore.availableBalanceForTransfer.value = '100.000000'
      mockContract.transferTokens = vi.fn().mockResolvedValue(undefined)

      wrapper = mount(TransferTokens, {
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

      const recipientInput = wrapper.find('input[placeholder*="Recipient"]')
      await recipientInput.setValue('0x9876543210987654321098765432109876543210')

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue('50')

      const form = wrapper.find('.q-form')
      await form.trigger('submit')

      expect(mockContract.transferTokens).toHaveBeenCalledWith(
        '0x9876543210987654321098765432109876543210',
        '50'
      )
    })

    it('должен устанавливать максимальное количество при клике на кнопку maximize', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canTransferTokens.value = true
      mockTokensStore.availableBalanceForTransfer.value = '100.000000'
      mockContract.isValidAddress = vi.fn().mockReturnValue(true)

      wrapper = mount(TransferTokens, {
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

      const recipientInput = wrapper.find('input[placeholder*="Recipient"]')
      await recipientInput.setValue('0x9876543210987654321098765432109876543210')

      const maximizeButton = wrapper.find('.q-btn[icon="maximize"]')
      await maximizeButton.trigger('click')

      const amountInput = wrapper.find('input[type="number"]')
      expect(amountInput.element.value).toBe('100')
    })

    it('должен очищать форму после успешной транзакции', async () => {
      mockWalletStore.isConnected = true
      mockWalletStore.address = '0x1234567890123456789012345678901234567890'
      mockTokensStore.canTransferTokens.value = true
      mockTokensStore.availableBalanceForTransfer.value = '100.000000'
      mockContract.transferTokens = vi.fn().mockResolvedValue(undefined)

      wrapper = mount(TransferTokens, {
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

      const recipientInput = wrapper.find('input[placeholder*="Recipient"]')
      await recipientInput.setValue('0x9876543210987654321098765432109876543210')

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue('50')

      const form = wrapper.find('.q-form')
      await form.trigger('submit')

      await wrapper.vm.$nextTick()

      expect(wrapper.vm.recipient).toBe('')
      expect(wrapper.vm.amount).toBe('')
    })
  })

  describe('Валидация формы', () => {
    it('должен показывать ошибку для пустого адреса получателя', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canTransferTokens.value = true

      wrapper = mount(TransferTokens, {
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

      const recipientInput = wrapper.find('input[placeholder*="Recipient"]')
      await recipientInput.setValue('')

      expect(wrapper.text()).toContain('Recipient address is required')
    })

    it('должен показывать ошибку для неверного адреса', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canTransferTokens.value = true
      mockContract.isValidAddress = vi.fn().mockReturnValue(false)

      wrapper = mount(TransferTokens, {
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

      const recipientInput = wrapper.find('input[placeholder*="Recipient"]')
      await recipientInput.setValue('invalid-address')

      expect(wrapper.text()).toContain('Invalid address')
    })

    it('должен показывать ошибку для отправки самому себе', async () => {
      mockWalletStore.isConnected = true
      mockWalletStore.address = '0x1234567890123456789012345678901234567890'
      mockTokensStore.canTransferTokens.value = true

      wrapper = mount(TransferTokens, {
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

      const recipientInput = wrapper.find('input[placeholder*="Recipient"]')
      await recipientInput.setValue('0x1234567890123456789012345678901234567890')

      expect(wrapper.text()).toContain('Cannot send to yourself')
    })

    it('должен показывать ошибку для отрицательного количества', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canTransferTokens.value = true

      wrapper = mount(TransferTokens, {
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
      await amountInput.setValue(-10)

      expect(wrapper.text()).toContain('Amount must be greater than 0')
    })

    it('должен показывать ошибку для количества превышающего доступный баланс', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canTransferTokens.value = true
      mockTokensStore.availableBalanceForTransfer.value = '100.000000'

      wrapper = mount(TransferTokens, {
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
      await amountInput.setValue(150)

      expect(wrapper.text()).toContain('Amount exceeds available balance')
    })

    it('должен проверять, что количество положительное число', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canTransferTokens.value = true

      wrapper = mount(TransferTokens, {
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
      await amountInput.setValue(0)

      expect(wrapper.text()).toContain('Amount must be greater than 0')
    })

    it('должен проверять, что количество не превышает баланс', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canTransferTokens.value = true
      mockTokensStore.availableBalanceForTransfer.value = '50.000000'

      wrapper = mount(TransferTokens, {
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
      await amountInput.setValue(50.000001)

      expect(wrapper.text()).toContain('Amount exceeds available balance')
    })
  })

  describe('Различные статусы пользователя', () => {
    it('должен скрывать форму для blacklisted пользователей', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.isBlacklisted.value = true

      wrapper = mount(TransferTokens, {
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
      mockTokensStore.canTransferTokens.value = true

      wrapper = mount(TransferTokens, {
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

    it('должен показывать форму для whitelisted пользователей', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.isWhitelisted.value = true
      mockTokensStore.canTransferTokens.value = true

      wrapper = mount(TransferTokens, {
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

    it('должен показывать сообщение о возможности перевода заблокированных токенов для whitelisted', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.isWhitelisted.value = true
      mockTokensStore.canTransferLockedTokens.value = true
      mockTokensStore.availableBalanceForTransfer.value = '200.000000'

      wrapper = mount(TransferTokens, {
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

      expect(wrapper.text()).toContain('You can transfer locked tokens')
    })
  })

  describe('Различные состояния', () => {
    it('должен отображать состояние загрузки при отправке', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canTransferTokens.value = true
      mockContract.loading = true

      wrapper = mount(TransferTokens, {
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

      const sendButton = wrapper.find('.q-btn[label="Send"]')
      expect(sendButton.attributes('loading')).toBeDefined()
    })

    it('должен отключать кнопку отправки когда форма не валидна', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canTransferTokens.value = true

      wrapper = mount(TransferTokens, {
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

      const sendButton = wrapper.find('.q-btn[label="Send"]')
      expect(sendButton.attributes('disabled')).toBeDefined()
    })

    it('должен отображать успешную транзакцию', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canTransferTokens.value = true
      mockContract.txHash = '0x1234567890abcdef'
      mockContract.shortTxHash = '0x1234...cdef'
      mockContract.explorerUrl = 'https://basescan.org/tx/0x1234567890abcdef'

      wrapper = mount(TransferTokens, {
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

    it('должен отображать ссылку на explorer', () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canTransferTokens.value = true
      mockContract.txHash = '0x1234567890abcdef'
      mockContract.explorerUrl = 'https://basescan.org/tx/0x1234567890abcdef'

      wrapper = mount(TransferTokens, {
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

      const explorerLink = wrapper.find('a[href="https://basescan.org/tx/0x1234567890abcdef"]')
      expect(explorerLink.exists()).toBe(true)
      expect(explorerLink.text()).toContain('View in Explorer')
    })
  })

  describe('Проверка blacklisted статуса получателя', () => {
    it('должен проверять blacklisted статус получателя', async () => {
      mockWalletStore.isConnected = true
      mockWalletStore.address = '0x1234567890123456789012345678901234567890'
      mockTokensStore.canTransferTokens.value = true
      mockContract.isBlacklistedRecipient = vi.fn().mockResolvedValue(false)

      wrapper = mount(TransferTokens, {
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

      const recipientInput = wrapper.find('input[placeholder*="Recipient"]')
      await recipientInput.setValue('0x9876543210987654321098765432109876543210')

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue('50')

      const form = wrapper.find('.q-form')
      await form.trigger('submit')

      expect(mockContract.isBlacklistedRecipient).toHaveBeenCalledWith(
        '0x9876543210987654321098765432109876543210'
      )
    })

    it('должен показывать ошибку если получатель blacklisted', async () => {
      mockWalletStore.isConnected = true
      mockWalletStore.address = '0x1234567890123456789012345678901234567890'
      mockTokensStore.canTransferTokens.value = true
      mockContract.isBlacklistedRecipient = vi.fn().mockResolvedValue(true)

      wrapper = mount(TransferTokens, {
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

      const recipientInput = wrapper.find('input[placeholder*="Recipient"]')
      await recipientInput.setValue('0x9876543210987654321098765432109876543210')

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue('50')

      const form = wrapper.find('.q-form')
      await form.trigger('submit')

      await wrapper.vm.$nextTick()

      expect(mockContract.transferTokens).not.toHaveBeenCalled()
    })
  })

  describe('Отображение комиссии за газ', () => {
    it('должен отображать индикатор загрузки при расчёте газа', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canTransferTokens.value = true
      mockContract.estimateTransferGas = vi
        .fn()
        .mockImplementation(
          () => new Promise(resolve => setTimeout(() => resolve('0.000001'), 100))
        )

      wrapper = mount(TransferTokens, {
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

      const recipientInput = wrapper.find('input[placeholder*="Recipient"]')
      await recipientInput.setValue('0x9876543210987654321098765432109876543210')

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue('50')

      await wrapper.vm.$nextTick()

      expect(wrapper.vm.estimatingGas).toBe(true)
    })

    it('должен отображать оценку газа', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canTransferTokens.value = true
      mockContract.estimateTransferGas = vi.fn().mockResolvedValue('0.000123')

      wrapper = mount(TransferTokens, {
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

      const recipientInput = wrapper.find('input[placeholder*="Recipient"]')
      await recipientInput.setValue('0x9876543210987654321098765432109876543210')

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue('50')

      await wrapper.vm.$nextTick()
      await new Promise(resolve => setTimeout(resolve, 100))

      expect(wrapper.vm.gasEstimate).toBe('0.000123')
      expect(wrapper.text()).toContain('0.000123 ETH')
    })
  })

  describe('Обработка ошибок транзакции', () => {
    it('должен обрабатывать ошибки при отправке транзакции', async () => {
      mockWalletStore.isConnected = true
      mockWalletStore.address = '0x1234567890123456789012345678901234567890'
      mockTokensStore.canTransferTokens.value = true
      mockContract.transferTokens = vi.fn().mockRejectedValue(new Error('Transaction failed'))

      wrapper = mount(TransferTokens, {
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

      const recipientInput = wrapper.find('input[placeholder*="Recipient"]')
      await recipientInput.setValue('0x9876543210987654321098765432109876543210')

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue('50')

      const form = wrapper.find('.q-form')
      await form.trigger('submit')

      await wrapper.vm.$nextTick()
      await new Promise(resolve => setTimeout(resolve, 100))

      expect(mockContract.transferTokens).toHaveBeenCalled()
    })
  })

  describe('Наблюдение за изменениями', () => {
    it('должен очищать форму при отключении кошелька', async () => {
      mockWalletStore.isConnected = true
      mockTokensStore.canTransferTokens.value = true

      wrapper = mount(TransferTokens, {
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

      // Устанавливаем значения
      const recipientInput = wrapper.find('input[placeholder*="Recipient"]')
      await recipientInput.setValue('0x9876543210987654321098765432109876543210')

      const amountInput = wrapper.find('input[type="number"]')
      await amountInput.setValue('50')

      // Симулируем отключение кошелька
      mockWalletStore.isConnected = false
      await wrapper.vm.$nextTick()

      expect(wrapper.vm.recipient).toBe('')
      expect(wrapper.vm.amount).toBe('')
    })
  })
})
