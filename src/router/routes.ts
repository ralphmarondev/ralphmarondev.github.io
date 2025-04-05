const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Home | Ralph Maron Eda',
    },
    component: () => import('@/views/home/HomeIndex.vue'),
  },
  {
    path: '/services',
    name: 'services',
    meta: {
      title: 'Services | Ralph Maron Eda',
    },
    component: () => import('@/views/services/ServicesIndex.vue'),
  },
  {
    path: '/skills',
    name: 'skills',
    meta: {
      title: 'Skills | Ralph Maron Eda',
    },
    component: () => import('@/views/skills/SkillsIndex.vue'),
  },
  {
    path: '/projects',
    name: 'projects',
    meta: {
      title: 'Projects | Ralph Maron Eda',
    },
    component: () => import('@/views/projects/ProjectIndex.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    meta: {
      title: 'Contact | Ralph Maron Eda',
    },
    component: () => import('@/views/contact/ContactIndex.vue'),
  },
  {
    path: '/apps/password-keeper',
    name: 'password-keeper-auth',
    meta: {
      title: 'Auth | Password Keeper',
    },
    component: () => import('@/views/apps/password-keeper/auth/AuthIndex.vue'),
  },
  {
    path: '/apps/password-keeper/home',
    name: 'password-keeper-home',
    meta: {
      title: 'Home | Password Keeper',
    },
    component: () => import('@/views/apps/password-keeper/home/HomeIndex.vue'),
  },
]

export default routes
