import { ref, computed } from 'vue'
import { ethers } from 'ethers'
import { useWalletStore } from '../stores/wallet'
import { useTokensStore } from '../stores/tokens'
import { CONTRACTS, CXBT_ABI, ERC20_ABI } from '../config/contracts'
import { Notify } from 'quasar'
import { useI18n } from 'vue-i18n'

/**
 * Composable для взаимодействия с контрактами CXBT
 */
export function useContract() {
  const walletStore = useWalletStore()
  const tokensStore = useTokensStore()
  const { t } = useI18n()

  const loading = ref(false)
  const error = ref(null)
  const txHash = ref('')
  const isTransactionPending = ref(false)

  /**
   * Retry функция для view функций
   * @param {Function} fn - функция для выполнения
   * @param {number} maxRetries - максимальное количество попыток
   * @param {number} delay - задержка между попытками в мс
   * @returns {Promise<*>} результат выполнения функции
   */
  const retryWithDelay = async (fn, maxRetries = 3, delay = 1000) => {
    let lastError
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await fn()
      } catch (err) {
        lastError = err
        console.warn(`Attempt ${attempt} failed:`, err.message)

        // Если это последняя попытка, выбрасываем ошибку
        if (attempt === maxRetries) {
          throw lastError
        }

        // Ждем перед следующей попыткой
        await new Promise(resolve => setTimeout(resolve, delay))
      }
    }
    throw lastError
  }

  // Decimals для токенов
  const CXBT_DECIMALS = 6
  const PAID_DECIMALS = 18

  /**
   * Получить экземпляр контракта CXBT
   * @param {boolean} withSigner - использовать signer или только provider
   * @returns {ethers.Contract} экземпляр контракта
   */
  const getCXBTContract = (withSigner = true) => {
    if (!walletStore.provider) {
      throw new Error('Provider не инициализирован. Подключите кошелек.')
    }

    const signerOrProvider = withSigner ? walletStore.signer : walletStore.provider
    return new ethers.Contract(CONTRACTS.CXBT_DIAMOND, CXBT_ABI, signerOrProvider)
  }

  /**
   * Получить экземпляр контракта PAID токена
   * @param {boolean} withSigner - использовать signer или только provider
   * @returns {ethers.Contract} экземпляр контракта
   */
  const getPAIDContract = (withSigner = true) => {
    if (!walletStore.provider) {
      throw new Error('Provider не инициализирован. Подключите кошелек.')
    }

    const signerOrProvider = withSigner ? walletStore.signer : walletStore.provider
    return new ethers.Contract(CONTRACTS.PAID_TOKEN, ERC20_ABI, signerOrProvider)
  }

  /**
   * Получить балансы токенов пользователя
   * @returns {Promise<Object>} объект с балансами
   */
  const fetchBalances = async () => {
    if (!walletStore.address) {
      throw new Error('Кошелек не подключен')
    }

    loading.value = true
    error.value = null

    try {
      return await retryWithDelay(async () => {
        const cxbtContract = getCXBTContract(false)
        const paidContract = getPAIDContract(false)

        // Получаем балансы CXBT
        const balances = await cxbtContract.getTokenBalances(walletStore.address)

        // Получаем баланс PAID
        const paidBalance = await paidContract.balanceOf(walletStore.address)

        // Получаем decimals для PAID
        let paidDecimals = PAID_DECIMALS
        try {
          paidDecimals = await paidContract.decimals()
        } catch {
          paidDecimals = PAID_DECIMALS
        }

        return {
          unlockedBalance: ethers.formatUnits(balances[0], CXBT_DECIMALS),
          lockedBalance: ethers.formatUnits(balances[1], CXBT_DECIMALS),
          totalBalance: ethers.formatUnits(balances[2], CXBT_DECIMALS),
          paidBalance: ethers.formatUnits(paidBalance, paidDecimals)
        }
      })
    } catch (err) {
      console.error('Ошибка получения балансов:', err)
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Получить статус пользователя (whitelist, blacklist, normal)
   * @returns {Promise<string>} статус пользователя
   */
  const fetchUserStatus = async () => {
    if (!walletStore.address) {
      throw new Error('Кошелек не подключен')
    }

    loading.value = true
    error.value = null

    try {
      return await retryWithDelay(async () => {
        const cxbtContract = getCXBTContract(false)

        const [isWhitelisted, isBlacklisted] = await Promise.all([
          cxbtContract.isWhitelisted(walletStore.address),
          cxbtContract.isBlacklisted(walletStore.address)
        ])

        if (isWhitelisted) return 'whitelisted'
        if (isBlacklisted) return 'blacklisted'
        return 'normal'
      })
    } catch (err) {
      console.error('Ошибка получения статуса пользователя:', err)
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Рассчитать стоимость разблокировки токенов
   * @param {string} amount - количество токенов для разблокировки
   * @returns {Promise<string>} стоимость в PAID токенах
   */
  const calculateUnlockCost = async amount => {
    if (!amount || parseFloat(amount) <= 0) {
      throw new Error('Количество должно быть больше 0')
    }

    loading.value = true
    error.value = null

    try {
      return await retryWithDelay(async () => {
        const cxbtContract = getCXBTContract(false)
        const amountWei = ethers.parseUnits(amount, CXBT_DECIMALS)
        const costWei = await cxbtContract.calculateUnlockCost(amountWei)

        // Получаем decimals для PAID
        const paidContract = getPAIDContract(false)
        let paidDecimals = PAID_DECIMALS
        try {
          paidDecimals = await paidContract.decimals()
        } catch {
          paidDecimals = PAID_DECIMALS
        }

        return ethers.formatUnits(costWei, paidDecimals)
      })
    } catch (err) {
      console.error('Ошибка расчёта стоимости разблокировки:', err)
      error.value = err.message
      throw err
    } finally {
      loading.value = false
    }
  }

  /**
   * Разблокировать токены
   * @param {string} amount - количество токенов для разблокировки
   * @returns {Promise<string>} хеш транзакции
   */
  const unlockTokens = async amount => {
    if (!walletStore.address) {
      throw new Error('Кошелек не подключен')
    }

    if (!amount || parseFloat(amount) <= 0) {
      throw new Error('Количество должно быть больше 0')
    }

    if (isTransactionPending.value) {
      throw new Error(t('errors.transactionPending'))
    }

    loading.value = true
    error.value = null
    txHash.value = ''
    isTransactionPending.value = true

    try {
      const cxbtContract = getCXBTContract(true)

      // Проверяем paused состояние контракта
      const isPaused = await cxbtContract.paused()
      if (isPaused) {
        throw new Error(t('errors.contractPaused'))
      }

      const amountWei = ethers.parseUnits(amount, CXBT_DECIMALS)

      // Проверяем allowance PAID токенов
      const paidContract = getPAIDContract(false)
      const costWei = await cxbtContract.calculateUnlockCost(amountWei)
      const allowance = await paidContract.allowance(walletStore.address, CONTRACTS.CXBT_DIAMOND)

      if (allowance < costWei) {
        throw new Error(t('errors.insufficientAllowance'))
      }

      const tx = await cxbtContract.unlockTokens(amountWei)
      txHash.value = tx.hash

      Notify.create({
        type: 'positive',
        message: t('notifications.transactionSent'),
        caption: `Hash: ${txHash.value.slice(0, 10)}...${txHash.value.slice(-8)}`,
        timeout: 5000
      })

      await tx.wait()

      Notify.create({
        type: 'positive',
        message: t('notifications.tokensUnlocked'),
        timeout: 3000
      })

      // Обновляем балансы
      await tokensStore.refreshData()

      return txHash.value
    } catch (err) {
      console.error('Ошибка разблокировки токенов:', err)
      error.value = err.message

      Notify.create({
        type: 'negative',
        message: t('unlock.unlockErrorMessage'),
        caption: err.message,
        timeout: 5000
      })

      throw err
    } finally {
      loading.value = false
      isTransactionPending.value = false
    }
  }

  /**
   * Перевести токены
   * @param {string} to - адрес получателя
   * @param {string} amount - количество токенов для перевода
   * @returns {Promise<string>} хеш транзакции
   */
  const transferTokens = async (to, amount) => {
    if (!walletStore.address) {
      throw new Error('Кошелек не подключен')
    }

    if (!to || !ethers.isAddress(to)) {
      throw new Error('Неверный адрес получателя')
    }

    if (!amount || parseFloat(amount) <= 0) {
      throw new Error('Количество должно быть больше 0')
    }

    if (isTransactionPending.value) {
      throw new Error(t('errors.transactionPending'))
    }

    loading.value = true
    error.value = null
    txHash.value = ''
    isTransactionPending.value = true

    try {
      const cxbtContract = getCXBTContract(true)

      // Проверяем paused состояние контракта
      const isPaused = await cxbtContract.paused()
      if (isPaused) {
        throw new Error(t('errors.contractPaused'))
      }

      const amountWei = ethers.parseUnits(amount, CXBT_DECIMALS)

      const tx = await cxbtContract.transfer(to, amountWei)
      txHash.value = tx.hash

      Notify.create({
        type: 'positive',
        message: t('notifications.transactionSent'),
        caption: `Hash: ${txHash.value.slice(0, 10)}...${txHash.value.slice(-8)}`,
        timeout: 5000
      })

      await tx.wait()

      Notify.create({
        type: 'positive',
        message: t('notifications.tokensTransferred'),
        timeout: 3000
      })

      // Обновляем балансы
      await tokensStore.refreshData()

      return txHash.value
    } catch (err) {
      console.error('Ошибка перевода токенов:', err)
      error.value = err.message

      Notify.create({
        type: 'negative',
        message: t('transfer.transferErrorMessage'),
        caption: err.message,
        timeout: 5000
      })

      throw err
    } finally {
      loading.value = false
      isTransactionPending.value = false
    }
  }

  /**
   * Approve PAID токенов для разблокировки
   * @param {string} amount - количество токенов для одобрения
   * @returns {Promise<string>} хеш транзакции
   */
  const approvePaidTokens = async amount => {
    if (!walletStore.address) {
      throw new Error('Кошелек не подключен')
    }

    if (!amount || parseFloat(amount) <= 0) {
      throw new Error('Количество должно быть больше 0')
    }

    if (isTransactionPending.value) {
      throw new Error(t('errors.transactionPending'))
    }

    loading.value = true
    error.value = null
    txHash.value = ''
    isTransactionPending.value = true

    try {
      const paidContract = getPAIDContract(true)
      const cxbtContract = getCXBTContract(false)

      // Проверяем paused состояние контракта
      const isPaused = await cxbtContract.paused()
      if (isPaused) {
        throw new Error(t('errors.contractPaused'))
      }

      // Получаем decimals для PAID
      let paidDecimals = PAID_DECIMALS
      try {
        paidDecimals = await paidContract.decimals()
      } catch {
        paidDecimals = PAID_DECIMALS
      }

      const amountWei = ethers.parseUnits(amount, paidDecimals)

      const tx = await paidContract.approve(CONTRACTS.CXBT_DIAMOND, amountWei)
      txHash.value = tx.hash

      Notify.create({
        type: 'positive',
        message: t('notifications.transactionSent'),
        caption: `Hash: ${txHash.value.slice(0, 10)}...${txHash.value.slice(-8)}`,
        timeout: 5000
      })

      await tx.wait()

      Notify.create({
        type: 'positive',
        message: t('notifications.paidApproved'),
        timeout: 3000
      })

      return txHash.value
    } catch (err) {
      console.error('Ошибка approve PAID токенов:', err)
      error.value = err.message

      Notify.create({
        type: 'negative',
        message: t('unlock.approveError'),
        caption: err.message,
        timeout: 5000
      })

      throw err
    } finally {
      loading.value = false
      isTransactionPending.value = false
    }
  }

  /**
   * Получить allowance PAID токенов
   * @returns {Promise<string>} количество одобренных токенов
   */
  const getPaidAllowance = async () => {
    if (!walletStore.address) {
      throw new Error('Кошелек не подключен')
    }

    try {
      return await retryWithDelay(async () => {
        const paidContract = getPAIDContract(false)
        const allowance = await paidContract.allowance(walletStore.address, CONTRACTS.CXBT_DIAMOND)

        // Получаем decimals для PAID
        let paidDecimals = PAID_DECIMALS
        try {
          paidDecimals = await paidContract.decimals()
        } catch {
          paidDecimals = PAID_DECIMALS
        }

        return ethers.formatUnits(allowance, paidDecimals)
      })
    } catch (err) {
      console.error('Ошибка получения allowance:', err)
      throw err
    }
  }

  // Computed свойства
  const shortTxHash = computed(() => {
    if (!txHash.value) return ''
    return `${txHash.value.slice(0, 10)}...${txHash.value.slice(-8)}`
  })

  const explorerUrl = computed(() => {
    if (!txHash.value) return '#'
    return `${CONTRACTS.CHAIN.BASE.explorerUrl}/tx/${txHash.value}`
  })

  const isValidAddress = address => {
    try {
      return ethers.isAddress(address)
    } catch {
      return false
    }
  }

  /**
   * Проверить, находится ли адрес в черном списке
   * @param {string} address - адрес для проверки
   * @returns {Promise<boolean>} true, если адрес в черном списке
   */
  const isBlacklistedRecipient = async address => {
    if (!address || !ethers.isAddress(address)) {
      throw new Error('Неверный адрес')
    }

    try {
      // eslint-disable-next-line require-await
      return await retryWithDelay(async () => {
        const cxbtContract = getCXBTContract(false)
        return cxbtContract.isBlacklisted(address)
      })
    } catch (err) {
      console.error('Ошибка проверки blacklisted статуса:', err)
      throw err
    }
  }

  /**
   * Оценить газ для перевода токенов
   * @param {string} to - адрес получателя
   * @param {string} amount - количество токенов для перевода
   * @returns {Promise<string>} оценка газа в ETH
   */
  const estimateTransferGas = async (to, amount) => {
    if (!walletStore.address) {
      throw new Error('Кошелек не подключен')
    }

    if (!to || !ethers.isAddress(to)) {
      throw new Error('Неверный адрес получателя')
    }

    if (!amount || parseFloat(amount) <= 0) {
      throw new Error('Количество должно быть больше 0')
    }

    try {
      const cxbtContract = getCXBTContract(true)
      const amountWei = ethers.parseUnits(amount, CXBT_DECIMALS)

      const gasEstimate = await cxbtContract.transfer.estimateGas(to, amountWei)
      const gasPrice = await walletStore.provider.getFeeData()

      // Конвертируем в ETH
      const gasCostWei = gasEstimate * gasPrice.gasPrice
      return ethers.formatEther(gasCostWei)
    } catch (err) {
      console.error('Ошибка оценки газа:', err)
      throw err
    }
  }

  /**
   * Проверить, приостановлен ли контракт
   * @returns {Promise<boolean>} true, если контракт приостановлен
   */
  const isContractPaused = async () => {
    try {
      const cxbtContract = getCXBTContract(false)
      return await cxbtContract.paused()
    } catch (err) {
      console.error('Ошибка проверки paused состояния:', err)
      throw err
    }
  }

  return {
    // State
    loading,
    error,
    txHash,

    // Computed
    shortTxHash,
    explorerUrl,

    // Methods
    fetchBalances,
    fetchUserStatus,
    calculateUnlockCost,
    unlockTokens,
    transferTokens,
    approvePaidTokens,
    getPaidAllowance,
    isValidAddress,
    isBlacklistedRecipient,
    estimateTransferGas,
    isContractPaused
  }
}
