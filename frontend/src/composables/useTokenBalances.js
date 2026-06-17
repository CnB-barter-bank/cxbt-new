import { ref, computed, watch } from 'vue'
import { readContract } from '@wagmi/core'
import { wagmiConfig } from './useWalletConnect'
import { safeLogError, safeLogObject } from '../utils/serializer'

/**
 * Создаёт debounced версию функции
 * @param {Function} fn - Функция для debounce
 * @param {number} delay - Задержка в миллисекундах
 * @returns {Function} Debounced функция
 */
function debounce(fn, delay) {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn.apply(this, args), delay)
  }
}

const debouncedReadContract = debounce(readContract, 200)

// ABI для ERC20 токена (функции name, symbol, balanceOf, unlockedBalanceOf, decimals)
const erc20Abi = [
  {
    inputs: [],
    name: 'name',
    outputs: [{ name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ name: 'account', type: 'address' }],
    name: 'unlockedBalanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', type: 'uint8' }],
    stateMutability: 'view',
    type: 'function'
  }
]

// ABI для Diamond контракта (функция getTokenBalances)
const diamondAbi = [
  {
    inputs: [{ internalType: 'address', name: 'user', type: 'address' }],
    name: 'getTokenBalances',
    outputs: [
      { internalType: 'uint256', name: 'unlocked', type: 'uint256' },
      { internalType: 'uint256', name: 'locked', type: 'uint256' },
      { internalType: 'uint256', name: 'total', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  }
]

// ABI для CXBTFacet (функция getPaidToken)
const cxbtAbi = [
  {
    inputs: [],
    name: 'getPaidToken',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  }
]

/**
 * Composable для получения балансов токенов
 * @param {Ref<string>|string} address - Адрес пользователя
 * @returns {Object} Объект с реактивными значениями балансов и функциями
 */
// Глобальный счётчик вызовов fetchBalances для отладки
let fetchBalancesCallCount = 0
let lastFetchBalancesTime = 0

// Кэш для балансов (ключ: адрес, значение: { data, timestamp })
const balancesCache = new Map()
const CACHE_TTL = 30000 // 30 секунд TTL для кэша

/**
 * Получает кэшированные балансы для адреса
 * @param {string} address - Адрес кошелька
 * @returns {Object|null} Кэшированные данные или null
 */
function getCachedBalances(address) {
  const cached = balancesCache.get(address)
  if (!cached) return null
  
  const now = Date.now()
  if (now - cached.timestamp > CACHE_TTL) {
    console.log('[useTokenBalances] Кэш устарел для адреса:', address)
    balancesCache.delete(address)
    return null
  }
  
  console.log('[useTokenBalances] Используем кэшированные балансы для адреса:', address)
  return cached.data
}

/**
 * Сохраняет балансы в кэш
 * @param {string} address - Адрес кошелька
 * @param {Object} data - Данные балансов
 */
function setCachedBalances(address, data) {
  console.log('[useTokenBalances] Сохраняем балансы в кэш для адреса:', address)
  balancesCache.set(address, {
    data,
    timestamp: Date.now()
  })
}

/**
 * Очищает кэш для адреса
 * @param {string} address - Адрес кошелька
 */
function clearCachedBalances(address) {
  console.log('[useTokenBalances] Очищаем кэш для адреса:', address)
  balancesCache.delete(address)
}

export function useTokenBalances(address) {
  console.log('[useTokenBalances] Инициализация composable')
  console.log('[useTokenBalances] Параметр address:', address)
  console.log('[useTokenBalances] Тип address:', typeof address)
  
  // Реактивные состояния
  const paidBalance = ref(0n)
  const workBalance = ref(0n)
  const lockedTokens = ref(null)
  const paidTokenName = ref('')
  const paidTokenSymbol = ref('')
  const workTokenName = ref('')
  const workTokenSymbol = ref('')
  const paidDecimals = ref(18) // Дефолтное значение decimals
  const workDecimals = ref(18) // Дефолтное значение decimals
  const isLoading = ref(false)
  const error = ref(null)
  const criticalError = ref(null)
  
  // Флаг для предотвращения параллельных вызовов
  const isFetching = ref(false)

  // Получаем адреса контрактов из переменных окружения
  const workTokenAddress = import.meta.env.VITE_WORK_TOKEN_ADDRESS
  const paidTokenAddress = ref(null)

  // Логируем адреса контракта из переменных окружения для отладки
  console.log('[useTokenBalances] Переменные окружения:')
  console.log('  - VITE_WORK_TOKEN_ADDRESS:', workTokenAddress)

  // Проверяем, что адрес контракта настроен
  // paidTokenAddress может быть null, он будет получен динамически из контракта
  const isConfigured = computed(() => {
    const configured = !!workTokenAddress
    console.log('[useTokenBalances] isConfigured:', configured)
    return configured
  })

  // Функция для получения баланса ERC20 токена
  const getERC20Balance = async (tokenAddress, userAddress) => {
    try {
      const balance = await debouncedReadContract(wagmiConfig, {
        address: tokenAddress,
        abi: erc20Abi,
        functionName: 'balanceOf',
        args: [userAddress]
      })
      return balance
    } catch (err) {
      console.error(`[useTokenBalances] Ошибка получения баланса токена ${tokenAddress}:`, safeLogError(err))
      throw err
    }
  }

  // Функция для получения разблокированного баланса ERC20 токена (unlockedBalanceOf)
  const getUnlockedBalance = async (tokenAddress, userAddress) => {
    try {
      const balance = await debouncedReadContract(wagmiConfig, {
        address: tokenAddress,
        abi: erc20Abi,
        functionName: 'unlockedBalanceOf',
        args: [userAddress]
      })
      return balance
    } catch (err) {
      console.error(`[useTokenBalances] Ошибка получения разблокированного баланса токена ${tokenAddress}:`, safeLogError(err))
      throw err
    }
  }

  // Функция для получения адреса PAID токена из Diamond контракта
  const getPaidTokenAddress = async () => {
    try {
      const address = await debouncedReadContract(wagmiConfig, {
        address: workTokenAddress,
        abi: cxbtAbi,
        functionName: 'getPaidToken'
      })
      return address
    } catch (err) {
      console.error('[useTokenBalances] Ошибка получения адреса PAID токена:', safeLogError(err))
      throw err
    }
  }

  // Функция для получения балансов из Diamond контракта
  const getDiamondBalances = async (userAddress) => {
    try {
      console.log('[useTokenBalances] Вызываем getTokenBalances из Diamond контракта')
      console.log('  - workTokenAddress:', workTokenAddress)
      console.log('  - userAddress:', userAddress)
      
      const balances = await debouncedReadContract(wagmiConfig, {
        address: workTokenAddress,
        abi: diamondAbi,
        functionName: 'getTokenBalances',
        args: [userAddress]
      })
      
      console.log('[useTokenBalances] Результат getTokenBalances:', safeLogObject(balances))
      console.log('  - Тип результата:', Array.isArray(balances) ? 'Array' : typeof balances)
      
      // Обработка случая, когда возвращается массив вместо объекта
      let normalizedBalances
      if (Array.isArray(balances)) {
        console.log('[useTokenBalances] Результат - массив, преобразуем в объект')
        normalizedBalances = {
          unlocked: balances[0] || 0n,
          locked: balances[1] || 0n,
          total: balances[2] || 0n
        }
      } else {
        normalizedBalances = balances
      }
      
      console.log('[useTokenBalances] Нормализованные балансы:')
      console.log('  - unlocked:', normalizedBalances?.unlocked?.toString())
      console.log('  - locked:', normalizedBalances?.locked?.toString())
      console.log('  - total:', normalizedBalances?.total?.toString())
      
      return normalizedBalances
    } catch (err) {
      console.error('[useTokenBalances] Ошибка получения балансов из Diamond:', safeLogError(err))
      console.error('[useTokenBalances] Stack trace:', err.stack)
      throw err
    }
  }

  /**
   * Функция для получения метаданных токена (name, symbol и decimals)
   * @param {string} tokenAddress - Адрес контракта токена
   * @returns {Promise<{name: string, symbol: string, decimals: number}>} Метаданные токена
   */
  const fetchTokenMetadata = async (tokenAddress) => {
    try {
      console.log(`[useTokenBalances] fetchTokenMetadata вызван для адреса:`, tokenAddress)
      const [name, symbol, decimals] = await Promise.all([
        debouncedReadContract(wagmiConfig, {
          address: tokenAddress,
          abi: erc20Abi,
          functionName: 'name'
        }),
        debouncedReadContract(wagmiConfig, {
          address: tokenAddress,
          abi: erc20Abi,
          functionName: 'symbol'
        }),
        debouncedReadContract(wagmiConfig, {
          address: tokenAddress,
          abi: erc20Abi,
          functionName: 'decimals'
        })
      ])
      console.log(`[useTokenBalances] Получены метаданные для ${tokenAddress}:`)
      console.log('  - name:', name)
      console.log('  - symbol:', symbol)
      console.log('  - decimals:', decimals)
      return { name, symbol, decimals }
    } catch (err) {
      console.error(`[useTokenBalances] Ошибка получения метаданных токена ${tokenAddress}:`, safeLogError(err))
      throw err
    }
  }

  /**
   * Функция для принудительного обновления всех балансов
   * @param {boolean} force - Принудительное обновление, игнорируя кэш
   */
  const fetchBalances = async (force = false) => {
    // Получаем текущее значение адреса
    const currentAddress = typeof address === 'function' ? address() : address.value

    // Отладочное логирование
    fetchBalancesCallCount++
    const now = Date.now()
    const timeSinceLastFetch = lastFetchBalancesTime ? now - lastFetchBalancesTime : 0
    lastFetchBalancesTime = now
    
    console.log('[useTokenBalances] fetchBalances вызван')
    console.log('[useTokenBalances] Номер вызова:', fetchBalancesCallCount)
    console.log('[useTokenBalances] Время с последнего вызова:', timeSinceLastFetch, 'ms')
    console.log('[useTokenBalances] currentAddress:', currentAddress)
    console.log('[useTokenBalances] isConfigured.value:', isConfigured.value)
    console.log('[useTokenBalances] isFetching.value:', isFetching.value)
    console.log('[useTokenBalances] isLoading.value:', isLoading.value)
    
    // Проверяем кэш, если не принудительное обновление
    if (!force) {
      const cached = getCachedBalances(currentAddress)
      if (cached) {
        console.log('[useTokenBalances] 📦 Используем кэшированные данные (вызов #' + fetchBalancesCallCount + ')')
        paidBalance.value = cached.paidBalance
        workBalance.value = cached.workBalance
        lockedTokens.value = cached.lockedTokens
        paidTokenName.value = cached.paidTokenName
        paidTokenSymbol.value = cached.paidTokenSymbol
        workTokenName.value = cached.workTokenName
        workTokenSymbol.value = cached.workTokenSymbol
        paidDecimals.value = cached.paidDecimals
        workDecimals.value = cached.workDecimals
        error.value = null
        criticalError.value = null
        return
      }
    }
    
    // Предотвращаем параллельные вызовы
    if (isFetching.value) {
      console.warn('[useTokenBalances] ⚠️ ПРЕДУПРЕЖДЕНИЕ: fetchBalances уже выполняется, пропускаем вызов #', fetchBalancesCallCount)
      return
    }

    // Если адрес не задан или контракты не настроены, выходим
    if (!currentAddress || !isConfigured.value) {
      if (!isConfigured.value) {
        console.warn('[useTokenBalances] Адреса контрактов не настроены. Проверьте переменные окружения:')
        console.warn('  - VITE_WORK_TOKEN_ADDRESS')
        console.warn('  - VITE_DIAMOND_ADDRESS')
      }
      return
    }

    isFetching.value = true
    isLoading.value = true
    error.value = null
    
    console.log('[useTokenBalances] 🚀 Начинаем загрузку балансов (вызов #' + fetchBalancesCallCount + ')')

    try {
      console.log('[useTokenBalances] Начинаем получать балансы и метаданные...')
      
      // Получаем адрес PAID токена из контракта WORK токена
      if (!paidTokenAddress.value) {
        try {
          paidTokenAddress.value = await getPaidTokenAddress()
          console.log('[useTokenBalances] Получен адрес PAID токена из контракта:', paidTokenAddress.value)
        } catch (err) {
          console.error('[useTokenBalances] Не удалось получить адрес PAID токена из контракта:', err)
          throw err
        }
      }

      // Логируем адрес контракта для диагностики
      console.log('[useTokenBalances] Используемый адрес контракта:')
      console.log('  - workTokenAddress:', workTokenAddress)
      console.log('  - paidTokenAddress:', paidTokenAddress.value)
      
      // Параллельно получаем все балансы и метаданные токенов
      // Используем workTokenAddress для всех чтений из контракта
      const [paid, work, diamondBalances] = await Promise.all([
        getERC20Balance(paidTokenAddress.value, currentAddress),
        getUnlockedBalance(workTokenAddress, currentAddress),
        getDiamondBalances(currentAddress)
      ])

      console.log('[useTokenBalances] Результаты readContract:')
      console.log('  - paidBalance:', paid?.toString())
      console.log('  - workBalance:', work?.toString())
      console.log('  - diamondBalances:', safeLogObject(diamondBalances))
      console.log('  - diamondBalances.locked:', diamondBalances?.locked?.toString())
      console.log('  - diamondBalances.unlocked:', diamondBalances?.unlocked?.toString())
      console.log('  - diamondBalances.total:', diamondBalances?.total?.toString())

      // Получаем метаданные токенов отдельно с обработкой ошибок для каждого токена
      let paidMetadata = { name: '', symbol: '', decimals: 18 }
      let workMetadata = { name: '', symbol: '', decimals: 18 }
      
      try {
        paidMetadata = await fetchTokenMetadata(paidTokenAddress.value)
      } catch (err) {
        console.error('[useTokenBalances] Не удалось получить метаданные PAID токена:', safeLogError(err))
        criticalError.value = err
        return
      }
      
      try {
        workMetadata = await fetchTokenMetadata(workTokenAddress)
      } catch (err) {
        console.error('[useTokenBalances] Не удалось получить метаданные WORK токена:', safeLogError(err))
        criticalError.value = err
        return
      }

      console.log('  - paidMetadata:', paidMetadata)
      console.log('  - workMetadata:', workMetadata)

      // Обновляем реактивные значения с проверкой на undefined
      paidBalance.value = paid
      // Используем баланс из Diamond контракта, так как он является источником истины
      // getUnlockedBalance может возвращать устаревшее значение
      workBalance.value = diamondBalances?.unlocked !== undefined ? diamondBalances.unlocked : work
      // Проверяем, что diamondBalances.locked существует и не undefined
      lockedTokens.value = diamondBalances?.locked !== undefined ? diamondBalances.locked : null
      paidTokenName.value = paidMetadata.name
      paidTokenSymbol.value = paidMetadata.symbol
      paidDecimals.value = paidMetadata.decimals
      workTokenName.value = workMetadata.name
      workTokenSymbol.value = workMetadata.symbol
      workDecimals.value = workMetadata.decimals

      console.log('[useTokenBalances] Балансы успешно обновлены:', safeLogObject({
        paid: paid.toString(),
        work: work.toString(),
        locked: lockedTokens.value.toString(),
        paidTokenName: paidMetadata.name,
        paidTokenSymbol: paidMetadata.symbol,
        paidDecimals: paidMetadata.decimals,
        workTokenName: workMetadata.name,
        workTokenSymbol: workMetadata.symbol,
        workDecimals: workMetadata.decimals
      }))
    } catch (err) {
      error.value = err
      criticalError.value = err
      console.error('[useTokenBalances] ❌ Ошибка при получении балансов:', safeLogError(err))
      console.error('[useTokenBalances] Stack trace:', err.stack)
    } finally {
      isFetching.value = false
      isLoading.value = false
      console.log('[useTokenBalances] ✅ Завершена загрузка балансов (вызов #' + fetchBalancesCallCount + ')')
    }
    
    // Сохраняем успешный результат в кэш
    if (!error.value && !criticalError.value) {
      setCachedBalances(currentAddress, {
        paidBalance: paidBalance.value,
        workBalance: workBalance.value,
        lockedTokens: lockedTokens.value,
        paidTokenName: paidTokenName.value,
        paidTokenSymbol: paidTokenSymbol.value,
        workTokenName: workTokenName.value,
        workTokenSymbol: workTokenSymbol.value,
        paidDecimals: paidDecimals.value,
        workDecimals: workDecimals.value
      })
    }
  }

  // Debounced версия fetchBalances для предотвращения множественных быстрых вызовов
  const debouncedFetchBalances = debounce(fetchBalances, 500)
  
  // Следим за изменением адреса и автоматически обновляем балансы
  watch(
    () => (typeof address === 'function' ? address() : address.value),
    (newAddress, oldAddress) => {
      console.log('[useTokenBalances] 👁️ Watch сработал')
      console.log('[useTokenBalances]   newAddress:', newAddress)
      console.log('[useTokenBalances]   oldAddress:', oldAddress)
      console.log('[useTokenBalances]   isConfigured.value:', isConfigured.value)
      console.log('[useTokenBalances]   isFetching.value:', isFetching.value)
      
      if (newAddress && isConfigured.value) {
        console.log('[useTokenBalances]   → Вызываем debouncedFetchBalances()')
        debouncedFetchBalances()
      } else {
        console.log('[useTokenBalances]   → Пропускаем fetchBalances - newAddress или isConfigured отсутствуют')
      }
    },
    { immediate: true }
  )

  // Следим за изменением адреса и очищаем кэш при отключении
  watch(
    () => (typeof address === 'function' ? address() : address.value),
    (newAddress, oldAddress) => {
      if (!newAddress && oldAddress) {
        console.log('[useTokenBalances] Кошелёк отключён, очищаем кэш для:', oldAddress)
        clearCachedBalances(oldAddress)
      }
    }
  )
  
  // Возвращаем реактивные значения и функции
  return {
    paidBalance,
    workBalance,
    lockedTokens,
    paidTokenName,
    paidTokenSymbol,
    workTokenName,
    workTokenSymbol,
    paidDecimals,
    workDecimals,
    isLoading,
    error,
    criticalError,
    fetchBalances,
    isConfigured,
    isFetching,
    clearCachedBalances
  }
}
