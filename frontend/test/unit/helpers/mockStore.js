import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/**
 * Mock Wallet Store
 */
export const createMockWalletStore = (overrides = {}) => {
  const defaultState = {
    isConnected: false,
    address: null,
    chainId: null,
    signer: null,
    provider: null,
    balance: '0',
    loading: false,
    error: null,
    shortAddress: computed(() => {
      if (!defaultState.address) return ''
      return `${defaultState.address.slice(0, 6)}...${defaultState.address.slice(-4)}`
    }),
    currentChain: computed(() => {
      if (!defaultState.chainId) return null
      return { name: 'Base', chainId: defaultState.chainId }
    }),
    isBaseNetwork: computed(() => defaultState.chainId === 8453),
    connectWallet: vi
      .fn()
      .mockResolvedValue({ success: true, address: '0x1234567890123456789012345678901234567890' }),
    disconnectWallet: vi.fn(),
    switchNetwork: vi.fn().mockResolvedValue(undefined),
    updateBalance: vi.fn().mockResolvedValue(undefined),
    checkConnection: vi.fn().mockResolvedValue(undefined)
  }

  return {
    ...defaultState,
    ...overrides
  }
}

export const useMockWalletStore = defineStore('wallet', () => {
  const state = createMockWalletStore()
  return state
})

/**
 * Mock Tokens Store
 */
export const createMockTokensStore = (overrides = {}) => {
  const defaultState = {
    unlockedBalance: ref('100.000000'),
    lockedBalance: ref('50.000000'),
    totalBalance: ref('150.000000'),
    paidBalance: ref('10.000000000000000000'),
    userStatus: ref('normal'),
    loading: ref(false),
    error: ref(null),
    formattedBalances: computed(() => ({
      unlocked: '100.000000',
      locked: '50.000000',
      total: '150.000000',
      paid: '10.000000'
    })),
    isWhitelisted: computed(() => defaultState.userStatus.value === 'whitelisted'),
    isBlacklisted: computed(() => defaultState.userStatus.value === 'blacklisted'),
    isNormal: computed(() => defaultState.userStatus.value === 'normal'),
    statusLabel: computed(() => {
      switch (defaultState.userStatus.value) {
        case 'whitelisted':
          return 'Whitelisted'
        case 'blacklisted':
          return 'Blacklisted'
        default:
          return 'Normal'
      }
    }),
    statusColor: computed(() => {
      switch (defaultState.userStatus.value) {
        case 'whitelisted':
          return 'positive'
        case 'blacklisted':
          return 'negative'
        default:
          return 'grey'
      }
    }),
    canUnlockTokens: computed(() => {
      return !defaultState.isWhitelisted.value && !defaultState.isBlacklisted.value
    }),
    canTransferTokens: computed(() => {
      return !defaultState.isBlacklisted.value
    }),
    canTransferLockedTokens: computed(() => {
      return defaultState.isWhitelisted.value
    }),
    availableBalanceForTransfer: computed(() => {
      if (defaultState.isWhitelisted.value) {
        return defaultState.totalBalance.value
      }
      return defaultState.unlockedBalance.value
    }),
    fetchBalances: vi.fn().mockResolvedValue(undefined),
    fetchUserStatus: vi.fn().mockResolvedValue(undefined),
    refreshData: vi.fn().mockResolvedValue(undefined),
    reset: vi.fn()
  }

  return {
    ...defaultState,
    ...overrides
  }
}

export const useMockTokensStore = defineStore('tokens', () => {
  const state = createMockTokensStore()
  return state
})

/**
 * Mock I18n Store
 */
export const createMockI18nStore = (overrides = {}) => {
  const defaultState = {
    availableLanguages: [
      { code: 'en', name: 'English', flag: '🇬🇧' },
      { code: 'ru', name: 'Русский', flag: '🇷🇺' },
      { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
      { code: 'fr', name: 'Français', flag: '🇫🇷' },
      { code: 'zh', name: '中文', flag: '🇨🇳' },
      { code: 'bg', name: 'Български', flag: '🇧🇬' }
    ],
    currentLocale: ref('en'),
    currentLanguage: computed(() => {
      return (
        defaultState.availableLanguages.find(
          lang => lang.code === defaultState.currentLocale.value
        ) || defaultState.availableLanguages[0]
      )
    }),
    setLocale: vi.fn(),
    toggleLocale: vi.fn()
  }

  return {
    ...defaultState,
    ...overrides
  }
}

export const useMockI18nStore = defineStore('i18n', () => {
  const state = createMockI18nStore()
  return state
})
