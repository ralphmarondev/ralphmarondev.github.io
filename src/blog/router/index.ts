import type {RouteRecordRaw} from 'vue-router'
import {CProgrammingRoutes} from '@/blog/cprogramming/router'
import {CPPRoutes} from '@/blog/cpp/router'

export const blogRoutes: RouteRecordRaw[] = [
	...CProgrammingRoutes,
	...CPPRoutes
]