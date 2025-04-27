import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(_to, _from, _savedPosition) {
    // Scroll to the top of the page on navigation
    return { top: 0 }
  },
})

router.beforeEach((to, _from, next) => {
  if (to.meta.title) {
    document.title = (to.meta.title as string) || 'CodeStream'
  }
  next()
})

export default router
