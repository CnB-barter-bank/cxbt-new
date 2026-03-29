import { ref, computed } from 'vue'
import { readContract, writeContract, simulateContract } from '@wagmi/core'
import { wagmiConfig } from './useWalletConnect'
import { Notify } from 'quasar'

/**
 * Безопасно логирует объект ошибки, конвертируя BigInt в строки
 * @param {Error} err - Объект ошибки
 * @returns {Object} Объект для логирования без BigInt
 */
const safeLogError = (err) => {
  return {
    name: err.name,
    message: err.message,
    code: err.code,
    cause: err.cause ? safeLogError(err.cause) : undefined,
    data: err.data ? JSON.stringify(err.data, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value
    ) : undefined
  }
}

// ABI для CXBT контракта (функции разблокировки)
const cxbtAbi = [
  {
    inputs: [],
    name: 'getUnlockPercentage',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ name: 'unlockAmount', type: 'uint256' }],
    name: 'calculateUnlockCost',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ name: 'unlockAmount', type: 'uint256' }],
    name: 'unlockTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'getPaidToken',
    outputs: [{ name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  }
]

// ABI для ERC20 токена (функция approve)
const erc20Abi = [
  {
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' }
    ],
    name: 'approve',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' }
    ],
    name: 'allowance',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function'
  }
]

// Константа для максимального аппрува (2^256 - 1)
const MAX_UINT256 = 2n ** 256n - 1n

/**
 * Composable для работы с функциями разблокировки токенов CXBT
 * @returns {Object} Объект с реактивными значениями и функциями
 */
