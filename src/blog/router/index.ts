import type {RouteRecordRaw} from 'vue-router'

export const blogRoutes: RouteRecordRaw[] = [
	{
		path: '/blog/c-programming-language',
		name: 'c-programming',
		component: () => import('../cprogramming/CProgrammingIndex.vue'),
		meta: {title: 'C Programming Tutorial', icon: '/ralphmaron.png'}
	},
	{
		path: '/blog/c-introduction',
		name: 'c-introduction',
		component: () => import('@/blog/cprogramming/01-introduction/IntroductionIndex.vue'),
		meta: {title: 'C Language Introduction', icon: '/ralphmaron.png'}
	},
	{
		path: '/blog/c-compilation-process',
		name: 'c-compilation-process',
		component: () => import('@/blog/cprogramming/02-compilation-process/CompilationProcessIndex.vue'),
		meta: {title: 'C Compilation Process', icon: '/ralphmaron.png'}
	},
	{
		path: '/blog/c-identifiers',
		name: 'c-identifiers',
		component: () => import('@/blog/cprogramming/03-identifiers/IdentifiersIndex.vue'),
		meta: {title: 'Identifiers in C', icon: '/ralphmaron.png'}
	},
	{
		path: '/blog/c-keywords',
		name: 'c-keywords',
		component: () => import('@/blog/cprogramming/04-keywords/KeywordsIndex.vue'),
		meta: {title: 'Identifiers in C', icon: '/ralphmaron.png'}
	},
	{
		path: '/blog/c-variables',
		name: 'c-variables',
		component: () => import('@/blog/cprogramming/05-variables/VariablesIndex.vue'),
		meta: {title: 'C Language Variables', icon: '/ralphmaron.png'}
	},
	{
		path: '/blog/c-data-types',
		name: 'c-data-types',
		component: () => import('@/blog/cprogramming/06-data-type/DataTypeIndex.vue'),
		meta: {title: 'C Data Types', icon: '/ralphmaron.png'}
	},
	{
		path: '/blog/c-quiz-basics',
		name: 'c-quiz-basics',
		component: () => import('@/blog/cprogramming/07-quiz/QuizOneIndex.vue'),
		meta: {title: 'C - Quiz One', icon: '/ralphmaron.png'}
	},
	{
		path: '/blog/c-input-output',
		name: 'c-input-output',
		component: () => import('@/blog/cprogramming/08-input-and-output/InputAndOutputIndex.vue'),
		meta: {title: 'C Input and Output', icon: '/ralphmaron.png'}
	},
	{
		path: '/blog/c-operators',
		name: 'c-operators',
		component: () => import('@/blog/cprogramming/09-operators/OperatorsIndex.vue'),
		meta: {title: 'C Operators', icon: '/ralphmaron.png'}
	},
	{
		path: '/blog/c-quiz-io-operators',
		name: 'c-quiz-io-operators',
		component: () => import('@/blog/cprogramming/10-quiz/QuizTwoIndex.vue'),
		meta: {title: 'C - Quiz Two', icon: '/ralphmaron.png'}
	},
	{
		path: '/blog/c-conditional-statements',
		name: 'c-conditional-statements',
		component: () => import('@/blog/cprogramming/11-conditional-statements/ConditionalStatementsIndex.vue'),
		meta: {title: 'Conditional Statements', icon: '/ralphmaron.png'}
	},
	{
		path: '/blog/c-loops',
		name: 'c-loops',
		component: () => import('@/blog/cprogramming/12-loops/LoopsIndex.vue'),
		meta: {title: 'Conditional Statements', icon: '/ralphmaron.png'}
	},
	{
		path: '/blog/c-quiz-conditional-loops',
		name: 'c-quiz-conditional-loops',
		component: () => import('@/blog/cprogramming/13-quiz/QuizThreeIndex.vue'),
		meta: {title: 'Conditional Statements', icon: '/ralphmaron.png'}
	}
]
