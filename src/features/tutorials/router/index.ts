import type {RouteRecordRaw} from 'vue-router'
import {CProgrammingRoutes} from '@/features/tutorials/programming/c/router'
import {CPPRoutes} from '@/features/tutorials/programming/cpp/router'
import {JavaProgrammingRoutes} from '@/features/tutorials/programming/java/router'

export const tutorialRoutes: RouteRecordRaw[] = [
	...CProgrammingRoutes,
	...CPPRoutes,
	...JavaProgrammingRoutes
]