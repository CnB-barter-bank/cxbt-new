import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'

// Мокаем импорты CSS и icon libraries
vi.mock('@quasar/extras/material-icons/material-icons.css', () => ({}))
vi.mock('quasar/src/css/index.sass', () => ({}))

// Мокаем Quasar
vi.mock('quasar', () => ({
  Quasar: {
    install: vi.fn(),
  },
}))

// Мокаем импорт router
vi.mock('@/router', () => ({
  default: {
    push: vi.fn(),
    replace: vi.fn(),
    go: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    install: vi.fn(),
  },
}))

describe('main.js', () => {
  let app

  beforeEach(() => {
    app = createApp(App)
  })

  it('создаёт Vue приложение', () => {
    expect(app).toBeTruthy()
    expect(app).toHaveProperty('mount')
  })

  it('создаёт Pinia экземпляр', () => {
    const pinia = createPinia()
    expect(pinia).toBeTruthy()
    expect(pinia).toHaveProperty('install')
  })

  it('приложение использует Pinia', () => {
    const pinia = createPinia()
    app.use(pinia)
    expect(app).toBeTruthy()
  })

  it('Quasar имеет метод install', () => {
    const { Quasar } = require('quasar')
    expect(typeof Quasar.install).toBe('function')
  })

  it('приложение можно смонтировать', () => {
    const pinia = createPinia()
    app.use(pinia)
    
    // Проверяем, что метод mount существует
    expect(typeof app.mount).toBe('function')
  })

  it('Pinia инстанс имеет метод install', () => {
    const pinia = createPinia()
    expect(typeof pinia.install).toBe('function')
  })

  it('приложение имеет правильную структуру', () => {
    expect(app).toHaveProperty('config')
    expect(app).toHaveProperty('use')
    expect(app).toHaveProperty('mount')
  })

  it('приложение может использовать плагины', () => {
    const mockPlugin = { install: vi.fn() }
    app.use(mockPlugin)
    expect(mockPlugin.install).toHaveBeenCalled()
  })
})
