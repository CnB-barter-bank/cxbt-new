import { boot } from 'quasar/wrappers'
import { createI18n } from 'vue-i18n'
import en from 'src/i18n/en.js'
import ru from 'src/i18n/ru.js'
import de from 'src/i18n/de.js'
import fr from 'src/i18n/fr.js'
import zh from 'src/i18n/zh.js'
import bg from 'src/i18n/bg.js'

const messages = {
  en,
  ru,
  de,
  fr,
  zh,
  bg
}

// Detect browser language or use stored preference
const getInitialLocale = () => {
  const storedLocale = localStorage.getItem('locale')
  if (storedLocale && messages[storedLocale]) {
    return storedLocale
  }

  // Try to detect browser language
  const browserLang = navigator.language || navigator.userLanguage
  const langCode = browserLang ? browserLang.split('-')[0] : 'en' // Get primary language code (e.g., 'en' from 'en-US')

  if (messages[langCode]) {
    return langCode
  }

  // Fallback to English
  return 'en'
}

const i18n = createI18n({
  locale: getInitialLocale(),
  fallbackLocale: 'en',
  messages,
  legacy: false, // Use Composition API mode
  globalInjection: true
})

export default boot(({ app }) => {
  app.use(i18n)
})

export { i18n }
