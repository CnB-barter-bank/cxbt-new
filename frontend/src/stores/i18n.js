import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

// Импорт переводов для использования в методе t()
import translations from '../i18n/translations'

export const useI18nStore = defineStore('i18n', () => {
  const STORAGE_KEY = 'cxbt-locale'

  const currentLanguage = ref(localStorage.getItem(STORAGE_KEY) || 'en')

  const availableLanguages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'fr', name: 'Français' },
    { code: 'bg', name: 'Български' },
    { code: 'ru', name: 'Русский' },
    { code: 'zh', name: '中文' },
  ]

  function setLanguage(lang) {
    if (availableLanguages.some(l => l.code === lang)) {
      currentLanguage.value = lang
      try {
        localStorage.setItem(STORAGE_KEY, lang)
      } catch (e) {
        // localStorage может быть недоступен в тестах
      }
    }
  }

  // Алиас для совместимости (возвращает текущий язык)
  const currentLocale = computed(() => currentLanguage.value)

  function setLocale(lang) {
    if (availableLanguages.some(l => l.code === lang)) {
      setLanguage(lang)
    }
  }

  // Метод для получения перевода по ключу
  function t(key, params = {}) {
    const locale = currentLocale.value
    const localeTranslations = translations[locale]

    if (!localeTranslations) {
      return key
    }

    // Поддержка вложенных ключей через точечную нотацию
    const keys = key.split('.')
    let value = localeTranslations

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return key // Возвращаем ключ, если перевод не найден
      }
    }

    // Если значение не строка, возвращаем как есть
    if (typeof value !== 'string') {
      return value
    }

    // Поддержка интерполяции {variable}
    return value.replace(/\{(\w+)\}/g, (match, param) => {
      return params[param] !== undefined ? params[param] : match
    })
  }

  // Доступные локали (короткие коды)
  const availableLocales = computed(() => availableLanguages.map(l => l.code))

  return {
    currentLanguage,
    availableLanguages,
    setLanguage,
    currentLocale,
    setLocale,
    t,
    availableLocales,
  }
})
