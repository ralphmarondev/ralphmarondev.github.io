import {createRouter, createWebHashHistory} from 'vue-router'
import {useAuthStore} from '@/store/useAuthStore'
import {blogRoutes} from '@/blog/router'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'portfolio',
			component: () => import('@/views/portfolio/PortfolioIndex.vue'),
			meta: {title: 'Ralph Maron Eda', icon: '/ralphmaron.png'}
		},
		...blogRoutes,
		// private
		{
			path: '/login',
			name: 'login',
			component: () => import('@/views/login/LoginIndex.vue'),
			meta: {title: 'Login', icon: '/favicon.jpg'}
		},
		{
			path: '/dashboard',
			name: 'dashboard',
			component: () => import('@/views/dashboard/DashboardIndex.vue'),
			meta: {requiresAuth: true, title: 'Dashboard', icon: '/favicon.jpg'}
		},
		{
			path: '/memories',
			name: 'memories',
			component: () => import('@/views/memories/memory-list/MemoryListIndex.vue'),
			meta: {requiresAuth: true, title: 'Memories', icon: '/favicon.jpg'}
		},
		{
			path: '/details/:id',
			name: 'details',
			component: () => import('@/views/memories/memory-details/DetailsIndex.vue'),
			meta: {requiresAuth: true, title: 'Details', icon: '/favicon.jpg'}
		},
		{
			path: '/new-memory',
			name: 'new-memory',
			component: () => import('@/views/memories/new-memory/NewMemoryIndex.vue'),
			meta: {requiresAuth: true, title: 'New Memory', icon: '/favicon.jpg'}
		},
		{
			path: '/:pathMatch(.*)*',
			name: 'not-found',
			component: () => import('@/components/NotFound.vue'),
			meta: {title: 'Page Not Found', icon: '/favicon.jpg'}
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

router.beforeEach(async (to, _, next) => {
	const auth = useAuthStore()

	if (to.meta.requiresAuth) {
		if (!auth.user && auth.loading) {
			await auth.fetchUser()
		}

		if (!auth.user) return next({name: 'login'})
	}

	if (to.meta?.title) document.title = to.meta.title as string
	if (to.meta?.icon) {
		const link: HTMLLinkElement = document.querySelector(`link[rel~='icon']`) || document.createElement('link')
		link.rel = 'icon'
		link.href = to.meta.icon as string
		document.head.appendChild(link)
	}

	next()
})

export default router
