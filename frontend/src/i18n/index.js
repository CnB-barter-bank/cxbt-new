import { createI18n } from 'vue-i18n'

import en from './en'
import de from './de'
import fr from './fr'
import bg from './bg'
import ru from './ru'
import zh from './zh'

const messages = {
  en,
  de,
  fr,
  bg,
  ru,
  zh,
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n
