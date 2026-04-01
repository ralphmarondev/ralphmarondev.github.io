import type {RouteRecordRaw} from 'vue-router'

export const lumiRoutes: RouteRecordRaw[] = [
	{
		path: '/projects/lumi',
		name: 'lumi',
		component: () => import('@/features/projects/lumi/LumiIndex.vue'),
		meta: {title: 'Lumi Operating System', icon: '/ralphmaron.png'}
	}
]