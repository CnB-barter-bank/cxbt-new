import { ref, computed, watch } from 'vue'
import { readContract } from '@wagmi/core'
import { wagmiConfig } from './useWalletConnect'

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
export function useTokenBalances(address) {
  console.log('[useTokenBalances] Инициализация composable')
  console.log('[useTokenBalances] Параметр address:', address)
  console.log('[useTokenBalances] Тип address:', typeof address)
  
  // Реактивные состояния
  const paidBalance = ref(0n)
  const workBalance = ref(0n)
  const lockedTokens = ref(0n)
  const paidTokenName = ref('')
  const paidTokenSymbol = ref('')
  const workTokenName = ref('')
  const workTokenSymbol = ref('')
  const paidDecimals = ref(18) // Дефолтное значение decimals
  const workDecimals = ref(18) // Дефолтное значение decimals
  const isLoading = ref(false)
  const error = ref(null)

  // Получаем адреса контрактов из переменных окружения
  const workTokenAddress = import.meta.env.VITE_WORK_TOKEN_ADDRESS
  const diamondAddress = import.meta.env.VITE_DIAMOND_ADDRESS
  const paidTokenAddress = ref(null)

  // Логируем адреса контрактов из переменных окружения для отладки
  console.log('[useTokenBalances] Переменные окружения:')
  console.log('  - VITE_WORK_TOKEN_ADDRESS:', workTokenAddress)
  console.log('  - VITE_DIAMOND_ADDRESS:', diamondAddress)

  // Проверяем, что все адреса контрактов настроены
  // paidTokenAddress может быть null, он будет получен динамически из контракта
  const isConfigured = computed(() => {
    const configured = !!workTokenAddress && !!diamondAddress
    console.log('[useTokenBalances] isConfigured:', configured)
    return configured
  })

  // Функция для получения баланса ERC20 токена
  const getERC20Balance = async (tokenAddress, userAddress) => {
    try {
      const balance = await readContract(wagmiConfig, {
        address: tokenAddress,
        abi: erc20Abi,
        functionName: 'balanceOf',
        args: [userAddress]
      })
      return balance
    } catch (err) {
      console.error(`[useTokenBalances] Ошибка получения баланса токена ${tokenAddress}:`, err)
      throw err
    }
  }

  // Функция для получения разблокированного баланса ERC20 токена (unlockedBalanceOf)
  const getUnlockedBalance = async (tokenAddress, userAddress) => {
    try {
      const balance = await readContract(wagmiConfig, {
        address: tokenAddress,
        abi: erc20Abi,
        functionName: 'unlockedBalanceOf',
        args: [userAddress]
      })
      return balance
    } catch (err) {
      console.error(`[useTokenBalances] Ошибка получения разблокированного баланса токена ${tokenAddress}:`, err)
      throw err
    }
  }

  // Функция для получения адреса PAID токена из Diamond контракта
  const getPaidTokenAddress = async () => {
    try {
      const address = await readContract(wagmiConfig, {
        address: workTokenAddress,
        abi: cxbtAbi,
        functionName: 'getPaidToken'
      })
      return address
    } catch (err) {
      console.error('[useTokenBalances] Ошибка получения адреса PAID токена:', err)
      throw err
    }
  }

  // Функция для получения балансов из Diamond контракта
  const getDiamondBalances = async (userAddress) => {
    try {
      console.log('[useTokenBalances] Вызываем getTokenBalances из Diamond контракта')
      console.log('  - workTokenAddress:', workTokenAddress)
      console.log('  - userAddress:', userAddress)
      
      const balances = await readContract(wagmiConfig, {
        address: workTokenAddress,
        abi: diamondAbi,
        functionName: 'getTokenBalances',
        args: [userAddress]
      })
      
      console.log('[useTokenBalances] Результат getTokenBalances:', balances)
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
      console.error('[useTokenBalances] Ошибка получения балансов из Diamond:', err)
      console.error('[useTokenBalances] Stack trace:', err.stack)
      // Возвращаем объект с дефолтными значениями вместо выброса ошибки
      return { unlocked: 0n, locked: 0n, total: 0n }
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
        readContract(wagmiConfig, {
          address: tokenAddress,
          abi: erc20Abi,
          functionName: 'name'
        }),
        readContract(wagmiConfig, {
          address: tokenAddress,
          abi: erc20Abi,
          functionName: 'symbol'
        }),
        readContract(wagmiConfig, {
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
      console.error(`[useTokenBalances] Ошибка получения метаданных токена ${tokenAddress}:`, err)
      throw err
    }
  }

  /**
   * Функция для принудительного обновления всех балансов
   */
  const fetchBalances = async () => {
    // Получаем текущее значение адреса
    const currentAddress = typeof address === 'function' ? address() : address.value

    console.log('[useTokenBalances] fetchBalances вызван')
    console.log('[useTokenBalances] currentAddress:', currentAddress)
    console.log('[useTokenBalances] isConfigured.value:', isConfigured.value)

    // Если адрес не задан или контракты не настроены, выходим
    if (!currentAddress || !isConfigured.value) {
      if (!isConfigured.value) {
        console.warn('[useTokenBalances] Адреса контрактов не настроены. Проверьте переменные окружения:')
        console.warn('  - VITE_WORK_TOKEN_ADDRESS')
        console.warn('  - VITE_DIAMOND_ADDRESS')
      }
      return
    }

    isLoading.value = true
    error.value = null

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

      // Логируем адреса контрактов для диагностики
      console.log('[useTokenBalances] Используемые адреса контрактов:')
      console.log('  - workTokenAddress:', workTokenAddress)
      console.log('  - diamondAddress:', diamondAddress)
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
      console.log('  - diamondBalances:', diamondBalances)
      console.log('  - diamondBalances.locked:', diamondBalances?.locked)
      console.log('  - diamondBalances.unlocked:', diamondBalances?.unlocked)
      console.log('  - diamondBalances.total:', diamondBalances?.total)

      // Получаем метаданные токенов отдельно с обработкой ошибок для каждого токена
      let paidMetadata = { name: '', symbol: '', decimals: 18 }
      let workMetadata = { name: '', symbol: '', decimals: 18 }
      
      try {
        paidMetadata = await fetchTokenMetadata(paidTokenAddress.value)
      } catch (err) {
        console.error('[useTokenBalances] Не удалось получить метаданные PAID токена:', err)
        paidMetadata = { name: 'PAID', symbol: 'PAID', decimals: 18 }
      }
      
      try {
        workMetadata = await fetchTokenMetadata(workTokenAddress)
      } catch (err) {
        console.error('[useTokenBalances] Не удалось получить метаданные WORK токена:', err)
        workMetadata = { name: 'CXBT', symbol: 'CXBT', decimals: 18 }
      }

      console.log('  - paidMetadata:', paidMetadata)
      console.log('  - workMetadata:', workMetadata)

      // Обновляем реактивные значения с проверкой на undefined
      paidBalance.value = paid
      workBalance.value = work
      // Проверяем, что diamondBalances.locked существует и не undefined
      lockedTokens.value = diamondBalances?.locked !== undefined ? diamondBalances.locked : 0n
      paidTokenName.value = paidMetadata.name
      paidTokenSymbol.value = paidMetadata.symbol
      paidDecimals.value = paidMetadata.decimals
      workTokenName.value = workMetadata.name
      workTokenSymbol.value = workMetadata.symbol
      workDecimals.value = workMetadata.decimals

      console.log('[useTokenBalances] Балансы успешно обновлены:', {
        paid: paid.toString(),
        work: work.toString(),
        locked: lockedTokens.value.toString(),
        paidTokenName: paidMetadata.name,
        paidTokenSymbol: paidMetadata.symbol,
        paidDecimals: paidMetadata.decimals,
        workTokenName: workMetadata.name,
        workTokenSymbol: workMetadata.symbol,
        workDecimals: workMetadata.decimals
      })
    } catch (err) {
      error.value = err
      console.error('[useTokenBalances] Ошибка при получении балансов:', err)
      console.error('[useTokenBalances] Stack trace:', err.stack)
    } finally {
      isLoading.value = false
    }
  }

  // Следим за изменением адреса и автоматически обновляем балансы
  watch(
    () => (typeof address === 'function' ? address() : address.value),
    (newAddress) => {
      console.log('[useTokenBalances] Watch сработал, newAddress:', newAddress)
      console.log('[useTokenBalances] isConfigured.value:', isConfigured.value)
      if (newAddress && isConfigured.value) {
        console.log('[useTokenBalances] Вызываем fetchBalances()')
        fetchBalances()
      } else {
        console.log('[useTokenBalances] Пропускаем fetchBalances - newAddress или isConfigured отсутствуют')
      }
    },
    { immediate: true }
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
    fetchBalances,
    isConfigured
  }
}
