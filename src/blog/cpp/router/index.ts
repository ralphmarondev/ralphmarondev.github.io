import type {RouteRecordRaw} from 'vue-router'

export const CPPRoutes: RouteRecordRaw[] = [
	{
		path: '/blog/cpp',
		name: 'cpp-programming',
		component: () => import('@/blog/cpp/CPlusPlusProgrammingIndex.vue'),
		meta: {title: 'C++ Programming Tutorial', icon: '/ralphmaron.png'}
	},
	{
		path: '/blog/cpp-introduction',
		name: 'cpp-introduction',
		component: () => import('@/blog/cpp/basic/01-introduction/IntroductionIndex.vue'),
		meta: {title: 'C++ Language Introduction', icon: '/ralphmaron.png'}
	}
]