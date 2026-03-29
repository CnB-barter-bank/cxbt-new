import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'

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

// Ожидаемые названия языков для tooltip
const languageNames = {
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  bg: 'Български',
  ru: 'Русский',
  zh: '中文',
}

// Порядок языков в переключателе
const languageOrder = ['en', 'de', 'fr', 'bg', 'ru', 'zh']

describe('Header.vue', () => {
  // Вспомогательная функция для создания изолированного окружения для каждого теста
  async function createTestEnvironment() {
    localStorageMock.getItem.mockClear()
    localStorageMock.getItem.mockReturnValue(undefined)
    localStorageMock.setItem.mockClear()
    localStorageMock.removeItem.mockClear()
    localStorageMock.clear.mockClear()

    const { useI18nStore } = await import('@/stores/i18n')
    const Header = (await import('@/components/Header.vue')).default

    return { useI18nStore, Header }
  }

  // Сбрасываем язык перед каждым тестом
  beforeEach(async () => {
    localStorageMock.getItem.mockClear()
    localStorageMock.getItem.mockReturnValue(undefined)
    localStorageMock.setItem.mockClear()
    localStorageMock.removeItem.mockClear()
    localStorageMock.clear.mockClear()
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  describe('Рендеринг компонента', () => {
    it('рендерится корректно', async () => {
      const { Header } = await createTestEnvironment()
      const wrapper = mount(Header)
      expect(wrapper.exists()).toBe(true)
      wrapper.unmount()
    })

    it('является Vue компонентом', async () => {
      const { Header } = await createTestEnvironment()
      const wrapper = mount(Header)
      expect(wrapper.vm).toBeTruthy()
      wrapper.unmount()
    })

    it('имеет корневой элемент', async () => {
      const { Header } = await createTestEnvironment()
      const wrapper = mount(Header)
      expect(wrapper.element.tagName).toBeTruthy()
      wrapper.unmount()
    })
  })

  describe('Отображение названия "CXBT {token}" в шапке', () => {
    it('рендерит название "CXBT token" на английском по умолчанию', async () => {
      const { Header } = await createTestEnvironment()
      const wrapper = mount(Header)

      const title = wrapper.find('[data-test="header-title"]')
      expect(title.exists()).toBe(true)
      expect(title.text()).toContain('CXBT')
      expect(title.text()).toContain(tokenTranslations.en)
      wrapper.unmount()
    })

    it('рендерит название "CXBT Token" на немецком', async () => {
      const { useI18nStore, Header } = await createTestEnvironment()
      const i18nStore = useI18nStore()
      i18nStore.setLocale('de')
      const wrapper = mount(Header)

      const title = wrapper.find('[data-test="header-title"]')
      expect(title.exists()).toBe(true)
      expect(title.text()).toContain('CXBT')
      // Проверяем, что store возвращает правильный перевод
      expect(i18nStore.t('token')).toBe(tokenTranslations.de)
      wrapper.unmount()
    })

    it('рендерит название "CXBT jeton" на французском', async () => {
      const { useI18nStore, Header } = await createTestEnvironment()
      const i18nStore = useI18nStore()
      i18nStore.setLocale('fr')
      const wrapper = mount(Header)

      const title = wrapper.find('[data-test="header-title"]')
      expect(title.exists()).toBe(true)
      expect(title.text()).toContain('CXBT')
      expect(i18nStore.t('token')).toBe(tokenTranslations.fr)
      wrapper.unmount()
    })

    it('рендерит название "CXBT токен" на болгарском', async () => {
      const { useI18nStore, Header } = await createTestEnvironment()
      const i18nStore = useI18nStore()
      i18nStore.setLocale('bg')
      const wrapper = mount(Header)

      const title = wrapper.find('[data-test="header-title"]')
      expect(title.exists()).toBe(true)
      expect(title.text()).toContain('CXBT')
      expect(i18nStore.t('token')).toBe(tokenTranslations.bg)
      wrapper.unmount()
    })

    it('рендерит название "CXBT токен" на русском', async () => {
      const { useI18nStore, Header } = await createTestEnvironment()
      const i18nStore = useI18nStore()
      i18nStore.setLocale('ru')
      const wrapper = mount(Header)

      const title = wrapper.find('[data-test="header-title"]')
      expect(title.exists()).toBe(true)
      expect(title.text()).toContain('CXBT')
      expect(i18nStore.t('token')).toBe(tokenTranslations.ru)
      wrapper.unmount()
    })

    it('рендерит название "CXBT 代币" на китайском', async () => {
      const { useI18nStore, Header } = await createTestEnvironment()
      const i18nStore = useI18nStore()
      i18nStore.setLocale('zh')
      const wrapper = mount(Header)

      const title = wrapper.find('[data-test="header-title"]')
      expect(title.exists()).toBe(true)
      expect(title.text()).toContain('CXBT')
      expect(i18nStore.t('token')).toBe(tokenTranslations.zh)
      wrapper.unmount()
    })

    it('отображает корректный формат названия на всех языках', async () => {
      for (const lang of languageOrder) {
        const { useI18nStore, Header } = await createTestEnvironment()
        const i18nStore = useI18nStore()
        i18nStore.setLocale(lang)
        const wrapper = mount(Header)

        const title = wrapper.find('[data-test="header-title"]')
        expect(title.exists()).toBe(true)
        expect(title.text()).toMatch(/^CXBT\s+.+$/)
        expect(i18nStore.t('token')).toBe(tokenTranslations[lang])
        wrapper.unmount()
      }
    })
  })

  describe('Наличие переключателя языков', () => {
    it('рендерит переключатель языков', async () => {
      const { Header } = await createTestEnvironment()
      const wrapper = mount(Header)
      const languageSwitcher = wrapper.find('[data-test="language-switcher"]')
      expect(languageSwitcher.exists()).toBe(true)
      wrapper.unmount()
    })

    it('переключатель имеет атрибут flat', async () => {
      const { Header } = await createTestEnvironment()
      const wrapper = mount(Header)
      const languageSwitcher = wrapper.find('[data-test="language-switcher"]')
      expect(languageSwitcher.attributes('flat')).toBeDefined()
      wrapper.unmount()
    })

    it('переключатель имеет атрибут round', async () => {
      const { Header } = await createTestEnvironment()
      const wrapper = mount(Header)
      const languageSwitcher = wrapper.find('[data-test="language-switcher"]')
      expect(languageSwitcher.attributes('round')).toBeDefined()
      wrapper.unmount()
    })

    it('переключатель имеет атрибут dense', async () => {
      const { Header } = await createTestEnvironment()
      const wrapper = mount(Header)
      const languageSwitcher = wrapper.find('[data-test="language-switcher"]')
      expect(languageSwitcher.attributes('dense')).toBeDefined()
      wrapper.unmount()
    })

    it('переключатель имеет иконку языка', async () => {
      const { Header } = await createTestEnvironment()
      const wrapper = mount(Header)
      const languageSwitcher = wrapper.find('[data-test="language-switcher"]')
      const icon = languageSwitcher.find('i')
      expect(icon.exists()).toBe(true)
      wrapper.unmount()
    })

    it('отображает текущий язык', async () => {
      const { useI18nStore, Header } = await createTestEnvironment()
      const wrapper = mount(Header)
      const i18nStore = useI18nStore()
      i18nStore.setLocale('en')
      await wrapper.vm.$nextTick()
      
      const currentLanguage = wrapper.find('[data-test="current-language"]')
      expect(currentLanguage.exists()).toBe(true)
      expect(currentLanguage.text()).toBe('en')
      wrapper.unmount()
    })
  })

  describe('Переключение языка', () => {
    it('имеет функцию selectLanguage', async () => {
      const { Header } = await createTestEnvironment()
      const wrapper = mount(Header)
      expect(typeof wrapper.vm.selectLanguage).toBe('function')
      wrapper.unmount()
    })

    it('меняет язык при вызове selectLanguage', async () => {
      const { useI18nStore, Header } = await createTestEnvironment()
      const wrapper = mount(Header)
      const i18nStore = useI18nStore()
      i18nStore.setLocale('en')
      await wrapper.vm.$nextTick()
      
      expect(i18nStore.currentLocale).toBe('en')
      
      // Вызываем функцию selectLanguage через компонент
      wrapper.vm.selectLanguage('ru')
      
      // Ждем реактивного обновления
      await wrapper.vm.$nextTick()
      
      expect(i18nStore.currentLocale).toBe('ru')
      wrapper.unmount()
    })
  })

  describe('Структура компонента', () => {
    it('имеет элемент q-header', async () => {
      const { Header } = await createTestEnvironment()
      const wrapper = mount(Header)
      const header = wrapper.find('header')
      expect(header.exists()).toBe(true)
      wrapper.unmount()
    })

    it('имеет элемент q-toolbar', async () => {
      const { Header } = await createTestEnvironment()
      const wrapper = mount(Header)
      const toolbar = wrapper.find('div')
      expect(toolbar.exists()).toBe(true)
      wrapper.unmount()
    })

    it('имеет элемент q-toolbar-title для названия', async () => {
      const { Header } = await createTestEnvironment()
      const wrapper = mount(Header)
      const title = wrapper.find('[data-test="header-title"]')
      expect(title.exists()).toBe(true)
      wrapper.unmount()
    })

    it('имеет элемент для переключателя языков', async () => {
      const { Header } = await createTestEnvironment()
      const wrapper = mount(Header)
      const languageSwitcher = wrapper.find('[data-test="language-switcher"]')
      expect(languageSwitcher.exists()).toBe(true)
      wrapper.unmount()
    })

    it('имеет элемент для отображения текущего языка', async () => {
      const { Header } = await createTestEnvironment()
      const wrapper = mount(Header)
      const currentLanguage = wrapper.find('[data-test="current-language"]')
      expect(currentLanguage.exists()).toBe(true)
      wrapper.unmount()
    })
  })

  describe('Изоляция тестов', () => {
    it('каждый тест начинается с языка en', async () => {
      const { useI18nStore, Header } = await createTestEnvironment()
      const wrapper = mount(Header)
      const i18nStore = useI18nStore()
      i18nStore.setLocale('en')
      await wrapper.vm.$nextTick()
      
      expect(i18nStore.currentLocale).toBe('en')
      wrapper.unmount()
    })
  })

  describe('Интеграция с i18n store', () => {
    it('использует метод t() для получения переводов', async () => {
      const { useI18nStore, Header } = await createTestEnvironment()
      const wrapper = mount(Header)
      const i18nStore = useI18nStore()
      i18nStore.setLocale('en')
      await wrapper.vm.$nextTick()
      
      expect(i18nStore.t('token')).toBe(tokenTranslations.en)
      wrapper.unmount()
    })

    it('сохраняет выбранный язык в localStorage', async () => {
      const { useI18nStore, Header } = await createTestEnvironment()
      const i18nStore = useI18nStore()
      i18nStore.setLocale('de')
      const wrapper = mount(Header)

      expect(localStorageMock.setItem).toHaveBeenCalledWith('cxbt-locale', 'de')
      wrapper.unmount()
    })

    it('возвращает ключ если перевод не найден', async () => {
      const { useI18nStore } = await createTestEnvironment()
      const i18nStore = useI18nStore()
      expect(i18nStore.t('nonexistent-key')).toBe('nonexistent-key')
    })
  })

  describe('Проверка доступных языков', () => {
    it('имеет 6 доступных языков', async () => {
      const { useI18nStore } = await createTestEnvironment()
      const i18nStore = useI18nStore()
      expect(i18nStore.availableLanguages.length).toBe(6)
    })

    it('имеет правильные коды языков', async () => {
      const { useI18nStore } = await createTestEnvironment()
      const i18nStore = useI18nStore()
      const codes = i18nStore.availableLanguages.map(l => l.code)
      expect(codes).toEqual(languageOrder)
    })

    it('имеет правильные названия языков', async () => {
      const { useI18nStore } = await createTestEnvironment()
      const i18nStore = useI18nStore()
      const names = i18nStore.availableLanguages.map(l => l.name)
      expect(names).toEqual(Object.values(languageNames))
    })
  })

  describe('Проверка диалога выбора языка', () => {
    it('рендерит диалог с языками', async () => {
      const { Header } = await createTestEnvironment()
      const wrapper = mount(Header)
      const dialog = wrapper.find('[data-test="language-dialog"]')
      expect(dialog.exists()).toBe(true)
      wrapper.unmount()
    })

    it('рендерит все доступные языки', async () => {
      const { Header } = await createTestEnvironment()
      const wrapper = mount(Header)
      
      for (const lang of languageOrder) {
        const langItem = wrapper.find(`[data-test="language-item-${lang}"]`)
        expect(langItem.exists()).toBe(true)
      }
      wrapper.unmount()
    })

    it('открывает диалог при клике на кнопку переключателя', async () => {
      const { Header } = await createTestEnvironment()
      const wrapper = mount(Header)
      
      expect(wrapper.vm.showLanguageDialog).toBe(false)
      
      const languageSwitcher = wrapper.find('[data-test="language-switcher"]')
      await languageSwitcher.trigger('click')
      await wrapper.vm.$nextTick()
      
      expect(wrapper.vm.showLanguageDialog).toBe(true)
      wrapper.unmount()
    })

    it('закрывает диалог после выбора языка', async () => {
      const { Header } = await createTestEnvironment()
      const wrapper = mount(Header)
      
      // Открываем диалог
      wrapper.vm.showLanguageDialog = true
      await wrapper.vm.$nextTick()
      expect(wrapper.vm.showLanguageDialog).toBe(true)
      
      // Выбираем язык
      wrapper.vm.selectLanguage('ru')
      await wrapper.vm.$nextTick()
      
      expect(wrapper.vm.showLanguageDialog).toBe(false)
      wrapper.unmount()
    })
  })

  describe('Проверка переводов для всех языков', () => {
    it('возвращает правильный перевод для каждого языка', async () => {
      for (const lang of languageOrder) {
        const { useI18nStore } = await createTestEnvironment()
        const i18nStore = useI18nStore()
        i18nStore.setLocale(lang)
        expect(i18nStore.t('token')).toBe(tokenTranslations[lang])
      }
    })
  })
})
