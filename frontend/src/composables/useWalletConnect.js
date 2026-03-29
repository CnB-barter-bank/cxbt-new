import { createConfig, http, getConnection, getConnectorClient, getPublicClient, switchChain, watchAccount, getBalance as wagmiGetBalance } from '@wagmi/core'
import { base, mainnet, polygon, arbitrum, optimism, bsc } from 'viem/chains'
import {
  createWeb3Modal,
  useWeb3Modal,
} from '@web3modal/wagmi/vue'
import { QueryClient } from '@tanstack/vue-query'
import { computed, ref, watch, onMounted, onUnmounted } from 'vue'
import { useWalletStore } from '../stores/wallet'
import { Notify } from 'quasar'

// Константы сети Base
export const BASE_CHAIN_ID = 8453
export const BASE_NETWORK_CONFIG = {
  chainId: BASE_CHAIN_ID,
  name: 'Base',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://mainnet.base.org'],
    },
    public: {
      http: ['https://mainnet.base.org'],
    },
  },
  blockExplorers: {
    default: {
      name: 'BaseScan',
      url: 'https://basescan.org',
    },
  },
}

// Настройка Wagmi Core для сети Base
export const wagmiConfig = createConfig({
  chains: [base],
  transports: {
    [base.id]: http('https://mainnet.base.org'),
  },
  ssr: false,
})

console.log('[useWalletConnect] wagmiConfig инициализирован:', wagmiConfig)
console.log('[useWalletConnect] wagmiConfig.chains:', wagmiConfig.chains)

// Настройка QueryClient
export const queryClient = new QueryClient()

// Инициализация Web3Modal с обработкой ошибок (ленивая инициализация на клиенте)
let web3Modal
let isWeb3ModalInitialized = false

// Функция ленивой инициализации Web3Modal
const initializeWeb3Modal = () => {
  if (isWeb3ModalInitialized) {
    return web3Modal
  }

  // Проверка клиентского окружения
  if (typeof window === 'undefined') {
    console.warn('[Web3Modal] Пропуск инициализации: не клиентское окружение')
    web3Modal = {
      open: () => {
        console.error('[Web3Modal] Невозможно открыть модальное окно - Web3Modal не инициализирован (SSR)')
        throw new Error('Web3Modal не инициализирован. Проверьте консоль для деталей.')
      },
      close: () => {
        console.warn('[Web3Modal] Web3Modal не инициализирован (SSR)')
      },
    }
    return web3Modal
  }

  try {
    const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID'
    
    if (!projectId || projectId === 'YOUR_PROJECT_ID') {
      console.error('[Web3Modal] Ошибка: Project ID не задан или некорректен')
      console.error('[Web3Modal] Пожалуйста, установите VITE_WALLETCONNECT_PROJECT_ID в файле .env')
    }
    
    console.log('[Web3Modal] Инициализация с Project ID:', projectId)
    
    web3Modal = createWeb3Modal({
      wagmiConfig: wagmiConfig,
      projectId: projectId,
      enableAnalytics: false,
      themeMode: 'light',
      defaultChain: base,
      themeVariables: {
        '--w3m-color-mix': '#00DCFF',
        '--w3m-color-mix-strength': 40,
      },
    })
    
    isWeb3ModalInitialized = true
    console.log('[Web3Modal] Инициализация успешна')
  } catch (error) {
    console.error('[Web3Modal] Ошибка при инициализации:', error)
    console.error('[Web3Modal] Stack trace:', error.stack)
    // Создаем минимальный fallback объект для предотвращения ошибок в приложении
    web3Modal = {
      open: () => {
        console.error('[Web3Modal] Невозможно открыть модальное окно - Web3Modal не инициализирован')
        throw new Error('Web3Modal не инициализирован. Проверьте консоль для деталей.')
      },
      close: () => {
        console.warn('[Web3Modal] Web3Modal не инициализирован')
      },
    }
  }

  return web3Modal
}

// Функция для получения web3Modal с ленивой инициализацией
const getWeb3Modal = () => {
  if (!isWeb3ModalInitialized) {
    return initializeWeb3Modal()
  }
  return web3Modal
}

export { web3Modal, getWeb3Modal, initializeWeb3Modal }

// Глобальный обработчик ошибок для отслеживания connector.getChainId
const originalError = console.error
console.error = function(...args) {
  const errorStr = JSON.stringify(args)
  if (errorStr.includes('getChainId') && errorStr.includes('not a function')) {
    console.error('[GLOBAL ERROR HANDLER] Обнаружена ошибка "getChainId is not a function":', args)
    console.error('[GLOBAL ERROR HANDLER] Stack trace:', new Error().stack)
  }
  originalError.apply(console, args)
}

