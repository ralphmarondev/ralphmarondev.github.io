import type {RouteRecordRaw} from 'vue-router'

export const CPPRoutes: RouteRecordRaw[] = [
	{
		path: '/cpp',
		name: 'cpp-programming',
		component: () => import('@/features/tutorials/programming/cpp/CPlusPlusProgrammingIndex.vue'),
		meta: {title: 'C++ Programming Tutorial', icon: '/ralphmaron.png'}
	},
	{
		path: '/cpp-introduction',
		name: 'cpp-introduction',
		component: () => import('@/features/tutorials/programming/cpp/basic/01-introduction/IntroductionIndex.vue'),
		meta: {title: 'C++ Language Introduction', icon: '/ralphmaron.png'}
	}
]