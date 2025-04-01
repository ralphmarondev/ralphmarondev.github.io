const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Home | Maron OS',
    },
    component: () => import('../views/home/HomeIndex.vue'),
  },
]

export default routes
