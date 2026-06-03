import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import router from './router'
import i18n from './i18n'
import App from './App.vue'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Import WalletConnect configuration
import { wagmiConfig, queryClient, initializeWeb3Modal } from './composables/useWalletConnect'

// Import Vue Query plugin
import { VueQueryPlugin } from '@tanstack/vue-query'

// Initialize Web3Modal before creating the app
initializeWeb3Modal()

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

// Setup Vue Query with QueryClient
app.use(VueQueryPlugin, {
  queryClient,
})

// Auto-reconnect wallet if previously connected
const autoConnectWallet = async () => {
  try {
    const { reconnect } = await import('@wagmi/core')
    await reconnect(wagmiConfig)
  } catch (error) {
    console.error('Ошибка автоматического подключения к кошельку:', error)
  }
}

// Initialize auto-reconnect before mounting
autoConnectWallet().then(() => {
  app.mount('#app')
})
