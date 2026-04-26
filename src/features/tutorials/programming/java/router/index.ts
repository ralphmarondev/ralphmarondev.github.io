import type {RouteRecordRaw} from 'vue-router'

export const JavaProgrammingRoutes: RouteRecordRaw[] = [
	// Basics
	{
		path: '/java-programming-language',
		name: 'java-programming-language',
		component: () => import('@/features/tutorials/programming/java/JavaProgrammingIndex.vue'),
		meta: {title: 'Java Programming Tutorial'}
	}
]