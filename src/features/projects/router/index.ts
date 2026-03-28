import type {RouteRecordRaw} from 'vue-router'
import {lumiRoutes} from '@/features/projects/lumi/router'

export const projectRoutes: RouteRecordRaw[] = [
	...lumiRoutes
]