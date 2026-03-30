import type {RouteRecordRaw} from 'vue-router'

export const CProgrammingRoutes: RouteRecordRaw[] = [
	// Basics
	{
		path: '/c-programming-language',
		name: 'c-programming',
		component: () => import('@/features/tutorials/programming/c/CProgrammingIndex.vue'),
		meta: {title: 'C Programming Tutorial', icon: '/ralphmaron.png'}
	},
	{
		path: '/c-introduction',
		name: 'c-introduction',
		component: () => import('@/features/tutorials/programming/c/views/basic/01-introduction/IntroductionIndex.vue'),
		meta: {title: 'C Language Introduction', icon: '/ralphmaron.png'}
	},
	{
		path: '/c-compilation-process',
		name: 'c-compilation-process',
		component: () => import('@/features/tutorials/programming/c/views/basic/02-compilation-process/CompilationProcessIndex.vue'),
		meta: {title: 'C Compilation Process in C', icon: '/ralphmaron.png'}
	},
	{
		path: '/c-identifiers',
		name: 'c-identifiers',
		component: () => import('@/features/tutorials/programming/c/views/basic/03-identifiers/IdentifiersIndex.vue'),
		meta: {title: 'Identifiers in C', icon: '/ralphmaron.png'}
	},
	{
		path: '/c-keywords',
		name: 'c-keywords',
		component: () => import('@/features/tutorials/programming/c/views/basic/04-keywords/KeywordsIndex.vue'),
		meta: {title: 'Keywords in C', icon: '/ralphmaron.png'}
	},
	{
		path: '/c-variables',
		name: 'c-variables',
		component: () => import('@/features/tutorials/programming/c/views/basic/05-variables/VariablesIndex.vue'),
		meta: {title: 'C Language Variables', icon: '/ralphmaron.png'}
	},
	{
		path: '/c-data-types',
		name: 'c-data-types',
		component: () => import('@/features/tutorials/programming/c/views/basic/06-data-type/DataTypeIndex.vue'),
		meta: {title: 'C Data Types', icon: '/ralphmaron.png'}
	},
	{
		path: '/c-quiz-basics',
		name: 'c-quiz-basics',
		component: () => import('@/features/tutorials/programming/c/views/basic/07-quiz/QuizOneIndex.vue'),
		meta: {title: 'Quiz Variables and Data Types in C', icon: '/ralphmaron.png'}
	},
	{
		path: '/c-input-output',
		name: 'c-input-output',
		component: () => import('@/features/tutorials/programming/c/views/basic/08-input-and-output/InputAndOutputIndex.vue'),
		meta: {title: 'Input and Output in C', icon: '/ralphmaron.png'}
	},
	{
		path: '/c-operators',
		name: 'c-operators',
		component: () => import('@/features/tutorials/programming/c/views/basic/09-operators/OperatorsIndex.vue'),
		meta: {title: 'Operators in C', icon: '/ralphmaron.png'}
	},
	{
		path: '/c-quiz-io-operators',
		name: 'c-quiz-io-operators',
		component: () => import('@/features/tutorials/programming/c/views/basic/10-quiz/QuizTwoIndex.vue'),
		meta: {title: 'Quiz Input-Output and Operators in C', icon: '/ralphmaron.png'}
	},
	{
		path: '/c-conditional-statements',
		name: 'c-conditional-statements',
		component: () => import('@/features/tutorials/programming/c/views/basic/11-conditional-statements/ConditionalStatementsIndex.vue'),
		meta: {title: 'Conditional Statements in C', icon: '/ralphmaron.png'}
	},
	{
		path: '/c-quiz-conditional-statements',
		name: 'c-quiz-conditional-statements',
		component: () => import('@/features/tutorials/programming/c/views/basic/12-quiz/QuizThreeIndex.vue'),
		meta: {title: 'Quiz Conditional Statements in C', icon: '/ralphmaron.png'}
	},
	{
		path: '/c-loops',
		name: 'c-loops',
		component: () => import('@/features/tutorials/programming/c/views/basic/13-loops/LoopsIndex.vue'),
		meta: {title: 'Loops in C', icon: '/ralphmaron.png'}
	},
	{
		path: '/c-quiz-loops',
		name: 'c-quiz-loops',
		component: () => import('@/features/tutorials/programming/c/views/basic/14-quiz/QuizFourIndex.vue'),
		meta: {title: 'Quiz Loops in C', icon: '/ralphmaron.png'}
	},

	// Functions
	{
		path: '/c-functions',
		name: 'c-functions',
		component: () => import('@/features/tutorials/programming/c/views/functions/01-introduction/IntroductionIndex.vue'),
		meta: {title: 'Functions in C', icon: '/ralphmaron.png'}
	},
	{
		path: '/c-main-function',
		name: 'c-main-function',
		component: () => import('@/features/tutorials/programming/c/views/functions/02-main-function/MainFunctionIndex.vue'),
		meta: {title: 'Main Function in C', icon: '/ralphmaron.png'}
	},
	{
		path: '/c-arrays',
		name: 'c-arrays',
		component: () => import('@/features/tutorials/programming/c/views/arrays/01-introduction/ArrayIntroductionIndex.vue'),
		meta: {title: 'Arrays in C', icon: '/ralphmaron.png'}
	},
	{
		path: '/c-strings',
		name: 'c-strings',
		component: () => import('@/features/tutorials/programming/c/views/strings/01-introduction/StringIntroductionIndex.vue'),
		meta: {title: 'Strings in C', icon: '/ralphmaron.png'}
	},
	{
		path: '/c-structures',
		name: 'c-structures',
		component: () => import('@/features/tutorials/programming/c/views/structures/01-introduction/StructuresIntroductionIndex.vue'),
		meta: {title: 'Structures in C', icon: '/ralphmaron.png'}
	},
	{
		path: '/c-math-functions',
		name: 'c-math-functions',
		component: () => import('@/features/tutorials/programming/c/views/standard-library/math/MathIndex.vue'),
		meta: {title: 'Math Functions in C', icon: '/ralphmaron.png'}
	},
	{
		path: '/c-string-functions',
		name: 'c-string-functions',
		component: () => import('@/features/tutorials/programming/c/views/standard-library/strings/StringsIndex.vue'),
		meta: {title: 'String Functions in C', icon: '/ralphmaron.png'}
	},
	{
		path: '/c-utility-functions',
		name: 'c-utility-functions',
		component: () => import('@/features/tutorials/programming/c/views/standard-library/typecasting-and-utility/TypeCastingAndUtilityIndex.vue'),
		meta: {title: 'Typecasting and Utility Functions in C', icon: '/ralphmaron.png'}
	}
]