export function useTokenUnlock() {
  console.log('[useTokenUnlock] Инициализация composable')

  // Реактивные состояния
  const isLoading = ref(false)
  const isApproving = ref(false)
  const isUnlocking = ref(false)
  const error = ref(null)
  const unlockPercentage = ref(0n)
  const paidTokenAddress = ref(null)

  // Получаем адрес контракта CXBT из переменных окружения
  const cxbtAddress = import.meta.env.VITE_DIAMOND_ADDRESS

  // Проверяем, что адрес контракта настроен
  const isConfigured = computed(() => {
    const configured = !!cxbtAddress
    console.log('[useTokenUnlock] isConfigured:', configured)
    return configured
  })

  /**
   * Получает процент разблокировки из контракта CXBT
   * @returns {Promise<bigint>} Процент разблокировки в базисных пунктах (10000 = 100%)
   */
  const getUnlockPercentage = async () => {
    console.log('[useTokenUnlock] getUnlockPercentage вызван')

    if (!isConfigured.value) {
      const errorMsg = 'Адрес контракта CXBT не настроен. Проверьте переменную VITE_DIAMOND_ADDRESS'
      console.error('[useTokenUnlock]', errorMsg)
      error.value = errorMsg
      return 0n
    }

    isLoading.value = true
    error.value = null

    try {
      console.log('[useTokenUnlock] Вызываем getUnlockPercentage из контракта:', cxbtAddress)
      
      const percentage = await readContract(wagmiConfig, {
        address: cxbtAddress,
        abi: cxbtAbi,
        functionName: 'getUnlockPercentage'
      })
      
      console.log('[useTokenUnlock] Результат getUnlockPercentage:', percentage?.toString())
      unlockPercentage.value = percentage || 0n
      
      return percentage
    } catch (err) {
      console.error('[useTokenUnlock] Ошибка получения процента разблокировки:', safeLogError(err))
      error.value = `Ошибка получения процента разблокировки: ${err.message}`
      throw err
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Рассчитывает стоимость разблокировки токенов
   * @param {bigint} unlockAmount - Количество токенов для разблокировки
   * @returns {Promise<bigint>} Стоимость в PAID токенах
   */
  const calculateUnlockCost = async (unlockAmount) => {
    console.log('[useTokenUnlock] calculateUnlockCost вызван с unlockAmount:', unlockAmount?.toString())

    if (!isConfigured.value) {
      const errorMsg = 'Адрес контракта CXBT не настроен. Проверьте переменную VITE_DIAMOND_ADDRESS'
      console.error('[useTokenUnlock]', errorMsg)
      error.value = errorMsg
      return 0n
    }

    if (!unlockAmount || unlockAmount <= 0n) {
      const errorMsg = 'Количество токенов для разблокировки должно быть больше 0'
      console.error('[useTokenUnlock]', errorMsg)
      error.value = errorMsg
      return 0n
    }

    isLoading.value = true
    error.value = null

    try {
      console.log('[useTokenUnlock] Вызываем calculateUnlockCost из контракта:', cxbtAddress)
      
      const cost = await readContract(wagmiConfig, {
        address: cxbtAddress,
        abi: cxbtAbi,
        functionName: 'calculateUnlockCost',
        args: [unlockAmount]
      })
      
      console.log('[useTokenUnlock] Результат calculateUnlockCost:', cost?.toString())
      
      return cost
    } catch (err) {
      console.error('[useTokenUnlock] Ошибка расчёта стоимости разблокировки:', safeLogError(err))
      error.value = `Ошибка расчёта стоимости разблокировки: ${err.message}`
      throw err
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Получает адрес PAID токена из контракта CXBT
   * @returns {Promise<string>} Адрес PAID токена
   */
  const getPaidTokenAddress = async () => {
    console.log('[useTokenUnlock] getPaidTokenAddress вызван')

    if (!isConfigured.value) {
      const errorMsg = 'Адрес контракта CXBT не настроен. Проверьте переменную VITE_DIAMOND_ADDRESS'
      console.error('[useTokenUnlock]', errorMsg)
      error.value = errorMsg
      return null
    }

    try {
      console.log('[useTokenUnlock] Вызываем getPaidToken из контракта:', cxbtAddress)
      
      const address = await readContract(wagmiConfig, {
        address: cxbtAddress,
        abi: cxbtAbi,
        functionName: 'getPaidToken'
      })
      
      console.log('[useTokenUnlock] Результат getPaidToken:', address)
      paidTokenAddress.value = address
      
      return address
    } catch (err) {
      console.error('[useTokenUnlock] Ошибка получения адреса PAID токена:', safeLogError(err))
      error.value = `Ошибка получения адреса PAID токена: ${err.message}`
      throw err
    }
  }

  /**
   * Проверяет текущий аппрув PAID токенов для контракта CXBT
   * @param {string} ownerAddress - Адрес владельца токенов
   * @returns {Promise<bigint>} Текущий аппрув
   */
  const checkAllowance = async (ownerAddress) => {
    console.log('[useTokenUnlock] checkAllowance вызван для owner:', ownerAddress)

    if (!ownerAddress) {
      const errorMsg = 'Адрес владельца не указан'
      console.error('[useTokenUnlock]', errorMsg)
      error.value = errorMsg
      return 0n
    }

    const tokenAddress = paidTokenAddress.value || await getPaidTokenAddress()
    
    if (!tokenAddress) {
      const errorMsg = 'Не удалось получить адрес PAID токена'
      console.error('[useTokenUnlock]', errorMsg)
      error.value = errorMsg
      return 0n
    }

    try {
      console.log('[useTokenUnlock] Проверяем allowance для:', ownerAddress, 'spender:', cxbtAddress)
      
      const allowance = await readContract(wagmiConfig, {
        address: tokenAddress,
        abi: erc20Abi,
        functionName: 'allowance',
        args: [ownerAddress, cxbtAddress]
      })
      
      console.log('[useTokenUnlock] Текущий allowance:', allowance?.toString())
      
      return allowance
    } catch (err) {
      console.error('[useTokenUnlock] Ошибка проверки allowance:', safeLogError(err))
      error.value = `Ошибка проверки allowance: ${err.message}`
      throw err
    }
  }

  /**
   * Аппрувит PAID токены для контракта CXBT
   * @param {bigint} amount - Количество токенов для аппрува (по умолчанию MAX_UINT256)
   * @returns {Promise<import('@wagmi/core').Hash>} Хеш транзакции аппрува
   */
  const approvePaidTokens = async (amount = MAX_UINT256) => {
    console.log('[useTokenUnlock] approvePaidTokens вызван с amount:', amount?.toString())

    const tokenAddress = paidTokenAddress.value || await getPaidTokenAddress()
    
    if (!tokenAddress) {
      const errorMsg = 'Не удалось получить адрес PAID токена'
      console.error('[useTokenUnlock]', errorMsg)
      error.value = errorMsg
      throw new Error(errorMsg)
    }

    isApproving.value = true
    error.value = null

    try {
      console.log('[useTokenUnlock] Симуляция approve транзакции...')
      
      // Симулируем транзакцию перед отправкой
      const { request } = await simulateContract(wagmiConfig, {
        address: tokenAddress,
        abi: erc20Abi,
        functionName: 'approve',
        args: [cxbtAddress, amount]
      })
      
      console.log('[useTokenUnlock] Отправка approve транзакции...')
      
      const hash = await writeContract(wagmiConfig, request)
      
      console.log('[useTokenUnlock] Approve транзакция отправлена, hash:', hash)
      
      Notify.create({
        type: 'positive',
        message: 'Транзакция аппрува отправлена',
        caption: 'Подождите подтверждения в сети',
        timeout: 3000
      })
      
      return hash
    } catch (err) {
      console.error('[useTokenUnlock] Ошибка аппрува PAID токенов:', safeLogError(err))
      
      // Проверяем, отменил ли пользователь транзакцию (код 4001)
      if (err.code === 4001 || (err.message && err.message.toLowerCase().includes('user rejected'))) {
        console.log('[useTokenUnlock] Пользователь отменил транзакцию аппрува')
        error.value = 'Транзакция отменена пользователем'
        
        Notify.create({
          type: 'info',
          message: 'Транзакция отменена',
          caption: 'Вы отклонили транзакцию в кошельке',
          timeout: 3000
        })
        
        throw err
      }
      
      error.value = `Ошибка аппрува PAID токенов: ${err.message}`
      
      Notify.create({
        type: 'negative',
        message: 'Ошибка аппрува',
        caption: err.message,
        timeout: 5000
      })
      
      throw err
    } finally {
      isApproving.value = false
    }
  }

  /**
   * Разблокирует токены CXBT
   * @param {bigint} unlockAmount - Количество токенов для разблокировки
   * @returns {Promise<import('@wagmi/core').Hash>} Хеш транзакции разблокировки
   */
  const unlockTokens = async (unlockAmount) => {
    console.log('[useTokenUnlock] unlockTokens вызван с unlockAmount:', unlockAmount?.toString())

    if (!isConfigured.value) {
      const errorMsg = 'Адрес контракта CXBT не настроен. Проверьте переменную VITE_DIAMOND_ADDRESS'
      console.error('[useTokenUnlock]', errorMsg)
      error.value = errorMsg
      throw new Error(errorMsg)
    }

    if (!unlockAmount || unlockAmount <= 0n) {
      const errorMsg = 'Количество токенов для разблокировки должно быть больше 0'
      console.error('[useTokenUnlock]', errorMsg)
      error.value = errorMsg
      throw new Error(errorMsg)
    }

    isUnlocking.value = true
    error.value = null

    try {
      console.log('[useTokenUnlock] Симуляция unlockTokens транзакции...')
      
      // Симулируем транзакцию перед отправкой
      const { request } = await simulateContract(wagmiConfig, {
        address: cxbtAddress,
        abi: cxbtAbi,
        functionName: 'unlockTokens',
        args: [unlockAmount]
      })
      
      console.log('[useTokenUnlock] Отправка unlockTokens транзакции...')
      
      const hash = await writeContract(wagmiConfig, request)
      
      console.log('[useTokenUnlock] Разблокировка токенов отправлена, hash:', hash)
      
      Notify.create({
        type: 'positive',
        message: 'Транзакция разблокировки отправлена',
        caption: 'Подождите подтверждения в сети',
        timeout: 3000
      })
      
      return hash
    } catch (err) {
      console.error('[useTokenUnlock] Ошибка разблокировки токенов:', safeLogError(err))
      
      // Проверяем, отменил ли пользователь транзакцию (код 4001)
      if (err.code === 4001 || (err.message && err.message.toLowerCase().includes('user rejected'))) {
        console.log('[useTokenUnlock] Пользователь отменил транзакцию разблокировки')
        error.value = 'Транзакция отменена пользователем'
        
        Notify.create({
          type: 'info',
          message: 'Транзакция отменена',
          caption: 'Вы отклонили транзакцию в кошельке',
          timeout: 3000
        })
        
        throw err
      }
      
      error.value = `Ошибка разблокировки токенов: ${err.message}`
      
      Notify.create({
        type: 'negative',
        message: 'Ошибка разблокировки',
        caption: err.message,
        timeout: 5000
      })
      
      throw err
    } finally {
      isUnlocking.value = false
    }
  }

  /**
   * Полный процесс разблокировки токенов с проверкой и аппрувом
   * @param {bigint} unlockAmount - Количество токенов для разблокировки
   * @param {string} ownerAddress - Адрес владельца токенов
   * @returns {Promise<import('@wagmi/core').Hash>} Хеш транзакции разблокировки
   */
  const unlockTokensWithApproval = async (unlockAmount, ownerAddress) => {
    console.log('[useTokenUnlock] unlockTokensWithApproval вызван')
    console.log('  - unlockAmount:', unlockAmount?.toString())
    console.log('  - ownerAddress:', ownerAddress)

    // Рассчитываем стоимость разблокировки
    const cost = await calculateUnlockCost(unlockAmount)
    console.log('[useTokenUnlock] Стоимость разблокировки:', cost?.toString())

    // Проверяем текущий аппрув
    const currentAllowance = await checkAllowance(ownerAddress)
    console.log('[useTokenUnlock] Текущий аппрув:', currentAllowance?.toString())

    // Если аппрува недостаточно, делаем аппрув
    if (currentAllowance < cost) {
      console.log('[useTokenUnlock] Аппрув недостаточен, делаем новый аппрув...')
      await approvePaidTokens(MAX_UINT256)
      
      // Даём время для подтверждения аппрува
      await new Promise(resolve => setTimeout(resolve, 2000))
    }

    // Разблокируем токены
    return await unlockTokens(unlockAmount)
  }

  return {
    // Состояния
    isLoading,
    isApproving,
    isUnlocking,
    error,
    unlockPercentage,
    paidTokenAddress,
    isConfigured,
    
    // Функции
    getUnlockPercentage,
    calculateUnlockCost,
    getPaidTokenAddress,
    checkAllowance,
    approvePaidTokens,
    unlockTokens,
    unlockTokensWithApproval
  }
}
