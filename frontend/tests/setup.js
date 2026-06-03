import { vi } from 'vitest'
import { config } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'
import { ref } from 'vue'

// Моки для Web3Modal библиотек
vi.mock('@web3modal/wagmi/vue', () => ({
  createWeb3Modal: vi.fn(),
  useWeb3Modal: vi.fn(() => ({ open: vi.fn() })),
  useWeb3ModalAccount: vi.fn(() => ({
    address: ref(null),
    isConnected: ref(false),
    chainId: ref(null),
    chain: ref(null),
  })),
  useWeb3ModalProvider: vi.fn(() => ({
    walletProvider: ref(null),
  })),
}))

vi.mock('@wagmi/core', () => ({
  createConfig: vi.fn(),
  http: vi.fn(),
  reconnect: vi.fn(),
}))

vi.mock('@tanstack/vue-query', () => ({
  QueryClient: vi.fn(),
  VueQueryPlugin: {
    install: vi.fn(),
  },
}))

vi.mock('@web3modal/wagmi', () => ({
  createWeb3Modal: vi.fn(),
  defaultWagmiConfig: vi.fn(),
}))

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

// Глобальная конфигурация для Vue Test Utils
config.global.stubs = {
  // Заглушки для Quasar компонентов
  'q-page': { template: '<div><slot /></div>' },
  'q-btn': { template: '<button><slot /></button>' },
  'q-input': { template: '<input />' },
  'q-card': { template: '<div><slot /></div>' },
  'q-card-section': { template: '<div><slot /></div>' },
  'q-layout': { template: '<div><slot /></div>' },
  'q-page-container': { template: '<div><slot /></div>' },
  'q-header': { template: '<header><slot /></header>' },
  'q-footer': { template: '<footer><slot /></footer>' },
  'q-toolbar': { template: '<div><slot /></div>' },
  'q-toolbar-title': { template: '<div><slot /></div>' },
  'q-icon': { template: '<i />' },
  'q-avatar': { template: '<div><slot /></div>' },
  'q-img': { template: '<img />' },
  'q-space': { template: '<div />' },
  'q-separator': { template: '<hr />' },
  'q-form': { template: '<form><slot /></form>' },
  'q-select': { template: '<select />' },
  'q-checkbox': { template: '<input type="checkbox" />' },
  'q-radio': { template: '<input type="radio" />' },
  'q-toggle': { template: '<input type="checkbox" />' },
  'q-slider': { template: '<input type="range" />' },
  'q-field': { template: '<div><slot /></div>' },
  'q-field-label': { template: '<label><slot /></label>' },
  'q-field-control': { template: '<div><slot /></div>' },
  'q-inner-loading': { template: '<div><slot /></div>' },
  'q-spinner': { template: '<div />' },
  'q-spinner-gears': { template: '<div />' },
  'q-spinner-dots': { template: '<div />' },
  'q-dialog': { template: '<div><slot /></div>' },
  'q-menu': { template: '<div><slot /></div>' },
  'q-popup-proxy': { template: '<div><slot /></div>' },
  'q-date': { template: '<div />' },
  'q-time': { template: '<div />' },
  'q-table': { template: '<table><slot /></table>' },
  'q-tr': { template: '<tr><slot /></tr>' },
  'q-td': { template: '<td><slot /></td>' },
  'q-th': { template: '<th><slot /></th>' },
  'q-tab': { template: '<div><slot /></div>' },
  'q-tabs': { template: '<div><slot /></div>' },
  'q-tab-panel': { template: '<div><slot /></div>' },
  'q-tab-panels': { template: '<div><slot /></div>' },
  'q-list': { template: '<ul><slot /></ul>' },
  'q-item': { template: '<li><slot /></li>' },
  'q-item-section': { template: '<span><slot /></span>' },
  'q-item-label': { template: '<span><slot /></span>' },
  'q-banner': { template: '<div><slot /></div>' },
  'q-alert': { template: '<div><slot /></div>' },
  'q-ripple': { template: '<div />' },
  'q-scroll-area': { template: '<div><slot /></div>' },
  'q-resize-observer': { template: '<div />' },
  'q-intersection': { template: '<div><slot /></div>' },
  'router-link': { template: '<a><slot /></a>' },
  'router-view': { template: '<div />' },
  'q-tooltip': { template: '<div><slot /></div>' },
}

// Настройка Pinia для тестов
const pinia = createPinia()

// Настройка vue-i18n для тестов
const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: { token: 'token' },
    de: { token: 'Token' },
    fr: { token: 'jeton' },
    bg: { token: 'токен' },
    ru: { token: 'токен' },
    zh: { token: '代币' },
  },
})

config.global.plugins = [pinia, i18n]

// Мок для window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Мок для ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

// Мок для IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))
