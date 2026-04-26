import type {RouteRecordRaw} from 'vue-router'

export const JavaProgrammingRoutes: RouteRecordRaw[] = [
	{
		path: '/java-programming-language',
		name: 'java-programming-language',
		component: () => import('@/features/tutorials/programming/java/JavaProgrammingIndex.vue'),
		meta: {title: 'Java Programming Tutorial'}
	},
	{
		path: '/java-introduction',
		name: 'java-introduction',
		component: () => import('@/features/tutorials/programming/java/views/01-introduction/01-what-is-java/WhatIsJavaIndex.vue'),
		meta: {title: 'What is Java?'}
	},
	{
		path: '/java-installation',
		name: 'java-installation',
		component: () => import('@/features/tutorials/programming/java/views/01-introduction/02-java-installation/JavaInstallationIndex.vue'),
		meta: {title: 'Install Java (JDK Setup)'}
	},
	{
		path: '/java-jvm-jre-jdk',
		name: 'java-jvm-jre-jdk',
		component: () => import('@/features/tutorials/programming/java/views/01-introduction/03-java-jdk/JavaJdkIndex.vue'),
		meta: {title: 'JVM, JRE, and JDK'}
	},
	{
		path: '/java-hello-world',
		name: 'java-hello-world',
		component: () => import('@/features/tutorials/programming/java/views/01-introduction/04-hello-world/HelloWorldIndex.vue'),
		meta: {title: 'First Java Program'}
	},
	{
		path: '/java-data-types',
		name: 'java-data-types',
		component: () => import('@/features/tutorials/programming/java/views/02-basics/01-data-types/DataTypesIndex.vue'),
		meta: {title: 'Data Types'}
	},
	{
		path: '/java-variables',
		name: 'java-variables',
		component: () => import('@/features/tutorials/programming/java/views/02-basics/02-variables/VariablesIndex.vue'),
		meta: {title: 'Variables'}
	},
	{
		path: '/java-operators',
		name: 'java-operators',
		component: () => import('@/features/tutorials/programming/java/views/02-basics/03-operators/OperatorsIndex.vue'),
		meta: {title: 'Operators'}
	},
	{
		path: '/java-input-output',
		name: 'java-input-output',
		component: () => import('@/features/tutorials/programming/java/views/02-basics/04-input-output/InputOutputIndex.vue'),
		meta: {title: 'Input and Output'}
	},
	{
		path: '/java-identifiers-keywords',
		name: 'java-identifiers-keywords',
		component: () => import('@/features/tutorials/programming/java/views/02-basics/05-identifiers/IdentifiersAndKeywordsIndex.vue'),
		meta: {title: 'Identifiers and Keywords'}
	}
]