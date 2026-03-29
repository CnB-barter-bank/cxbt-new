import {
  createRouter as createVueRouter,
  createWebHistory as createVueWebHistory,
} from 'vue-router'

// Обёртки для функций, чтобы их можно было протестировать
export function createRouter(options) {
  return createVueRouter(options)
}

export function createWebHistory(base) {
  return createVueWebHistory(base)
}

const routes = [
  {
    path: '/',
    component: () => import('src/pages/LandingPage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
