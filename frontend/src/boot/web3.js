import { boot } from 'quasar/wrappers'
import { useWalletStore } from '../stores/wallet'
import { useWeb3 } from '../composables/useWeb3'

export default boot(async ({ app, router, pinia }) => {
  // eslint-disable-next-line no-param-reassign
  // Initialize wallet store using existing Pinia instance
  const walletStore = useWalletStore(pinia)

  // Initialize Web3 composable
  const { initWeb3Modal } = useWeb3()

  // Initialize Web3Modal Vue
  try {
    await initWeb3Modal()
  } catch (error) {
    console.error('Ошибка инициализации Web3Modal:', error)
  }

  // Check for existing wallet connection
  try {
    await walletStore.checkConnection()
  } catch (error) {
    console.error('Ошибка проверки подключения кошелька:', error)
  }

  // Make wallet store available globally
  // eslint-disable-next-line no-param-reassign
  app.config.globalProperties.$wallet = walletStore

  // Make useWeb3 composable available globally
  // eslint-disable-next-line no-param-reassign
  app.config.globalProperties.$web3 = useWeb3

  // Add route guard for wallet connection if needed
  router.beforeEach((to, from, next) => {
    // Check if route requires wallet connection
    if (to.meta.requiresWallet && !walletStore.isConnected) {
      // Redirect to home or show notification
      next('/')
    } else if (to.meta.requiresBaseNetwork && !walletStore.isConnectedToBase) {
      // Redirect or show notification for wrong network
      next('/')
    } else {
      next()
    }
  })

  // Handle window events for wallet connection
  if (typeof window !== 'undefined' && window.ethereum) {
    // Listen for account changes
    window.ethereum.on('accountsChanged', accounts => {
      if (accounts.length === 0) {
        walletStore.disconnectWallet()
      }
    })

    // Listen for chain changes
    window.ethereum.on('chainChanged', _chainId => {
      // Reload the page to ensure all components update
      window.location.reload()
    })

    // Listen for disconnect
    window.ethereum.on('disconnect', error => {
      console.error('Кошелек отключен:', error)
      walletStore.disconnectWallet()
    })
  }
})
