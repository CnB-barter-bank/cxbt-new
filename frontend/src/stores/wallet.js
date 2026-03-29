import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useWalletStore = defineStore('wallet', () => {
  const STORAGE_KEY = 'cxbt-wallet'

  // Инициализация состояния из localStorage
  const savedWallet = ref(null)
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      savedWallet.value = JSON.parse(saved)
    }
  } catch (e) {
    // localStorage может быть недоступен в тестах
  }

  const address = ref(savedWallet.value?.address || null)
  const isConnected = ref(savedWallet.value?.isConnected || false)
  const chainId = ref(savedWallet.value?.chainId || null)
  const balance = ref(savedWallet.value?.balance || null)
  
  // Балансы токенов
  const paidBalance = ref(savedWallet.value?.paidBalance ? BigInt(savedWallet.value.paidBalance) : null)
  const workBalance = ref(savedWallet.value?.workBalance ? BigInt(savedWallet.value.workBalance) : null)
  const lockedTokens = ref(savedWallet.value?.lockedTokens ? BigInt(savedWallet.value.lockedTokens) : null)
  const balancesLoading = ref(false)
  const balancesError = ref(null)

  // Названия токенов
  const paidTokenName = ref(savedWallet.value?.paidTokenName || null)
  const paidTokenSymbol = ref(savedWallet.value?.paidTokenSymbol || null)
  const workTokenName = ref(savedWallet.value?.workTokenName || null)
  const workTokenSymbol = ref(savedWallet.value?.workTokenSymbol || null)
  
  // Decimals для токенов
  const paidDecimals = ref(savedWallet.value?.paidDecimals || 18)
  const workDecimals = ref(savedWallet.value?.workDecimals || 18)

  // Функция для сохранения состояния в localStorage
  function saveToStorage() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          address: address.value,
          isConnected: isConnected.value,
          chainId: chainId.value,
          balance: balance.value,
          paidBalance: paidBalance.value ? paidBalance.value.toString() : null,
          workBalance: workBalance.value ? workBalance.value.toString() : null,
          lockedTokens: lockedTokens.value ? lockedTokens.value.toString() : null,
          paidTokenName: paidTokenName.value,
          paidTokenSymbol: paidTokenSymbol.value,
          workTokenName: workTokenName.value,
          workTokenSymbol: workTokenSymbol.value,
          paidDecimals: paidDecimals.value,
          workDecimals: workDecimals.value,
        })
      )
    } catch (e) {
      // localStorage может быть недоступен в тестах
    }
  }

  function connect() {
    console.log('[Wallet Store] connect() called')
    isConnected.value = true
    console.log('[Wallet Store] isConnected.value after connect:', isConnected.value)
    saveToStorage()
  }

  function disconnect() {
    console.log('[Wallet Store] disconnect() called')
    address.value = null
    isConnected.value = false
    chainId.value = null
    balance.value = null
    clearBalances()
    console.log('[Wallet Store] State after disconnect - address:', address.value, 'isConnected:', isConnected.value)
    saveToStorage()
  }

  function setAddress(newAddress) {
    console.log('[Wallet Store] setAddress called with:', newAddress)
    address.value = newAddress
    console.log('[Wallet Store] address.value after set:', address.value)
    saveToStorage()
  }

  function setIsConnected(status) {
    console.log('[Wallet Store] setIsConnected called with:', status)
    isConnected.value = status
    console.log('[Wallet Store] isConnected.value after set:', isConnected.value)
    saveToStorage()
  }

  function setChainId(newChainId) {
    chainId.value = newChainId
    saveToStorage()
  }

  function setBalance(newBalance) {
    balance.value = newBalance
    saveToStorage()
  }

  // Actions для балансов токенов
  function setPaidBalance(balance) {
    paidBalance.value = balance
    saveToStorage()
  }

  function setWorkBalance(balance) {
    workBalance.value = balance
    saveToStorage()
  }

  function setLockedTokens(amount) {
    lockedTokens.value = amount
    saveToStorage()
  }

  function setBalancesLoading(loading) {
    balancesLoading.value = loading
  }

  function setBalancesError(error) {
    balancesError.value = error
  }

  // Actions для названий токенов
  function setPaidTokenName(name) {
    paidTokenName.value = name
    saveToStorage()
  }

  function setPaidTokenSymbol(symbol) {
    paidTokenSymbol.value = symbol
    saveToStorage()
  }

  function setWorkTokenName(name) {
    workTokenName.value = name
    saveToStorage()
  }

  function setWorkTokenSymbol(symbol) {
    workTokenSymbol.value = symbol
    saveToStorage()
  }

  // Actions для decimals
  function setPaidDecimals(decimals) {
    console.log('[Wallet Store] setPaidDecimals called with:', decimals)
    paidDecimals.value = decimals
    saveToStorage()
  }

  function setWorkDecimals(decimals) {
    console.log('[Wallet Store] setWorkDecimals called with:', decimals)
    workDecimals.value = decimals
    saveToStorage()
  }

  function clearBalances() {
    paidBalance.value = null
    workBalance.value = null
    lockedTokens.value = null
    balancesLoading.value = false
    balancesError.value = null
    paidTokenName.value = null
    paidTokenSymbol.value = null
    workTokenName.value = null
    workTokenSymbol.value = null
    paidDecimals.value = 18
    workDecimals.value = 18
  }

  // Getters
  const shortAddress = computed(() => {
    if (!address.value) return null
    return `${address.value.slice(0, 6)}...${address.value.slice(-4)}`
  })

  const isBaseNetwork = computed(() => {
    return chainId.value === 8453
  })

  // Getters для балансов токенов
  const hasBalances = computed(() => {
    return paidBalance.value !== null || workBalance.value !== null
  })

  /**
   * Форматирует баланс токена с учётом decimals
   * @param {bigint} balance - Баланс в наименьших единицах
   * @param {number} decimals - Количество decimals токена
   * @returns {string} Отформатированный баланс
   */
  const formatTokenBalance = (balance, decimals) => {
    if (balance === null || balance === undefined) return '0'
    
    const divisor = BigInt(10 ** decimals)
    const wholePart = balance / divisor
    const fractionalPart = balance % divisor
    
    // Форматируем целую часть с разделителями тысяч
    const wholeStr = wholePart.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    
    // Форматируем дробную часть
    let fractionalStr = fractionalPart.toString().padStart(decimals, '0')
    // Убираем trailing zeros
    fractionalStr = fractionalStr.replace(/0+$/, '')
    
    if (fractionalStr === '') {
      return wholeStr
    }
    
    return `${wholeStr}.${fractionalStr}`
  }

  const formattedPaidBalance = computed(() => {
    console.log('[Wallet Store] formattedPaidBalance computed:', {
      balance: paidBalance.value?.toString(),
      decimals: paidDecimals.value
    })
    if (paidBalance.value === null) return '0'
    const formatted = formatTokenBalance(paidBalance.value, paidDecimals.value)
    console.log('[Wallet Store] formattedPaidBalance result:', formatted)
    return formatted
  })

  const formattedWorkBalance = computed(() => {
    console.log('[Wallet Store] formattedWorkBalance computed:', {
      balance: workBalance.value?.toString(),
      decimals: workDecimals.value
    })
    if (workBalance.value === null) return '0'
    const formatted = formatTokenBalance(workBalance.value, workDecimals.value)
    console.log('[Wallet Store] formattedWorkBalance result:', formatted)
    return formatted
  })

  const formattedLockedTokens = computed(() => {
    console.log('[Wallet Store] formattedLockedTokens computed:', {
      balance: lockedTokens.value?.toString(),
      decimals: workDecimals.value
    })
    if (lockedTokens.value === null || lockedTokens.value === undefined) return '0'
    const formatted = formatTokenBalance(lockedTokens.value, workDecimals.value)
    console.log('[Wallet Store] formattedLockedTokens result:', formatted)
    return formatted
  })

  const totalWorkTokens = computed(() => {
    const work = workBalance.value || 0n
    const locked = lockedTokens.value || 0n
    const total = work + locked
    console.log('[Wallet Store] totalWorkTokens computed:', {
      work: work.toString(),
      locked: locked.toString(),
      total: total.toString(),
      decimals: workDecimals.value
    })
    const formatted = formatTokenBalance(total, workDecimals.value)
    console.log('[Wallet Store] totalWorkTokens result:', formatted)
    return formatted
  })

  return {
    // State
    address,
    isConnected,
    chainId,
    balance,
    paidBalance,
    workBalance,
    lockedTokens,
    balancesLoading,
    balancesError,
    paidTokenName,
    paidTokenSymbol,
    workTokenName,
    workTokenSymbol,
    paidDecimals,
    workDecimals,
    // Actions
    connect,
    disconnect,
    setAddress,
    setIsConnected,
    setChainId,
    setBalance,
    setPaidBalance,
    setWorkBalance,
    setLockedTokens,
    setBalancesLoading,
    setBalancesError,
    setPaidTokenName,
    setPaidTokenSymbol,
    setWorkTokenName,
    setWorkTokenSymbol,
    setPaidDecimals,
    setWorkDecimals,
    clearBalances,
    // Getters
    shortAddress,
    isBaseNetwork,
    hasBalances,
    formattedPaidBalance,
    formattedWorkBalance,
    formattedLockedTokens,
    totalWorkTokens,
  }
})
