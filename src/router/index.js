import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */


// TODO: Make sure to share this solution for allowing the store into the routes declarations.
// Via making the default export a function that returns the routes array with an argument of store.
// then we can assign the returned routes array to it here in the new VueRouter

export default async function ({store}/* { store, ssrContext } */) {
  const Router = new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })
  Router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requireAuth) && !store.getters['user/logged']) {
      next({ name: 'login', query: { next: to.fullPath } })
    } else {
      next()
    }
  })
  return Router
}
