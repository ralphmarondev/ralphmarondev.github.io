import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'portfolio',
      component: () => import('@/views/portfolio/PortfolioIndex.vue'),
      meta: {title: 'Ralph Maron Eda', icon: '/ralphmaron.png'}
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return {top: 0}
  }
})

export default router
