import {createRouter, createWebHashHistory} from 'vue-router'
import {useAuthStore} from '@/private/store/useAuthStore.ts'
import {blogRoutes} from '@/blog/router'
import {privateRoutes} from '@/private/router'
import {projectRoutes} from '@/projects/router'

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			name: 'portfolio',
			component: () => import('@/portfolio/PortfolioIndex.vue'),
			meta: {title: 'Ralph Maron Eda', icon: '/ralphmaron.png'}
		},
		{
			path: '/blog',
			name: 'blog',
			component: () => import('@/blog/BlogIndex.vue'),
			meta: {title: 'Blogs', icon: '/ralphmaron.png'}
		},
		{
			path: '/projects',
			name: 'projects',
			component: () => import('@/projects/ProjectIndex.vue'),
			meta: {title: 'Projects', icon: '/ralphmaron.png'}
		},
		...blogRoutes,
		...projectRoutes,
		...privateRoutes,
		{
			path: '/:pathMatch(.*)*',
			name: 'not-found',
			component: () => import('@/components/NotFound.vue'),
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
