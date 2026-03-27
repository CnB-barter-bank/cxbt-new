import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import WalletConnect from 'src/components/WalletConnect.vue'
import { useWalletStore } from 'src/stores/wallet'
import { createMockWalletStore } from '../helpers/mockStore'
import { setupWeb3Mocks, resetWeb3Mocks } from '../helpers/mockWeb3'

// Mock useWalletStore
vi.mock('src/stores/wallet', () => ({
  useWalletStore: vi.fn()
}))

describe('WalletConnect.vue', () => {
  let wrapper
  let mockWalletStore

  beforeEach(() => {
    setupWeb3Mocks()
    setActivePinia(createPinia())
    mockWalletStore = createMockWalletStore()
    vi.mocked(useWalletStore).mockReturnValue(mockWalletStore)
  })

  afterEach(() => {
    if (wrapper) {
      wrapper.unmount()
    }
    resetWeb3Mocks()
  })

  describe('Рендеринг компонента', () => {
    it('должен отображать кнопку подключения когда кошелек не подключен', () => {
      mockWalletStore.isConnected = false
      mockWalletStore.loading = false

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      const connectButton = wrapper.find('button')
      expect(connectButton.exists()).toBe(true)
      expect(connectButton.text()).toContain('Connect Wallet')
    })

    it('должен отображать информацию о кошельке когда подключен', () => {
      mockWalletStore.isConnected = true
      mockWalletStore.address = '0x1234567890123456789012345678901234567890'
      mockWalletStore.shortAddress = '0x1234...7890'
      mockWalletStore.currentChain = { name: 'Base' }
      mockWalletStore.isBaseNetwork = true

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      const walletInfo = wrapper.find('.wallet-info')
      expect(walletInfo.exists()).toBe(true)
      expect(wrapper.text()).toContain('0x1234...7890')
    })

    it('должен отображать индикатор сети', () => {
      mockWalletStore.isConnected = true
      mockWalletStore.currentChain = { name: 'Base' }
      mockWalletStore.isBaseNetwork = true

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      expect(wrapper.text()).toContain('Base')
    })

    it('должен отображать состояние загрузки', () => {
      mockWalletStore.isConnected = false
      mockWalletStore.loading = true

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      const connectButton = wrapper.find('button')
      expect(connectButton.attributes('loading')).toBeDefined()
    })
  })

  describe('Отображение правильных данных', () => {
    it('должен отображать короткий адрес кошелька', () => {
      mockWalletStore.isConnected = true
      mockWalletStore.address = '0x1234567890123456789012345678901234567890'
      mockWalletStore.shortAddress = '0x1234...7890'

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      expect(wrapper.text()).toContain('0x1234...7890')
    })

    it('должен отображать предупреждение когда не в сети Base', () => {
      mockWalletStore.isConnected = true
      mockWalletStore.currentChain = { name: 'Ethereum' }
      mockWalletStore.isBaseNetwork = false

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      expect(wrapper.text()).toContain('Switch to Base')
    })

    it('должен отображать ошибку когда она есть', () => {
      mockWalletStore.isConnected = false
      mockWalletStore.error = 'Connection failed'

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      expect(wrapper.text()).toContain('Connection failed')
    })
  })

  describe('Взаимодействие с пользователем', () => {
    it('должен вызывать connectWallet при клике на кнопку подключения', async () => {
      mockWalletStore.isConnected = false
      mockWalletStore.connectWallet = vi.fn().mockResolvedValue({ success: true })

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      const connectButton = wrapper.find('button')
      await connectButton.trigger('click')

      expect(mockWalletStore.connectWallet).toHaveBeenCalled()
    })

    it('должен вызывать disconnectWallet при клике на кнопку отключения', async () => {
      mockWalletStore.isConnected = true
      mockWalletStore.disconnectWallet = vi.fn()

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      const disconnectButton = wrapper.find('.q-btn[icon="logout"]')
      await disconnectButton.trigger('click')

      expect(mockWalletStore.disconnectWallet).toHaveBeenCalled()
    })

    it('должен вызывать switchNetwork при клике на кнопку переключения сети', async () => {
      mockWalletStore.isConnected = true
      mockWalletStore.isBaseNetwork = false
      mockWalletStore.switchNetwork = vi.fn().mockResolvedValue(undefined)

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      const switchButton = wrapper.find('.q-btn[label="Switch to Base"]')
      await switchButton.trigger('click')

      expect(mockWalletStore.switchNetwork).toHaveBeenCalledWith(8453)
    })

    it('должен копировать адрес при клике на чип адреса', async () => {
      mockWalletStore.isConnected = true
      mockWalletStore.address = '0x1234567890123456789012345678901234567890'

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      const addressChip = wrapper.find('.q-chip[icon="account_balance_wallet"]')
      await addressChip.trigger('click')

      expect(global.navigator.clipboard.writeText).toHaveBeenCalledWith(
        '0x1234567890123456789012345678901234567890'
      )
    })

    it('должен очищать ошибку при клике на кнопку закрытия', async () => {
      mockWalletStore.isConnected = false
      mockWalletStore.error = 'Connection failed'

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      const closeButton = wrapper.find('.q-btn[label="Close"]')
      await closeButton.trigger('click')

      expect(mockWalletStore.error).toBeNull()
    })
  })

  describe('Различные состояния', () => {
    it('должен отображать состояние загрузки при подключении', () => {
      mockWalletStore.isConnected = false
      mockWalletStore.loading = true

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      const connectButton = wrapper.find('button')
      expect(connectButton.attributes('loading')).toBeDefined()
    })

    it('должен отображать состояние ошибки', () => {
      mockWalletStore.isConnected = false
      mockWalletStore.error = 'Connection failed'

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      expect(wrapper.find('.q-banner').exists()).toBe(true)
      expect(wrapper.text()).toContain('Connection failed')
    })

    it('должен отображать состояние успеха после подключения', () => {
      mockWalletStore.isConnected = true
      mockWalletStore.address = '0x1234567890123456789012345678901234567890'
      mockWalletStore.shortAddress = '0x1234...7890'
      mockWalletStore.currentChain = { name: 'Base' }
      mockWalletStore.isBaseNetwork = true

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      expect(wrapper.find('.wallet-info').exists()).toBe(true)
      expect(wrapper.text()).toContain('0x1234...7890')
    })
  })

  describe('Различные статусы сети', () => {
    it('должен отображать позитивный цвет для сети Base', () => {
      mockWalletStore.isConnected = true
      mockWalletStore.currentChain = { name: 'Base' }
      mockWalletStore.isBaseNetwork = true

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      const networkChip = wrapper.find('.q-chip')
      expect(networkChip.classes()).toContain('bg-positive')
    })

    it('должен отображать предупреждающий цвет для другой сети', () => {
      mockWalletStore.isConnected = true
      mockWalletStore.currentChain = { name: 'Ethereum' }
      mockWalletStore.isBaseNetwork = false

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      const networkChip = wrapper.find('.q-chip')
      expect(networkChip.classes()).toContain('bg-warning')
    })

    it('должен показывать кнопку переключения сети когда не в Base', () => {
      mockWalletStore.isConnected = true
      mockWalletStore.isBaseNetwork = false

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      const switchButton = wrapper.find('.q-btn[label="Switch to Base"]')
      expect(switchButton.exists()).toBe(true)
    })

    it('не должен показывать кнопку переключения сети когда в Base', () => {
      mockWalletStore.isConnected = true
      mockWalletStore.isBaseNetwork = true

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      const switchButton = wrapper.find('.q-btn[label="Switch to Base"]')
      expect(switchButton.exists()).toBe(false)
    })
  })

  describe('Сценарии с разными сетями', () => {
    it('должен работать с сетью Ethereum', () => {
      mockWalletStore.isConnected = true
      mockWalletStore.chainId = 1
      mockWalletStore.currentChain = { name: 'Ethereum', chainId: 1 }
      mockWalletStore.isBaseNetwork = false

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      expect(wrapper.text()).toContain('Ethereum')
      expect(wrapper.text()).toContain('Switch to Base')
    })

    it('должен работать с сетью Polygon', () => {
      mockWalletStore.isConnected = true
      mockWalletStore.chainId = 137
      mockWalletStore.currentChain = { name: 'Polygon', chainId: 137 }
      mockWalletStore.isBaseNetwork = false

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      expect(wrapper.text()).toContain('Polygon')
      expect(wrapper.text()).toContain('Switch to Base')
    })

    it('должен работать с сетью Arbitrum', () => {
      mockWalletStore.isConnected = true
      mockWalletStore.chainId = 42161
      mockWalletStore.currentChain = { name: 'Arbitrum', chainId: 42161 }
      mockWalletStore.isBaseNetwork = false

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      expect(wrapper.text()).toContain('Arbitrum')
      expect(wrapper.text()).toContain('Switch to Base')
    })

    it('должен работать с сетью Optimism', () => {
      mockWalletStore.isConnected = true
      mockWalletStore.chainId = 10
      mockWalletStore.currentChain = { name: 'Optimism', chainId: 10 }
      mockWalletStore.isBaseNetwork = false

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      expect(wrapper.text()).toContain('Optimism')
      expect(wrapper.text()).toContain('Switch to Base')
    })
  })

  describe('Индикатор загрузки при переключении сети', () => {
    it('должен отображать индикатор загрузки при переключении сети', async () => {
      mockWalletStore.isConnected = true
      mockWalletStore.isBaseNetwork = false
      mockWalletStore.switchNetwork = vi
        .fn()
        .mockImplementation(() => new Promise(resolve => setTimeout(resolve, 100)))

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      const switchButton = wrapper.find('.q-btn[label="Switch to Base"]')
      await switchButton.trigger('click')

      await wrapper.vm.$nextTick()

      expect(wrapper.vm.switchingNetwork).toBe(true)
    })
  })

  describe('Обработка ошибок подключения', () => {
    it('должен обрабатывать ошибку при подключении', async () => {
      mockWalletStore.isConnected = false
      mockWalletStore.connectWallet = vi.fn().mockResolvedValue({
        success: false,
        error: 'User rejected connection'
      })

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      const connectButton = wrapper.find('button')
      await connectButton.trigger('click')

      await wrapper.vm.$nextTick()

      expect(mockWalletStore.error).toBe('User rejected connection')
    })

    it('должен обрабатывать ошибку при переключении сети', async () => {
      mockWalletStore.isConnected = true
      mockWalletStore.isBaseNetwork = false
      mockWalletStore.switchNetwork = vi.fn().mockRejectedValue(new Error('Network switch failed'))

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      const switchButton = wrapper.find('.q-btn[label="Switch to Base"]')
      await switchButton.trigger('click')

      await wrapper.vm.$nextTick()
      await new Promise(resolve => setTimeout(resolve, 100))

      expect(wrapper.vm.switchingNetwork).toBe(false)
    })
  })

  describe('Копирование адреса в буфер обмена', () => {
    it('должен копировать полный адрес в буфер обмена', async () => {
      mockWalletStore.isConnected = true
      mockWalletStore.address = '0x1234567890123456789012345678901234567890'

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      const addressChip = wrapper.find('.q-chip[icon="account_balance_wallet"]')
      await addressChip.trigger('click')

      expect(global.navigator.clipboard.writeText).toHaveBeenCalledWith(
        '0x1234567890123456789012345678901234567890'
      )
    })

    it('должен обрабатывать ошибку при копировании', async () => {
      mockWalletStore.isConnected = true
      mockWalletStore.address = '0x1234567890123456789012345678901234567890'
      global.navigator.clipboard.writeText = vi
        .fn()
        .mockRejectedValue(new Error('Clipboard write failed'))

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      const addressChip = wrapper.find('.q-chip[icon="account_balance_wallet"]')
      await addressChip.trigger('click')

      expect(global.navigator.clipboard.writeText).toHaveBeenCalled()
    })
  })

  describe('Отображение короткого адреса', () => {
    it('должен отображать короткий адрес в формате 0x1234...7890', () => {
      mockWalletStore.isConnected = true
      mockWalletStore.address = '0x1234567890123456789012345678901234567890'
      mockWalletStore.shortAddress = '0x1234...7890'

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      expect(wrapper.text()).toContain('0x1234...7890')
    })

    it('должен корректно обрабатывать короткий адрес', () => {
      mockWalletStore.isConnected = true
      mockWalletStore.address = '0x1234567890'
      mockWalletStore.shortAddress = '0x1234...7890'

      wrapper = mount(WalletConnect, {
        global: {
          mocks: {
            $t: key => key
          }
        }
      })

      expect(wrapper.text()).toContain('0x1234...7890')
    })
  })
})
