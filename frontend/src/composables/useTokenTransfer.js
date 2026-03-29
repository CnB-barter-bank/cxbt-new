import { writeContract } from '@wagmi/core'
import { wagmiConfig } from './useWalletConnect'

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

// ABI для ERC20 токена (функция transfer)
const erc20TransferAbi = [
  {
    inputs: [
      { internalType: 'address', name: 'to', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'transfer',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    type: 'function'
  }
]

/**
 * Composable для перевода WORK токенов
 * @returns {Object} Объект с функциями перевода
 */
export function useTokenTransfer() {
  console.log('[useTokenTransfer] Инициализация composable')

  // Получаем адрес контракта WORK токена из переменных окружения
  const workTokenAddress = import.meta.env.VITE_WORK_TOKEN_ADDRESS

  console.log('[useTokenTransfer] VITE_WORK_TOKEN_ADDRESS:', workTokenAddress)

  /**
   * Конвертирует сумму токенов в wei (BigInt)
   * @param {number|string} amount - Сумма в токенах
   * @param {number} decimals - Количество decimals (по умолчанию 18)
   * @returns {bigint} Сумма в wei
   */
  const parseTokenAmount = (amount, decimals = 18) => {
    const amountString = typeof amount === 'string' ? amount : amount.toString()
    const [integerPart, fractionalPart = ''] = amountString.split('.')

    // Формируем wei: целая часть * 10^decimals + дробная часть (обрезанная до decimals)
    const wei = BigInt(integerPart) * BigInt(10 ** decimals)

    if (fractionalPart) {
      const paddedFractional = fractionalPart.padEnd(decimals, '0').slice(0, decimals)
      return wei + BigInt(paddedFractional)
    }

    return wei
  }

  /**
   * Переводит CXBT токены на указанный адрес
   * @param {string} recipientAddress - Адрес получателя
   * @param {number|string} amount - Сумма в токенах
   * @param {number} decimals - Количество decimals (по умолчанию 18)
   * @returns {Promise<Object>} Результат транзакции
   * @throws {Error} Если адрес контракта не настроен или произошла ошибка транзакции
   */
  const transferWorkTokens = async (recipientAddress, amount, decimals = 18) => {
    console.log('[useTokenTransfer] transferWorkTokens вызван')
    console.log('[useTokenTransfer] recipientAddress:', recipientAddress)
    console.log('[useTokenTransfer] amount:', amount)
    console.log('[useTokenTransfer] decimals:', decimals)

    // Проверяем, что адрес контракта настроен
    if (!workTokenAddress) {
      const errorMsg = 'Адрес контракта WORK токена не настроен. Проверьте переменную VITE_WORK_TOKEN_ADDRESS'
      console.error('[useTokenTransfer]', errorMsg)
      throw new Error(errorMsg)
    }

    // Проверяем, что адрес получателя указан
    if (!recipientAddress) {
      const errorMsg = 'Адрес получателя не указан'
      console.error('[useTokenTransfer]', errorMsg)
      throw new Error(errorMsg)
    }

    // Проверяем, что сумма указана и больше нуля
    if (amount === undefined || amount === null || amount === '' || Number(amount) <= 0) {
      const errorMsg = 'Сумма перевода должна быть больше нуля'
      console.error('[useTokenTransfer]', errorMsg)
      throw new Error(errorMsg)
    }

    try {
      // Конвертируем сумму в wei
      const amountInWei = parseTokenAmount(amount, decimals)
      console.log('[useTokenTransfer] amountInWei:', amountInWei.toString())

      // Вызываем функцию transfer контракта ERC20
      console.log('[useTokenTransfer] Отправка транзакции transfer...')

      const result = await writeContract(wagmiConfig, {
        address: workTokenAddress,
        abi: erc20TransferAbi,
        functionName: 'transfer',
        args: [recipientAddress, amountInWei]
      })

      console.log('[useTokenTransfer] Транзакция успешно отправлена:', result)
      return result
    } catch (error) {
      console.error('[useTokenTransfer] Ошибка при переводе токенов:', safeLogError(error))
      
      // Проверяем, отменил ли пользователь транзакцию (код 4001)
      if (error.code === 4001 || (error.message && error.message.toLowerCase().includes('user rejected'))) {
        console.log('[useTokenTransfer] Пользователь отменил транзакцию перевода')
        throw new Error('Транзакция отменена пользователем')
      }
      
      throw new Error(`Ошибка при переводе токенов: ${error.message}`)
    }
  }

  return {
    transferWorkTokens
  }
}