// Глобальный обработчик для отслеживания TypeError
window.addEventListener('error', (event) => {
  if (event.message && event.message.includes('getChainId') && event.message.includes('not a function')) {
    console.error('[GLOBAL WINDOW ERROR] Обнаружена ошибка "getChainId is not a function":', event)
    console.error('[GLOBAL WINDOW ERROR] Stack trace:', event.error?.stack || new Error().stack)
  }
})

// Глобальный обработчик для отслеживания rejected promises
window.addEventListener('unhandledrejection', (event) => {
  if (event.reason && event.reason.message && event.reason.message.includes('getChainId') && event.reason.message.includes('not a function')) {
    console.error('[GLOBAL UNHANDLED REJECTION] Обнаружена ошибка "getChainId is not a function":', event.reason)
    console.error('[GLOBAL UNHANDLED REJECTION] Stack trace:', event.reason?.stack || new Error().stack)
  }
})

// Обёртка для getConnection для отслеживания всех вызовов
let getConnectionCallCount = 0
const originalGetConnection = getConnection
const trackedGetConnection = async (config) => {
  getConnectionCallCount++
  const callId = getConnectionCallCount
  console.log(`[TRACKED getConnection] Вызов #${callId} - Начало`)
  console.log(`[TRACKED getConnection] Вызов #${callId} - Stack trace:`, new Error().stack)
  
  try {
    const result = await originalGetConnection(config)
    console.log(`[TRACKED getConnection] Вызов #${callId} - Успешно получен результат:`, result)
    console.log(`[TRACKED getConnection] Вызов #${callId} - result.connector:`, result?.connector)
    console.log(`[TRACKED getConnection] Вызов #${callId} - Тип connector:`, typeof result?.connector)
    
    if (result?.connector) {
      console.log(`[TRACKED getConnection] Вызов #${callId} - Методы connector:`, Object.getOwnPropertyNames(Object.getPrototypeOf(result.connector)))
      console.log(`[TRACKED getConnection] Вызов #${callId} - Есть ли getChainId?`, typeof result.connector.getChainId)
    }
    
    return result
  } catch (error) {
    console.error(`[TRACKED getConnection] Вызов #${callId} - Ошибка:`, error)
    console.error(`[TRACKED getConnection] Вызов #${callId} - Stack trace:`, error.stack)
    throw error
  }
}

