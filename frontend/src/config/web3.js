// Web3 Configuration for WalletConnect and Base Network

export const WEB3_CONFIG = {
  // WalletConnect Configuration
  walletConnect: {
    projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID || 'demo-project-id',
    metadata: {
      name: 'CXBT',
      description: 'CXBT - Vue + Quasar Web3 Application',
      url: typeof window !== 'undefined' ? window.location.origin : 'https://cxbt.io',
      icons: ['https://avatars.githubusercontent.com/u/37784886']
    }
  },

  // Base Network Configuration
  base: {
    chainId: 8453,
    name: 'Base',
    nativeCurrency: {
      name: 'Ether',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls: {
      default: { http: ['https://mainnet.base.org'] },
      public: { http: ['https://mainnet.base.org'] }
    },
    blockExplorers: {
      default: { name: 'Basescan', url: 'https://basescan.org' }
    },
    testnet: false
  },

  // Default chains to support
  chains: [
    {
      id: 8453,
      name: 'Base',
      nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
      },
      rpcUrls: ['https://mainnet.base.org'],
      blockExplorers: {
        default: { name: 'Basescan', url: 'https://basescan.org' }
      }
    }
  ],

  // Web3Modal Configuration
  web3Modal: {
    themeMode: 'light',
    themeVariables: {
      '--w3m-z-index': '9999',
      '--w3m-accent': '#1976D2',
      '--w3m-background-color': '#FFFFFF'
    },
    featuredWalletIds: [
      'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96', // MetaMask
      '4622a2b2d6af1c9844944291ef5cb2b0d455a6d7c31f4c7168643b8a9b65ed61', // Coinbase Wallet
      '1ae92b26102f0451f551dcb7b7ad7608a53644b6f2ea0a1dc91b6d148e90dfc6' // Trust Wallet
    ]
  },

  // Ethers.js Configuration
  ethers: {
    maxRetries: 3,
    timeout: 30000
  }
}

// Helper function to get chain configuration by chain ID
export const getChainConfig = chainId => {
  return WEB3_CONFIG.chains.find(chain => chain.id === chainId)
}

// Helper function to validate if chain is supported
export const isSupportedChain = chainId => {
  return WEB3_CONFIG.chains.some(chain => chain.id === chainId)
}
