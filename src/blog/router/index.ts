import type {RouteRecordRaw} from 'vue-router'

export const blogRoutes: RouteRecordRaw[] = [
	{
		path: '/blog/c-programming-language',
		name: 'c-programming',
		component: () => import('../cprogramming/CProgrammingIndex.vue'),
		meta: {title: 'C Programming Tutorial', icon: '/ralphmaron.png'}
	},
	{
		path: '/blog/c-introduction',
		name: 'c-introduction',
		component: () => import('../cprogramming/introduction/IntroductionIndex.vue'),
		meta: {title: 'C Language Introduction', icon: '/ralphmaron.png'}
	},
	{
		path: '/blog/c-identifiers',
		name: 'c-identifiers',
		component: () => import('../cprogramming/identifiers/IdentifiersIndex.vue'),
		meta: {title: 'Identifiers in C', icon: '/ralphmaron.png'}
	},
	{
		path: '/blog/c-variables',
		name: 'c-variables',
		component: () => import('../cprogramming/variables/VariablesIndex.vue'),
		meta: {title: 'C Language Variables', icon: '/ralphmaron.png'}
	}
]