// Composable для работы с WalletConnect
export function useWalletConnect() {
  console.log('[useWalletConnect] Инициализация composable')
  console.log('[useWalletConnect] Stack trace:', new Error().stack)
  
  // Инициализируем Web3Modal перед использованием useWeb3Modal
  if (!isWeb3ModalInitialized) {
    initializeWeb3Modal()
  }

  const { open } = useWeb3Modal()
  
  // Состояние кошелька (используем ref вместо useWeb3ModalAccount)
  const address = ref(undefined)
  const isConnected = ref(false)
  const chainId = ref(undefined)
  const chain = ref(undefined)
  const walletProvider = ref(undefined)
  
  const balance = ref('0')
  const isConnecting = ref(false)
  const isWalletDialogOpen = ref(false)

  // Флаг для предотвращения повторных автоматических открытий
  const hasAutoOpened = ref(false)

  // Настройка автоматического открытия (можно отключить через переменную окружения)
  const shouldAutoOpen = import.meta.env.VITE_AUTO_OPEN_WALLET_CONNECTOR !== 'false'

  // Инициализация wallet store
  const walletStore = useWalletStore()

  // Функция обновления состояния кошелька
  const updateWalletState = async () => {
    try {
      console.log('[useWalletConnect] updateWalletState - Начало выполнения')
      console.log('[useWalletConnect] updateWalletState - Stack trace:', new Error().stack)
      
      const connection = await trackedGetConnection(wagmiConfig)
      console.log('[useWalletConnect] updateWalletState - connection получен:', connection)
      console.log('[useWalletConnect] updateWalletState - connection.connector:', connection?.connector)
      console.log('[useWalletConnect] updateWalletState - Тип connector:', typeof connection?.connector)
      
      // Проверяем наличие методов на connector
      if (connection?.connector) {
        console.log('[useWalletConnect] updateWalletState - Методы connector:', Object.getOwnPropertyNames(Object.getPrototypeOf(connection.connector)))
        console.log('[useWalletConnect] updateWalletState - Есть ли getChainId?', typeof connection.connector.getChainId)
        
        // НЕ пытаемся вызвать connector.getChainId() - это может вызвать ошибку
        // В wagmi v3.x, chainId доступен напрямую из connection.chainId
        console.log('[useWalletConnect] updateWalletState - connection.chainId:', connection.chainId)
      }
      
      address.value = connection?.accounts?.[0] || undefined
      isConnected.value = !!address.value
      chainId.value = connection?.chainId
      chain.value = connection?.chain
      
      console.log('[useWalletConnect] updateWalletState - address:', address.value, 'isConnected:', isConnected.value, 'chainId:', chainId.value)
      
      // Получаем public client для провайдера (используем getPublicClient вместо getConnectorClient)
      // getConnectorClient требует параметр account и может вызывать ошибки при раннем вызове
      if (isConnected.value && chainId.value) {
        try {
          const publicClient = getPublicClient(wagmiConfig, { chainId: chainId.value })
          walletProvider.value = publicClient
          console.log('[useWalletConnect] updateWalletState - publicClient получен:', publicClient)
        } catch (error) {
          console.error('[useWalletConnect] Ошибка при получении public client:', error)
        }
      } else {
        walletProvider.value = undefined
      }
    } catch (error) {
      console.error('[useWalletConnect] Ошибка обновления состояния кошелька:', error)
      console.error('[useWalletConnect] Stack trace:', error.stack)
    }
  }

  // Функция проверки и переключения на сеть Base
  const ensureBaseNetwork = async () => {
    try {
      console.log('[WalletConnect] ensureBaseNetwork - Начало выполнения')
      console.log('[WalletConnect] ensureBaseNetwork - Stack trace:', new Error().stack)
      
      const connection = await trackedGetConnection(wagmiConfig)
      console.log('[WalletConnect] ensureBaseNetwork - connection:', connection)
      console.log('[WalletConnect] ensureBaseNetwork - connection.connector:', connection?.connector)
      
      // Проверяем наличие методов на connector
      if (connection?.connector) {
        console.log('[WalletConnect] ensureBaseNetwork - Методы connector:', Object.getOwnPropertyNames(Object.getPrototypeOf(connection.connector)))
        console.log('[WalletConnect] ensureBaseNetwork - Есть ли getChainId?', typeof connection.connector.getChainId)
        
        // НЕ пытаемся вызвать connector.getChainId() - это может вызвать ошибку
        // В wagmi v3.x, chainId доступен напрямую из connection.chainId
        console.log('[WalletConnect] ensureBaseNetwork - connection.chainId:', connection.chainId)
      }
      
      const currentChainId = connection?.chainId

      if (!currentChainId) {
        console.log('[WalletConnect] Сеть не определена, ожидаем подключения')
        return false
      }

      if (currentChainId !== BASE_CHAIN_ID) {
        console.warn(`[WalletConnect] Неподдерживаемая сеть: ${currentChainId}. Требуется Base (${BASE_CHAIN_ID})`)
        
        // Показываем предупреждение пользователю
        Notify.create({
          type: 'warning',
          message: 'Требуется сеть Base. Автоматическое переключение...',
          timeout: 3000,
          position: 'top',
        })

        // Пытаемся переключиться на Base
        try {
          await switchChain(wagmiConfig, { chainId: BASE_CHAIN_ID })
          console.log('[WalletConnect] Успешное переключение на сеть Base')
          
          Notify.create({
            type: 'positive',
            message: 'Переключено на сеть Base',
            timeout: 2000,
            position: 'top',
          })
          
          return true
        } catch (switchError) {
          console.error('[WalletConnect] Ошибка при переключении на Base:', switchError)
          
          Notify.create({
            type: 'negative',
            message: 'Не удалось переключиться на сеть Base. Пожалуйста, переключите сеть вручную.',
            timeout: 5000,
            position: 'top',
            actions: [
              {
                label: 'Понятно',
                color: 'white',
                handler: () => {},
              },
            ],
          })
          
          return false
        }
      }

      return true
    } catch (error) {
      console.error('[WalletConnect] Ошибка при проверке сети:', error)
      console.error('[WalletConnect] Stack trace:', error.stack)
      return false
    }
  }

  // Функция автоматического подключения при загрузке
  const autoReconnect = async () => {
    try {
      const { reconnect } = await import('@wagmi/core')
      await reconnect(wagmiConfig)
      
      // Проверяем сеть после автоматического подключения
      if (isConnected.value) {
        await ensureBaseNetwork()
      }
    } catch (error) {
      console.error('Ошибка автоматического подключения к кошельку:', error)
    }
  }

  // Слушатель событий для отслеживания изменений состояния аккаунта
  const unwatchAccount = watchAccount(wagmiConfig, {
    onChange(account) {
      console.log('[useWalletConnect] watchAccount onChange - Начало выполнения')
      console.log('[useWalletConnect] watchAccount onChange - Stack trace:', new Error().stack)
      console.log('[useWalletConnect] watchAccount onChange - account:', account)
      console.log('[useWalletConnect] watchAccount onChange - account.connector:', account?.connector)
      
      // Проверяем наличие методов на connector
      if (account?.connector) {
        console.log('[useWalletConnect] watchAccount onChange - Методы connector:', Object.getOwnPropertyNames(Object.getPrototypeOf(account.connector)))
        console.log('[useWalletConnect] watchAccount onChange - Есть ли getChainId?', typeof account.connector.getChainId)
        
        // НЕ пытаемся вызвать connector.getChainId() - это может вызвать ошибку
        // В wagmi v3.x, chainId доступен напрямую из account.chainId
        console.log('[useWalletConnect] watchAccount onChange - account.chainId:', account.chainId)
      }
      
      address.value = account.address
      isConnected.value = !!account.address
      chainId.value = account.chainId
      chain.value = account.chain
      
      // Получаем public client для провайдера (используем getPublicClient вместо getConnectorClient)
      // getConnectorClient требует параметр account и может вызывать ошибки при раннем вызове
      if (isConnected.value && account.chainId) {
        try {
          const publicClient = getPublicClient(wagmiConfig, { chainId: account.chainId })
          walletProvider.value = publicClient
          console.log('[useWalletConnect] watchAccount onChange - publicClient получен:', publicClient)
        } catch (error) {
          console.error('[useWalletConnect] Ошибка при получении public client в watchAccount:', error)
        }
      } else {
        walletProvider.value = undefined
      }
    },
  })

  // Слушатели событий для синхронизации с wallet store
  watch(
    address,
    newAddress => {
      console.log('[useWalletConnect] watch address triggered - old:', address.value, 'new:', newAddress)
      walletStore.setAddress(newAddress)
    },
    { immediate: true }
  )

  watch(
    isConnected,
    newIsConnected => {
      console.log('[useWalletConnect] watch isConnected triggered - newIsConnected:', newIsConnected)
      walletStore.setIsConnected(newIsConnected)
      if (newIsConnected) {
        walletStore.connect()
      } else {
        walletStore.disconnect()
      }
    },
    { immediate: true }
  )

  watch(
    chainId,
    newChainId => {
      walletStore.setChainId(newChainId)
      
      // Проверяем сеть при изменении chainId
      if (newChainId && newChainId !== BASE_CHAIN_ID && isConnected.value) {
        ensureBaseNetwork()
      }
    },
    { immediate: true }
  )

  // Очистка слушателя событий при размонтировании
  onUnmounted(() => {
    if (unwatchAccount) {
      unwatchAccount()
      console.log('[useWalletConnect] unwatchAccount called')
    }
  })

  // Запуск автоматического подключения при монтировании
  onMounted(async () => {
    await autoReconnect()
    
    // Автоматическое открытие модального окна, если кошелек не подключен
    if (shouldAutoOpen && !hasAutoOpened.value && !isConnected.value) {
      hasAutoOpened.value = true
      try {
        await open()
        console.log('[WalletConnect] Модальное окно автоматически открыто')
      } catch (error) {
        console.error('[WalletConnect] Ошибка при автоматическом открытии:', error)
      }
    }
  })
  
  // Функция подключения к кошельку
  const connect = async () => {
    try {
      isConnecting.value = true
      isWalletDialogOpen.value = true
      await open()
      
      // Проверяем и переключаем на Base после подключения
      if (isConnected.value) {
        const isCorrectNetwork = await ensureBaseNetwork()
        if (!isCorrectNetwork) {
          console.warn('[WalletConnect] Подключение не к сети Base')
        }
      }
    } catch (error) {
      console.error('Ошибка подключения к кошельку:', error)
      throw error
    } finally {
      isConnecting.value = false
      // Закрытие диалога происходит через событие onClose модального окна
    }
  }

  // Функция отключения от кошелька
  const disconnect = async () => {
    try {
      const modal = getWeb3Modal()
      modal.close()
      isWalletDialogOpen.value = false
    } catch (error) {
      console.error('Ошибка отключения от кошелька:', error)
      throw error
    }
  }

  // Получение адреса аккаунта
  const getAccount = () => {
    return address.value
  }

  // Получение баланса
  const getBalance = async () => {
    if (!address.value) {
      return '0'
    }

    try {
      const bal = await wagmiGetBalance(wagmiConfig, {
        address: address.value,
      })
      balance.value = bal.toString()
      return balance.value
    } catch (error) {
      console.error('Ошибка получения баланса:', error)
      return '0'
    }
  }

  // Вычисляемые свойства
  const account = computed(() => address.value)
  const isConnectedState = computed(() => isConnected.value)
  const currentChainId = computed(() => chainId.value)
  const currentChain = computed(() => chain.value)
  const provider = computed(() => walletProvider.value)
  const isBaseNetwork = computed(() => chainId.value === BASE_CHAIN_ID)

  return {
    // Методы
    connect,
    disconnect,
    getAccount,
    getBalance,
    ensureBaseNetwork,

    // Состояние
    account,
    isConnected: isConnectedState,
    chainId: currentChainId,
    chain: currentChain,
    provider,
    balance,
    isConnecting,
    isBaseNetwork,
    isWalletDialogOpen,
  }
}

export default useWalletConnect
