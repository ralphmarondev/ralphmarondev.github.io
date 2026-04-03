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
		path: '/c-pointers',
		name: 'c-pointers',
		component: () => import('@/features/tutorials/programming/c/views/pointers/01-introduction/PointersIntroductionIndex.vue'),
		meta: {title: 'Pointers in C', icon: '/ralphmaron.png'}
	},
	{
		path: '/c-pointers-quiz',
		name: 'c-pointers-quiz',
		component: () => import('@/features/tutorials/programming/c/views/pointers/02-quiz/PointersQuiz.vue'),
		meta: {title: 'Quiz Pointers in C', icon: '/ralphmaron.png'}
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
	},
	{
		path: '/c-quiz-standard-library',
		name: 'c-quiz-standard-library',
		component: () => import('@/features/tutorials/programming/c/views/standard-library/01-quiz/StandardLibraryQuiz.vue'),
		meta: {title: 'Quiz Standard Library in C', icon: '/ralphmaron.png'}
	},
	{
		path: '/c-file-handling',
		name: 'c-file-handling',
		component: () => import('@/features/tutorials/programming/c/views/file-handling/01-introduction/FileHandlingIndex.vue'),
		meta: {title: 'File handling in C', icon: '/ralphmaron.png'}
	},
	{
		path: '/c-memory-layout',
		name: 'c-memory-layout',
		component: () => import('@/features/tutorials/programming/c/views/memory-management/01-memory-layout/MemoryLayoutIndex.vue'),
		meta: {title: 'Program Memory Layout in C', icon: '/ralphmaron.png'}
	},
	{
		path: '/c-common-programs',
		name: 'c-common-programs',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/common/CommonCProgramIndex.vue'),
		meta: {title: 'C Common Programs', icon: '/ralphmaron.png'}
	},
	// easy
	{
		path: '/c/print-hello-sir-ralph',
		name: 'c-print-hello-sir-ralph',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/common/easy/PrintRalphMaronEda.vue'),
		meta: {title: 'Print Hello Sir Ralph', icon: '/ralphmaron.png'}
	},
	{
		path: '/c/swap-two-numbers',
		name: 'c-swap-two-numbers',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/common/easy/SwapTwoNumbers.vue'),
		meta: {title: 'Swap Two numbers', icon: '/ralphmaron.png'}
	},
	{
		path: '/c/be-precise-in-c',
		name: 'c-be-precise-in-c',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/common/easy/BePreciseInC.vue'),
		meta: {title: 'Be Precise in C', icon: '/ralphmaron.png'}
	},
	{
		path: '/c/last-digit-of-a-number',
		name: 'c-last-digit-of-a-number',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/common/easy/LastDigitOfANumber.vue'),
		meta: {title: 'Last Digit of A Number', icon: '/ralphmaron.png'}
	},
	{
		path: '/c/compute-a-over-b',
		name: 'c-compute-a-over-b',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/common/easy/ComputeAOverB.vue'),
		meta: {title: 'Compute A over B', icon: '/ralphmaron.png'}
	},
	{
		path: '/c/compare-two-numbers',
		name: 'c-compare-two-numbers',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/common/easy/CompareTwoNumbers.vue'),
		meta: {title: 'Compare Two Numbers', icon: '/ralphmaron.png'}
	},
	{
		path: '/c/positive-negative-or-zero',
		name: 'c-positive-negative-or-zero',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/common/easy/PositiveNegativeOrZero.vue'),
		meta: {title: 'Compare Two Numbers', icon: '/ralphmaron.png'}
	},
	{
		path: '/c/sum-of-n-numbers',
		name: 'c-sum-of-n-numbers',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/common/easy/SumOfnNumbers.vue'),
		meta: {title: 'Compare Two Numbers', icon: '/ralphmaron.png'}
	},
	// medium
	{
		path: '/c/even-odd-checker',
		name: 'c-even-odd-checker',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/common/medium/EvenOrOddChecker.vue'),
		meta: {title: 'Even or Odd Checker', icon: '/ralphmaron.png'}
	},
	{
		path: '/c/greatest-of-three-numbers',
		name: 'c-greatest-of-three-numbers',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/common/medium/GreatestofThreeNumbers.vue'),
		meta: {title: 'Greatest of Three Numbers', icon: '/ralphmaron.png'}
	},
	{
		path: '/c/leap-year-checker',
		name: 'c-leap-year-checker',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/common/medium/LeapYearChecker.vue'),
		meta: {title: 'Leap Year Checker', icon: '/ralphmaron.png'}
	},
	{
		path: '/c/fizz-challenge',
		name: 'c-fizz-challenge',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/common/medium/FizzBuzzChallenge.vue'),
		meta: {title: 'FizzBuzz Challenge', icon: '/ralphmaron.png'}
	},
	{
		path: '/c/simple-calculator',
		name: 'c-simple-calculator',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/common/medium/SimpleCalculator.vue'),
		meta: {title: 'Simple Calculator', icon: '/ralphmaron.png'}
	},
	{
		path: '/c/first-digit-of-a-number',
		name: 'c-first-digit-of-a-number',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/common/medium/FirstDigitOfANumber.vue'),
		meta: {title: 'First Digit of a Number', icon: '/ralphmaron.png'}
	},
	{
		path: '/c/count-digits',
		name: 'c-count-digits',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/common/medium/CountDigits.vue'),
		meta: {title: 'Count Digits', icon: '/ralphmaron.png'}
	},
	// loops and arrays
	{
		path: '/c-solved-loops-arrays',
		name: 'c-solved-loops-arrays',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/loops-and-arrays/LoopsAndArraysIndex.vue'),
		meta: {title: 'Loops and Arrays Programs', icon: '/ralphmaron.png'}
	},
	{
		path: '/c/loops/print-1-to-10',
		name: 'c-loops-print-1-to-10',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/loops-and-arrays/easy/PrintNumbersOneToTen.vue'),
		meta: {title: 'Print Numbrers 1 to 10', icon: '/ralphmaron.png'}
	},
	{
		path: '/c/loops/print-even-numbers',
		name: 'c-loops-print-even-numbers',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/loops-and-arrays/easy/PrintEvenNumbersUpToN.vue'),
		meta: {title: 'Print Even Numbers up to N', icon: '/ralphmaron.png'}
	},
	{
		path: '/c/loops/print-odd-numbers',
		name: 'c-loops-print-odd-numbers',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/loops-and-arrays/easy/PrintOddNumberUpToN.vue'),
		meta: {title: 'Print Odd Numbers up to N', icon: '/ralphmaron.png'}
	},
	{
		path: '/c/loops/sum-first-n-numbers',
		name: 'c-loops-sum-first-n-numbers',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/loops-and-arrays/easy/SumOfFirstNNumbers.vue'),
		meta: {title: 'Sum of First N Numbers', icon: '/ralphmaron.png'}
	},
	{
		path: '/c/loops/factorial',
		name: 'c-loops-factorial',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/loops-and-arrays/easy/FactorialOfANumber.vue'),
		meta: {title: 'Factorial of a Number', icon: '/ralphmaron.png'}
	},
	{
		path: '/c/loops/multiplication-table',
		name: 'c-loops-multiplication-table',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/loops-and-arrays/easy/MultiplicationTable.vue'),
		meta: {title: 'Print Multiplication Table', icon: '/ralphmaron.png'}
	},
	// medium
	{
		path: '/c/arrays/print-elements',
		name: 'c-arrays-print-elements',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/loops-and-arrays/medium/PrintArrayElements.vue'),
		meta: {title: 'Print All Elements of an Array', icon: '/ralphmaron.png'}
	},
	{
		path: '/c/arrays/print-reverse',
		name: 'c-arrays-print-reverse',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/loops-and-arrays/medium/PrintArrayReverse.vue'),
		meta: {title: 'Print Array in Reverse', icon: '/ralphmaron.png'}
	},
	{
		path: '/c/arrays/sum-elements',
		name: 'c-arrays-sum-elements',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/loops-and-arrays/medium/SumArrayElements.vue'),
		meta: {title: 'Sum of Array Elements', icon: '/ralphmaron.png'}
	},
	{
		path: '/c/arrays/average-elements',
		name: 'c-arrays-average-elements',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/loops-and-arrays/medium/AverageArrayElements.vue'),
		meta: {title: 'Average of Array Elements', icon: '/ralphmaron.png'}
	},
	{
		path: '/c/arrays/max-min',
		name: 'c-arrays-max-min',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/loops-and-arrays/medium/MinMaxArray.vue'),
		meta: {title: 'Find Maximum and Minimum in Array', icon: '/ralphmaron.png'}
	},
	{
		path: '/c/arrays/count-occurrences',
		name: 'c-arrays-count-occurrences',
		component: () => import('@/features/tutorials/programming/c/views/01-programs/loops-and-arrays/medium/CountOccurrences.vue'),
		meta: {title: 'Count Occurrences of a Number', icon: '/ralphmaron.png'}
	}
]
