const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/home/HomeIndex.vue")
  }
]

export default routes
