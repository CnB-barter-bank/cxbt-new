import { defineStore } from 'pinia'
import { i18n } from 'src/boot/i18n'

export const useI18nStore = defineStore('i18n', {
  state: () => ({
    availableLanguages: [
      { code: 'en', name: 'English', flag: '🇬🇧' },
      { code: 'ru', name: 'Русский', flag: '🇷🇺' },
      { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
      { code: 'fr', name: 'Français', flag: '🇫🇷' },
      { code: 'zh', name: '中文', flag: '🇨🇳' },
      { code: 'bg', name: 'Български', flag: '🇧🇬' }
    ]
  }),

  getters: {
    currentLocale: () => i18n.global.locale.value,
    currentLanguage: state => {
      return (
        state.availableLanguages.find(lang => lang.code === i18n.global.locale.value) ||
        state.availableLanguages[0]
      )
    }
  },

  actions: {
    setLocale(localeCode) {
      if (this.availableLanguages.some(lang => lang.code === localeCode)) {
        i18n.global.locale.value = localeCode
        localStorage.setItem('locale', localeCode)
      }
    },

    toggleLocale() {
      const currentIndex = this.availableLanguages.findIndex(
        lang => lang.code === this.currentLocale
      )
      const nextIndex = (currentIndex + 1) % this.availableLanguages.length
      this.setLocale(this.availableLanguages[nextIndex].code)
    }
  }
})
