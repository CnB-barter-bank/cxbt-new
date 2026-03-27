import { ethers } from 'ethers'

// CXBT Contract Configuration
export const CONTRACTS = {
  // CXBT Diamond Proxy Address
  CXBT_DIAMOND:
    import.meta.env.VITE_CXBT_DIAMOND_ADDRESS || '0x90C41F9c7Ee0dA9Ce1760be857a760915B30267b',

  // PAID Token Address
  PAID_TOKEN:
    import.meta.env.VITE_PAID_TOKEN_ADDRESS || '0x60a3e35cc302bfa44cb288bc5a4f316fdb1adb42',

  // Chain Configuration
  CHAIN: {
    BASE: {
      chainId: 8453,
      name: 'Base',
      rpcUrl: 'https://mainnet.base.org',
      explorerUrl: 'https://basescan.org'
    }
  }
}

// CXBT ABI (для взаимодействия с контрактом)
export const CXBT_ABI = [
  // ERC20 Balance functions
  'function balanceOf(address account) view returns (uint256)',
  'function totalSupply() view returns (uint256)',

  // ERC20 Token operations
  'function transfer(address to, uint256 amount) returns (bool)',
  'function approve(address spender, uint256 amount) returns (bool)',
  'function allowance(address owner, address spender) view returns (uint256)',

  // CXBT specific functions
  'function getTokenBalances(address user) external view returns (uint256 unlocked, uint256 locked, uint256 total)',
  'function calculateUnlockCost(uint256 unlockAmount) external view returns (uint256 cost)',
  'function unlockTokens(uint256 unlockAmount) external',
  'function getPaidToken() external view returns (address)',
  'function getUnlockPercentage() external view returns (uint256)',
  'function getRewardPoolBalance() external view returns (uint256)',
  'function paused() external view returns (bool)',

  // Whitelist / Blacklist functions
  'function isWhitelisted(address account) external view returns (bool)',
  'function isBlacklisted(address account) external view returns (bool)',

  // Events
  'event TokensUnlocked(address indexed user, uint256 amount, uint256 paidPaid)',
  'event Transfer(address indexed from, address indexed to, uint256 value)'
]

// ERC20 ABI for PAID token
export const ERC20_ABI = [
  'function balanceOf(address account) view returns (uint256)',
  'function totalSupply() view returns (uint256)',
  'function transfer(address to, uint256 amount) returns (bool)',
  'function approve(address spender, uint256 amount) returns (bool)',
  'function allowance(address owner, address spender) view returns (uint256)',
  'function decimals() view returns (uint8)',
  'function symbol() view returns (string)',
  'function name() view returns (string)'
]

// Web3Modal Configuration
export const WALLET_CONNECT_PROJECT_ID = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID || ''

/**
 * Валидация адресов контрактов
 * Проверяет, что адреса являются валидными Ethereum адресами и не являются нулевыми адресами
 */
export function validateContractAddresses() {
  const errors = []

  // Проверка CXBT_DIAMOND
  if (!ethers.isAddress(CONTRACTS.CXBT_DIAMOND)) {
    errors.push(`Invalid CXBT_DIAMOND address: ${CONTRACTS.CXBT_DIAMOND}`)
  } else if (CONTRACTS.CXBT_DIAMOND.toLowerCase() === ethers.ZeroAddress.toLowerCase()) {
    errors.push('CXBT_DIAMOND address cannot be zero address')
  }

  // Проверка PAID_TOKEN
  if (!ethers.isAddress(CONTRACTS.PAID_TOKEN)) {
    errors.push(`Invalid PAID_TOKEN address: ${CONTRACTS.PAID_TOKEN}`)
  } else if (CONTRACTS.PAID_TOKEN.toLowerCase() === ethers.ZeroAddress.toLowerCase()) {
    errors.push('PAID_TOKEN address cannot be zero address')
  }

  return errors
}
