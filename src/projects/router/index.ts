import type {RouteRecordRaw} from 'vue-router'
import {lumiRoutes} from '@/projects/lumi/router'

export const projectRoutes: RouteRecordRaw[] = [
	...lumiRoutes
]