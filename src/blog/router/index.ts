import type {RouteRecordRaw} from 'vue-router'
import {CProgrammingRoutes} from '@/blog/cprogramming/router'

export const blogRoutes: RouteRecordRaw[] = [
	...CProgrammingRoutes
]