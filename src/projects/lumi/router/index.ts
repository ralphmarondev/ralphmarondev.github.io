import type {RouteRecordRaw} from 'vue-router'

export const lumiRoutes: RouteRecordRaw[] = [
	{
		path: '/projects/lumi-os',
		name: 'lumi-os',
		component: () => import('@/projects/lumi/LumiIndex.vue'),
		meta: {title: 'Lumi Operating System', icon: '/ralphmaron.png'}
	}
]