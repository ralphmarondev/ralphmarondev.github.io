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
			meta: {title: 'Ralph Maron Eda'}
		},
		{
			path: '/achievements',
			name: 'achievements',
			component: () => import('@/features/portfolio/views/achievements/AchievementsIndex.vue'),
			meta: {title: 'Ralph Maron Eda | Achievements'}
		},
		{
			path: '/tutorials',
			name: 'tutorials',
			component: () => import('@/features/tutorials/TutorialsIndex.vue'),
			meta: {title: 'Tutorials'}
		},
		{
			path: '/projects',
			name: 'projects',
			component: () => import('@/features/projects/ProjectIndex.vue'),
			meta: {title: 'Projects'}
		},
		{
			path: '/privacy-policy',
			name: 'privacy-policy',
			component: () => import('@/shared/views/PrivacyPolicy.vue'),
			meta: {title: 'Privacy Policy'}
		},
		...privateRoutes,
		...projectRoutes,
		...tutorialRoutes,
		{
			path: '/:pathMatch(.*)*',
			name: 'not-found',
			component: () => import('@/shared/views/NotFoundIndex.vue'),
			meta: {title: 'Page Not Found'}
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
	// if (to.meta?.icon) {
	// 	const link: HTMLLinkElement = document.querySelector(`link[rel~='icon']`) || document.createElement('link')
	// 	link.rel = 'icon'
	// 	link.href = to.meta.icon as string
	// 	document.head.appendChild(link)
	// }

	next()
})

export default router
