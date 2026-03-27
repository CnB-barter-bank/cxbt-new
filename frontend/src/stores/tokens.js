import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { useContract } from '../composables/useContract'
import { Notify } from 'quasar'

// Persist helpers
const PERSIST_KEY = 'cxbt-tokens'

function loadPersistedState() {
  try {
    const saved = localStorage.getItem(PERSIST_KEY)
    if (saved) {
      return JSON.parse(saved)
    }
  } catch (err) {
    console.error('Error loading persisted tokens state:', err)
  }
  return null
}

function savePersistedState(state) {
  try {
    localStorage.setItem(PERSIST_KEY, JSON.stringify(state))
  } catch (err) {
    console.error('Error saving tokens state:', err)
  }
}

function clearPersistedState() {
  try {
    localStorage.removeItem(PERSIST_KEY)
  } catch (err) {
    console.error('Error clearing tokens state:', err)
  }
}

export const useTokensStore = defineStore('tokens', () => {
  // State
  const unlockedBalance = ref('0')
  const lockedBalance = ref('0')
  const totalBalance = ref('0')
  const paidBalance = ref('0')
  const userStatus = ref('normal') // 'whitelisted', 'blacklisted', 'normal'
  const loading = ref(false)
  const error = ref(null)

  // Load persisted state on initialization
  const persisted = loadPersistedState()
  if (persisted) {
    unlockedBalance.value = persisted.unlockedBalance || '0'
    lockedBalance.value = persisted.lockedBalance || '0'
    totalBalance.value = persisted.totalBalance || '0'
    paidBalance.value = persisted.paidBalance || '0'
    userStatus.value = persisted.userStatus || 'normal'
  }

  // Persist state changes
  watch(
    () => ({
      unlockedBalance: unlockedBalance.value,
      lockedBalance: lockedBalance.value,
      totalBalance: totalBalance.value,
      paidBalance: paidBalance.value,
      userStatus: userStatus.value
    }),
    state => {
      savePersistedState(state)
    },
    { deep: true }
  )

  // Helpers
  /**
   * Форматировать баланс
   * @param {string} balance - баланс в формате строки
   * @returns {string} отформатированный баланс
   */
  const formatBalance = balance => {
    try {
      // Проверка на null, undefined или объекты
      if (balance === null || balance === undefined || typeof balance === 'object') {
        return '0.000000'
      }
      const balanceStr = String(balance || '0')

      // Проверка на отрицательные значения
      if (balanceStr.startsWith('-')) return '0.000000'

      // Проверка на пустую строку или только пробелы
      if (!balanceStr.trim()) return '0.000000'

      // Парсим число для проверки на NaN и Infinity
      const num = parseFloat(balanceStr)
      if (!isFinite(num)) return '0.000000'
      if (num === 0) return '0.000000'
      if (num < 0.000001) return '< 0.000001'

      // Для очень больших чисел или чисел с высокой точностью используем строковое форматирование
      if (balanceStr.includes('.') && balanceStr.length > 15) {
        // Разбиваем на целую и дробную части
        const parts = balanceStr.split('.')
        const integerPart = parts[0] || '0'
        let decimalPart = parts[1] || ''

        // Обрезаем или дополняем дробную часть до 6 знаков
        if (decimalPart.length > 6) {
          decimalPart = decimalPart.substring(0, 6)
        } else {
          decimalPart = decimalPart.padEnd(6, '0')
        }

        return `${integerPart}.${decimalPart}`
      }

      // Для обычных чисел используем toFixed
      return num.toFixed(6)
    } catch {
      return '0.000000'
    }
  }

  // Computed
  const formattedBalances = computed(() => ({
    unlocked: formatBalance(unlockedBalance.value),
    locked: formatBalance(lockedBalance.value),
    total: formatBalance(totalBalance.value),
    paid: formatBalance(paidBalance.value)
  }))

  const isWhitelisted = computed(() => userStatus.value === 'whitelisted')
  const isBlacklisted = computed(() => userStatus.value === 'blacklisted')
  const isNormal = computed(() => userStatus.value === 'normal')

  const statusLabel = computed(() => {
    switch (userStatus.value) {
      case 'whitelisted':
        return 'Whitelisted'
      case 'blacklisted':
        return 'Blacklisted'
      default:
        return 'Normal'
    }
  })

  const statusColor = computed(() => {
    switch (userStatus.value) {
      case 'whitelisted':
        return 'positive'
      case 'blacklisted':
        return 'negative'
      default:
        return 'grey'
    }
  })

  const canUnlockTokens = computed(() => {
    return !isWhitelisted.value && !isBlacklisted.value
  })

  const canTransferTokens = computed(() => {
    return !isBlacklisted.value
  })

  const canTransferLockedTokens = computed(() => {
    return isWhitelisted.value
  })

  const availableBalanceForTransfer = computed(() => {
    if (isWhitelisted.value) {
      return totalBalance.value
    }
    return unlockedBalance.value
  })

  // Actions
  /**
   * Получить балансы токенов пользователя
   */
  const fetchBalances = async () => {
    loading.value = true
    error.value = null

    try {
      const contract = useContract()
      const balances = await contract.fetchBalances()

      unlockedBalance.value = balances.unlockedBalance
      lockedBalance.value = balances.lockedBalance
      totalBalance.value = balances.totalBalance
      paidBalance.value = balances.paidBalance
    } catch (err) {
      console.error('Ошибка получения балансов:', err)
      error.value = err.message
      Notify.create({
        type: 'negative',
        message: 'Ошибка получения балансов',
        caption: err.message,
        timeout: 5000
      })
    } finally {
      loading.value = false
    }
  }

  /**
   * Получить статус пользователя
   */
  const fetchUserStatus = async () => {
    loading.value = true
    error.value = null

    try {
      const contract = useContract()
      userStatus.value = await contract.fetchUserStatus()
    } catch (err) {
      console.error('Ошибка получения статуса пользователя:', err)
      error.value = err.message
      userStatus.value = 'normal' // Fallback
    } finally {
      loading.value = false
    }
  }

  /**
   * Обновить все данные (балансы и статус)
   */
  const refreshData = async () => {
    await Promise.all([fetchBalances(), fetchUserStatus()])
  }

  /**
   * Сбросить состояние
   */
  const reset = () => {
    unlockedBalance.value = '0'
    lockedBalance.value = '0'
    totalBalance.value = '0'
    paidBalance.value = '0'
    userStatus.value = 'normal'
    loading.value = false
    error.value = null

    // Clear persisted state
    clearPersistedState()
  }

  return {
    // State
    unlockedBalance,
    lockedBalance,
    totalBalance,
    paidBalance,
    userStatus,
    loading,
    error,

    // Getters
    formattedBalances,
    isWhitelisted,
    isBlacklisted,
    isNormal,
    statusLabel,
    statusColor,
    canUnlockTokens,
    canTransferTokens,
    canTransferLockedTokens,
    availableBalanceForTransfer,

    // Actions
    fetchBalances,
    fetchUserStatus,
    refreshData,
    reset
  }
})
