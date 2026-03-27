import { config } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import { h, defineComponent } from 'vue'

// Mock window.ethereum
global.window = global.window || {}
global.window.ethereum = {
  request: vi.fn(),
  on: vi.fn(),
  removeAllListeners: vi.fn(),
  send: vi.fn()
}

// Mock navigator.clipboard
global.navigator = {
  ...global.navigator,
  clipboard: {
    writeText: vi.fn().mockResolvedValue(undefined)
  }
}

// Mock localStorage
global.localStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn()
}

// Create functional stubs for Quasar components
const createFunctionalStub = (name, className = '') => {
  return defineComponent({
    name,
    setup(props, { slots }) {
      return () => h('div', { class: className }, slots.default ? slots.default() : [])
    }
  })
}

// Setup Pinia
config.global.plugins = [[Quasar, {}], createPinia()]

// Mock i18n
config.global.mocks = {
  $t: key => key,
  $tc: (key, count) => key,
  $n: value => value,
  $d: value => value
}

// Stubs for Quasar components
config.global.stubs = {
  QIcon: createFunctionalStub('QIcon', 'q-icon'),
  QCard: createFunctionalStub('QCard', 'q-card'),
  QCardSection: createFunctionalStub('QCardSection', 'q-card-section'),
  QCardActions: createFunctionalStub('QCardActions', 'q-card-actions'),
  QBtn: createFunctionalStub('QBtn', 'q-btn'),
  QBtnDropdown: createFunctionalStub('QBtnDropdown', 'q-btn q-btn-dropdown'),
  QSpinner: createFunctionalStub('QSpinner', 'q-spinner'),
  QBanner: createFunctionalStub('QBanner', 'q-banner'),
  QChip: createFunctionalStub('QChip', 'q-chip'),
  QAvatar: createFunctionalStub('QAvatar', 'q-avatar'),
  QItem: createFunctionalStub('QItem', 'q-item'),
  QItemSection: createFunctionalStub('QItemSection', 'q-item-section'),
  QItemLabel: createFunctionalStub('QItemLabel', 'q-item-label'),
  QList: createFunctionalStub('QList', 'q-list'),
  QTooltip: createFunctionalStub('QTooltip', 'q-tooltip'),
  QInput: createFunctionalStub('QInput', 'q-input'),
  QSelect: createFunctionalStub('QSelect', 'q-select'),
  QForm: createFunctionalStub('QForm', 'q-form'),
  QDialog: createFunctionalStub('QDialog', 'q-dialog'),
  QInnerLoading: createFunctionalStub('QInnerLoading', 'q-inner-loading')
}
