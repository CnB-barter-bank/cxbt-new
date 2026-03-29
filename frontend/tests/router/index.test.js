import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createRouter, createWebHistory } from '@/router'

// Мокаем импорт LandingPage для ленивой загрузки
vi.mock('@/pages/LandingPage.vue', () => ({
  default: { template: '<div>Landing Page</div>' },
}))

describe('Router', () => {
  let router

  beforeEach(() => {
    // Создаем роутер для тестов
    router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/',
          component: () => import('@/pages/LandingPage.vue'),
        },
      ],
    })
  })

  it('экспортирует объект роутера', () => {
    expect(router).toBeTruthy()
    expect(router).toHaveProperty('push')
    expect(router).toHaveProperty('replace')
    expect(router).toHaveProperty('go')
  })

  it('имеет массив routes', () => {
    expect(router.options.routes).toBeInstanceOf(Array)
  })

  it('имеет маршрут для корневого пути', () => {
    const rootRoute = router.options.routes.find(route => route.path === '/')
    expect(rootRoute).toBeTruthy()
  })

  it('корневой маршрут имеет компонент', () => {
    const rootRoute = router.options.routes.find(route => route.path === '/')
    expect(rootRoute).toHaveProperty('component')
  })

  it('корневой маршрут использует ленивую загрузку компонента', () => {
    const rootRoute = router.options.routes.find(route => route.path === '/')
    expect(typeof rootRoute.component).toBe('function')
  })

  it('использует createWebHistory для истории', () => {
    expect(router.options.history).toBeTruthy()
  })

  it('имеет ровно один маршрут', () => {
    expect(router.options.routes.length).toBe(1)
  })

  it('маршрут корректно определён', () => {
    const rootRoute = router.options.routes[0]
    expect(rootRoute.path).toBe('/')
    expect(typeof rootRoute.component).toBe('function')
  })

  it('createRouter создаёт объект роутера', () => {
    const testRouter = createRouter({
      history: createWebHistory(),
      routes: [],
    })
    expect(testRouter).toBeTruthy()
    expect(testRouter).toHaveProperty('push')
    expect(testRouter).toHaveProperty('replace')
  })

  it('createWebHistory создаёт объект истории', () => {
    const history = createWebHistory()
    expect(history).toBeTruthy()
  })

  it('ленивая загрузка компонента работает', async () => {
    const rootRoute = router.options.routes.find(route => route.path === '/')
    const component = await rootRoute.component()
    expect(component).toBeTruthy()
  })
})

describe('Router (реальный файл)', () => {
  it('импортирует реальный router', async () => {
    // Импортируем реальный router
    const realRouter = await import('@/router')
    expect(realRouter.default).toBeTruthy()
  })

  it('реальный router имеет правильную структуру', async () => {
    const realRouter = await import('@/router')
    const router = realRouter.default
    
    expect(router).toHaveProperty('push')
    expect(router).toHaveProperty('replace')
    expect(router).toHaveProperty('go')
    expect(router).toHaveProperty('options')
  })

  it('реальный router имеет routes', async () => {
    const realRouter = await import('@/router')
    const router = realRouter.default
    
    expect(router.options.routes).toBeInstanceOf(Array)
  })

  it('реальный router имеет маршрут для корневого пути', async () => {
    const realRouter = await import('@/router')
    const router = realRouter.default
    
    const rootRoute = router.options.routes.find(route => route.path === '/')
    expect(rootRoute).toBeTruthy()
  })

  it('реальный router имеет history', async () => {
    const realRouter = await import('@/router')
    const router = realRouter.default
    
    expect(router.options.history).toBeTruthy()
  })

  it('экспортирует createRouter', async () => {
    const realRouter = await import('@/router')
    expect(realRouter.createRouter).toBeTruthy()
    expect(typeof realRouter.createRouter).toBe('function')
  })

  it('экспортирует createWebHistory', async () => {
    const realRouter = await import('@/router')
    expect(realRouter.createWebHistory).toBeTruthy()
    expect(typeof realRouter.createWebHistory).toBe('function')
  })

  it('реальный router загружает компонент лениво', async () => {
    const realRouter = await import('@/router')
    const router = realRouter.default
    
    const rootRoute = router.options.routes.find(route => route.path === '/')
    const component = await rootRoute.component()
    expect(component).toBeTruthy()
  })
})
