import { createApp } from 'vue'
import { Quasar } from 'quasar'
import { createPinia } from 'pinia'
import iconSet from 'quasar/icon-set/material-icons'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

// Import app styles
import './css/app.scss'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'

// Import contract configuration and validation
import { validateContractAddresses } from './config/contracts'

// Validate contract addresses on startup
const contractErrors = validateContractAddresses()
if (contractErrors.length > 0) {
  console.error('Contract address validation errors:', contractErrors)
  contractErrors.forEach(error => console.error(error))
}

// Create Pinia instance
const pinia = createPinia()

const myApp = createApp(App)

// Use Pinia
myApp.use(pinia)

myApp.use(Quasar, {
  plugins: [], // Import Quasar plugins and add here
  iconSet
})

myApp.mount('#app')
