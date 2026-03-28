import type {RouteRecordRaw} from 'vue-router'

export const privateRoutes: RouteRecordRaw[] = [
	{
		path: '/private/login',
		name: 'login',
		component: () => import('@/features/private/views/login/LoginIndex.vue'),
		meta: {title: 'Login', icon: '/favicon.jpg'}
	},
	{
		path: '/private/dashboard',
		name: 'dashboard',
		component: () => import('@/features/private/views/dashboard/DashboardIndex.vue'),
		meta: {requiresAuth: true, title: 'Dashboard', icon: '/favicon.jpg'}
	},
	{
		path: '/private/memories',
		name: 'memories',
		component: () => import('@/features/private/views/memories/memory-list/MemoryListIndex.vue'),
		meta: {requiresAuth: true, title: 'Memories', icon: '/favicon.jpg'}
	},
	{
		path: '/private/details/:id',
		name: 'details',
		component: () => import('@/features/private/views/memories/memory-details/DetailsIndex.vue'),
		meta: {requiresAuth: true, title: 'Details', icon: '/favicon.jpg'}
	},
	{
		path: '/private/new-memory',
		name: 'new-memory',
		component: () => import('@/features/private/views/memories/new-memory/NewMemoryIndex.vue'),
		meta: {requiresAuth: true, title: 'New Memory', icon: '/favicon.jpg'}
	}
]