import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

// Мок для localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})

// Ожидаемые переводы для слова "token"
const tokenTranslations = {
  en: 'token',
  de: 'Token',
  fr: 'jeton',
  bg: 'токен',
  ru: 'токен',
  zh: '代币',
}

describe('i18n Store/Composable', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorageMock.getItem.mockClear()
    localStorageMock.getItem.mockReturnValue(undefined)
    localStorageMock.setItem.mockClear()
    localStorageMock.removeItem.mockClear()
    localStorageMock.clear.mockClear()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('Инициализация', () => {
    it('инициализируется с языком по умолчанию (английский)', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      expect(i18nStore.currentLocale).toBe('en')
    })

    it('инициализируется с языком из localStorage, если он сохранён', async () => {
      localStorageMock.getItem.mockReturnValue('ru')

      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      expect(localStorageMock.getItem).toHaveBeenCalledWith('cxbt-locale')
      expect(i18nStore.currentLocale).toBe('ru')
    })
  })

  describe('Переключение языка', () => {
    it('переключает язык на немецкий', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      i18nStore.setLocale('de')

      expect(i18nStore.currentLocale).toBe('de')
    })

    it('переключает язык на французский', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      i18nStore.setLocale('fr')

      expect(i18nStore.currentLocale).toBe('fr')
    })

    it('переключает язык на болгарский', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      i18nStore.setLocale('bg')

      expect(i18nStore.currentLocale).toBe('bg')
    })

    it('переключает язык на русский', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      i18nStore.setLocale('ru')

      expect(i18nStore.currentLocale).toBe('ru')
    })

    it('переключает язык на китайский', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      i18nStore.setLocale('zh')

      expect(i18nStore.currentLocale).toBe('zh')
    })

    it('не переключает язык на недопустимый код', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      i18nStore.setLocale('invalid')

      expect(i18nStore.currentLocale).toBe('en')
    })
  })

  describe('Получение перевода', () => {
    it('возвращает перевод по ключу для английского языка', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      const translation = i18nStore.t('token')

      expect(translation).toBe(tokenTranslations.en)
    })

    it('возвращает перевод по ключу для немецкого языка', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      i18nStore.setLocale('de')
      const translation = i18nStore.t('token')

      expect(translation).toBe(tokenTranslations.de)
    })

    it('возвращает перевод по ключу для французского языка', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      i18nStore.setLocale('fr')
      const translation = i18nStore.t('token')

      expect(translation).toBe(tokenTranslations.fr)
    })

    it('возвращает перевод по ключу для болгарского языка', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      i18nStore.setLocale('bg')
      const translation = i18nStore.t('token')

      expect(translation).toBe(tokenTranslations.bg)
    })

    it('возвращает перевод по ключу для русского языка', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      i18nStore.setLocale('ru')
      const translation = i18nStore.t('token')

      expect(translation).toBe(tokenTranslations.ru)
    })

    it('возвращает перевод по ключу для китайского языка', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      i18nStore.setLocale('zh')
      const translation = i18nStore.t('token')

      expect(translation).toBe(tokenTranslations.zh)
    })

    it('возвращает ключ, если перевод не найден', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      const translation = i18nStore.t('nonexistent.key')

      expect(translation).toBe('nonexistent.key')
    })
  })

  describe('Доступные языки', () => {
    it('возвращает список доступных языков', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      const availableLocales = i18nStore.availableLocales

      expect(availableLocales).toEqual(['en', 'de', 'fr', 'bg', 'ru', 'zh'])
    })

    it('проверяет, что английский язык доступен', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      expect(i18nStore.availableLocales).toContain('en')
    })

    it('проверяет, что немецкий язык доступен', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      expect(i18nStore.availableLocales).toContain('de')
    })

    it('проверяет, что французский язык доступен', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      expect(i18nStore.availableLocales).toContain('fr')
    })

    it('проверяет, что болгарский язык доступен', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      expect(i18nStore.availableLocales).toContain('bg')
    })

    it('проверяет, что русский язык доступен', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      expect(i18nStore.availableLocales).toContain('ru')
    })

    it('проверяет, что китайский язык доступен', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      expect(i18nStore.availableLocales).toContain('zh')
    })
  })

  describe('Сохранение языка в localStorage', () => {
    it('сохраняет выбранный язык в localStorage', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      i18nStore.setLocale('ru')

      expect(localStorageMock.setItem).toHaveBeenCalledWith('cxbt-locale', 'ru')
    })

    it('сохраняет немецкий язык в localStorage', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      i18nStore.setLocale('de')

      expect(localStorageMock.setItem).toHaveBeenCalledWith('cxbt-locale', 'de')
    })

    it('сохраняет китайский язык в localStorage', async () => {
      const { useI18nStore } = await import('@/stores/i18n')
      const i18nStore = useI18nStore()

      i18nStore.setLocale('zh')

      expect(localStorageMock.setItem).toHaveBeenCalledWith('cxbt-locale', 'zh')
    })
  })
})

describe('Файлы переводов', () => {
  describe('Проверка наличия ключей перевода', () => {
    it('проверяет наличие всех ключей перевода во всех языках', async () => {
      const translations = await import('@/i18n/translations')

      const locales = ['en', 'de', 'fr', 'bg', 'ru', 'zh']
      const expectedKeys = ['token']

      locales.forEach((locale) => {
        expect(translations.default).toHaveProperty(locale)
        expectedKeys.forEach((key) => {
          expect(translations.default[locale]).toHaveProperty(key)
        })
      })
    })
  })

  describe('Проверка правильности перевода слова "token"', () => {
    it('проверяет правильность перевода на английском', async () => {
      const translations = await import('@/i18n/translations')

      expect(translations.default.en.token).toBe(tokenTranslations.en)
    })

    it('проверяет правильность перевода на немецком', async () => {
      const translations = await import('@/i18n/translations')

      expect(translations.default.de.token).toBe(tokenTranslations.de)
    })

    it('проверяет правильность перевода на французском', async () => {
      const translations = await import('@/i18n/translations')

      expect(translations.default.fr.token).toBe(tokenTranslations.fr)
    })

    it('проверяет правильность перевода на болгарском', async () => {
      const translations = await import('@/i18n/translations')

      expect(translations.default.bg.token).toBe(tokenTranslations.bg)
    })

    it('проверяет правильность перевода на русском', async () => {
      const translations = await import('@/i18n/translations')

      expect(translations.default.ru.token).toBe(tokenTranslations.ru)
    })

    it('проверяет правильность перевода на китайском', async () => {
      const translations = await import('@/i18n/translations')

      expect(translations.default.zh.token).toBe(tokenTranslations.zh)
    })
  })
})
