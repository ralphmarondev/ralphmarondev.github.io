import {createRouter, createWebHashHistory} from 'vue-router'
import {useAuthStore} from '@/features/private/store/useAuthStore.ts'
import {privateRoutes} from '@/features/private/router'
import {projectRoutes} from '@/features/projects/router'
import {tutorialRoutes} from '@/features/tutorials/router'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'portfolio',
			component: () => import('@/features/portfolio/PortfolioIndex.vue'),
			meta: {title: 'Ralph Maron Eda', icon: '/ralphmaron.png'}
		},
		{
			path: '/v1',
			name: 'portfolio-v1',
			component: () => import('@/features/portfolio/archive/v1/PortfolioIndex.vue'),
			meta: {title: 'Ralph Maron Eda', icon: '/ralphmaron.png'}
		},
		{
			path: '/blog',
			name: 'blog',
			component: () => import('@/features/tutorials/BlogIndex.vue'),
			meta: {title: 'Blogs', icon: '/ralphmaron.png'}
		},
		{
			path: '/projects',
			name: 'projects',
			component: () => import('@/features/projects/ProjectIndex.vue'),
			meta: {title: 'Projects', icon: '/ralphmaron.png'}
		},
		...privateRoutes,
		...projectRoutes,
		...tutorialRoutes,
		{
			path: '/:pathMatch(.*)*',
			name: 'not-found',
			component: () => import('@/shared/views/NotFoundIndex.vue'),
			meta: {title: 'Page Not Found', icon: '/ralphmaron.png'}
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
