import { boot } from 'quasar/wrappers'
import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'

// eslint-disable-next-line import/no-unresolved
import routes from './routes.js'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

let Router

export default boot(({ app }) => {
  let createHistory
  if (process.env.SERVER) {
    createHistory = createMemoryHistory
  } else if (process.env.VUE_ROUTER_MODE === 'history') {
    createHistory = createWebHistory
  } else {
    createHistory = createWebHashHistory
  }

  Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  app.use(Router)
})

export { Router }
