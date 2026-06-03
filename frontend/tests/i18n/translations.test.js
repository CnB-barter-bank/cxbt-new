import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import translations from '@/i18n/translations'

// Ожидаемые переводы для слова "token"
const tokenTranslations = {
  en: 'token',
  de: 'Token',
  fr: 'jeton',
  bg: 'токен',
  ru: 'токен',
  zh: '代币',
}

// Список всех поддерживаемых языков
const supportedLanguages = ['en', 'de', 'fr', 'bg', 'ru', 'zh']

describe('i18n Translations', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('Загрузка всех языков', () => {
    it('загружает переводы для английского языка', () => {
      expect(translations.en).toBeDefined()
      expect(typeof translations.en).toBe('object')
    })

    it('загружает переводы для немецкого языка', () => {
      expect(translations.de).toBeDefined()
      expect(typeof translations.de).toBe('object')
    })

    it('загружает переводы для французского языка', () => {
      expect(translations.fr).toBeDefined()
      expect(typeof translations.fr).toBe('object')
    })

    it('загружает переводы для болгарского языка', () => {
      expect(translations.bg).toBeDefined()
      expect(typeof translations.bg).toBe('object')
    })

    it('загружает переводы для русского языка', () => {
      expect(translations.ru).toBeDefined()
      expect(typeof translations.ru).toBe('object')
    })

    it('загружает переводы для китайского языка', () => {
      expect(translations.zh).toBeDefined()
      expect(typeof translations.zh).toBe('object')
    })

    it('загружает все поддерживаемые языки', () => {
      supportedLanguages.forEach((lang) => {
        expect(translations[lang]).toBeDefined()
        expect(typeof translations[lang]).toBe('object')
      })
    })
  })

  describe('Структура переводов', () => {
    it('имеет корректную структуру для каждого языка', () => {
      supportedLanguages.forEach((lang) => {
        expect(translations[lang]).toBeInstanceOf(Object)
        expect(Object.keys(translations[lang]).length).toBeGreaterThan(0)
      })
    })

    it('имеет одинаковые ключи во всех языках', () => {
      const enKeys = Object.keys(translations.en)
      supportedLanguages.forEach((lang) => {
        const langKeys = Object.keys(translations[lang])
        expect(langKeys).toEqual(expect.arrayContaining(enKeys))
      })
    })
  })

  describe('Наличие перевода для слова "token"', () => {
    it('содержит перевод для "token" в английском языке', () => {
      expect(translations.en.token).toBe(tokenTranslations.en)
    })

    it('содержит перевод для "token" в немецком языке', () => {
      expect(translations.de.token).toBe(tokenTranslations.de)
    })

    it('содержит перевод для "token" во французском языке', () => {
      expect(translations.fr.token).toBe(tokenTranslations.fr)
    })

    it('содержит перевод для "token" в болгарском языке', () => {
      expect(translations.bg.token).toBe(tokenTranslations.bg)
    })

    it('содержит перевод для "token" в русском языке', () => {
      expect(translations.ru.token).toBe(tokenTranslations.ru)
    })

    it('содержит перевод для "token" в китайском языке', () => {
      expect(translations.zh.token).toBe(tokenTranslations.zh)
    })

    it('содержит перевод для "token" во всех языках', () => {
      supportedLanguages.forEach((lang) => {
        expect(translations[lang].token).toBe(tokenTranslations[lang])
      })
    })
  })

  describe('Переключение между языками через Store', () => {
    it('переключает язык и возвращает правильный перевод', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      // Проверка переключения на немецкий
      i18nStore.setLocale('de')
      expect(i18nStore.t('token')).toBe(tokenTranslations.de)

      // Проверка переключения на французский
      i18nStore.setLocale('fr')
      expect(i18nStore.t('token')).toBe(tokenTranslations.fr)

      // Проверка переключения на болгарский
      i18nStore.setLocale('bg')
      expect(i18nStore.t('token')).toBe(tokenTranslations.bg)

      // Проверка переключения на русский
      i18nStore.setLocale('ru')
      expect(i18nStore.t('token')).toBe(tokenTranslations.ru)

      // Проверка переключения на китайский
      i18nStore.setLocale('zh')
      expect(i18nStore.t('token')).toBe(tokenTranslations.zh)

      // Проверка переключения обратно на английский
      i18nStore.setLocale('en')
      expect(i18nStore.t('token')).toBe(tokenTranslations.en)
    })

    it('возвращает ключ, если перевод не найден', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      const nonExistentKey = 'nonExistentKey'
      expect(i18nStore.t(nonExistentKey)).toBe(nonExistentKey)
    })
  })

  describe('Доступные языки', () => {
    it('возвращает список всех доступных языков', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      expect(i18nStore.availableLocales).toEqual(supportedLanguages)
    })

    it('содержит корректные коды языков', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      expect(i18nStore.availableLanguages).toHaveLength(6)
      expect(i18nStore.availableLanguages[0].code).toBe('en')
      expect(i18nStore.availableLanguages[1].code).toBe('de')
      expect(i18nStore.availableLanguages[2].code).toBe('fr')
      expect(i18nStore.availableLanguages[3].code).toBe('bg')
      expect(i18nStore.availableLanguages[4].code).toBe('ru')
      expect(i18nStore.availableLanguages[5].code).toBe('zh')
    })
  })
})
