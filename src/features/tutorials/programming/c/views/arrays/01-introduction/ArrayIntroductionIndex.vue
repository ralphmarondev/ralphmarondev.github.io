<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import {ref} from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'
import OutputBlock from '@/shared/components/OutputBlock.vue'

const lastUpdated = 'March 30, 2026'

const whyUseArray1 = ref(`
int c = 2;
int u = 4;
int t = 8;
int e = 16;
`)

const whyUseArray2 = ref(`
int arr[] = {2, 4, 8, 16};
`)

const basicArray = ref(`
#include <stdio.h>

int main()
{
	int arr[] = {2, 4, 8, 12, 16, 18};
	int n = sizeof(arr) / sizeof(arr[0]);

	for (int i = 0; i < n; i++)
	{
		printf("%d ", arr[i]);
	}
	return 0;
}
`)

const arrayDeclaration = ref(`
int arr[5];
`)

const arrayInitialization = ref(`
int arr[5] = {2, 4, 8, 12, 16};
`)

const shortcutInitialization = ref(`
int arr[] = {2, 4, 8, 12, 16};
`)

const partialInitialization = ref(`
int arr[5] = {1, 2};
`)

const accessingArrayElements = ref(`
int arr[5] = {2, 4, 8, 12, 16};

printf("%d\\n", arr[0]);
printf("%d\\n", arr[2]);
printf("%d\\n", arr[4]);
`)

const accessingArrayElementsOutput = ref(`
2
8
16
`)

const updatingArrayElements = ref(`
int arr[5] = {2, 4, 8, 12, 16};
arr[0] = 1;
printf("%d", arr[0]);
`)

const forwardTraversal = ref(`
for (int i = 0; i < 5; i++)
{
	printf("%d ", arr[i]);
}
`)

const reverseTraversal = ref(`
for (int i = 4; i >= 0; i--)
{
	printf("%d ", arr[i]);
}
`)

const sizeOfAnArray = ref(`
int size = sizeof(arr) / sizeof(arr[0]);
`)

const behindTheScenes = ref(`
Index: \t0\t1\t2\t3\t4
Value: \t2\t4\t4\t8\t12
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-programming-language">
		<h2 class="text-3xl font-bold text-gray-800 mb-2">Arrays in C</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			What is an Array?
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			An <b>array</b> is a collection of elements of the <b>same data type</b> stored in <b>contiguous memory
			                                                                                      locations.</b>
			<br>
			In simple terms: <br>
			An array lets you store <b>multiple values in a single variable.</b>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Why Use Arrays?
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Instead of doing this: <br>
			<CodeBlock :code="whyUseArray1" language="c" />
			You can do this:
			<CodeBlock :code="whyUseArray2" language="c" />
			<ul class="list-disc list-inside space-y-1">
				<li>Cleaner</li>
				<li>Easier to manage</li>
				<li>Perfect for loops</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Example: Basic Array
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<CodeBlock :code="basicArray" language="c" />
			Output:
			<OutputBlock output="2 4 8 12 16 18" />

			<span class="text-gray-600">Key Characteristics:</span>
			<ul class="list-disc list-inside space-y-1">
				<li>Fixed Size: cannot grow/shrink after creation.</li>
				<li>Contiguous Memory: stored next to each other.</li>
				<li>Fast Access: direct access using index.</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Creating an Array
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<span class="text-gray-600">1. Declaration</span>
			<CodeBlock :code="arrayDeclaration" language="c" />
			Creates an array of size 5 <br>
			Values are initially garbage <br>

			<span class="text-gray-600">2. Initialization</span>
			<CodeBlock :code="arrayInitialization" language="c" />
			Assign values during declaration. <br>

			<span class="text-gray-600">3. Shortcut (Recommended)</span>
			<CodeBlock :code="shortcutInitialization" language="c" />
			Compiler automatically determines size. <br>

			<span class="text-gray-600">4. Partial Initialization</span>
			<CodeBlock :code="partialInitialization" language="c" />
			Remaining elements become 0.<br>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Accessing Array Elements
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Arrays use indexing (starts at 0!)
			<CodeBlock :code="accessingArrayElements" language="c" />
			Output:
			<OutputBlock :output="accessingArrayElementsOutput" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Updating Array Elements
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<CodeBlock :code="updatingArrayElements" language="c" />
			Output:
			<OutputBlock output="1" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Array Traversal
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Traversal means visiting each element. <br>
			<span class="text-gray-600">Forward Traversal</span>
			<CodeBlock :code="forwardTraversal" language="c" />
			Output:
			<OutputBlock output="2 4 8 12 16" />

			<span class="text-gray-600">Reverse Traversal</span>
			<CodeBlock :code="reverseTraversal" language="c" />
			Output:
			<OutputBlock output="16, 12, 8, 4, 2" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Size of an Array
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			C does not automatically store array size, but you can compute it:
			<CodeBlock :code="sizeOfAnArray" language="c" />
			Explanation: <br>
			> sizeof(arr) = total bytes <br>
			> sizeof(arr[0]) = size of one elements <br>
			> Divide to get number of elements.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Important Notes
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<ul class="list-disc list-inside space-y-1">
				<li>Index starts at 0.</li>
				<li>Accessing invalid index = undefined behavior.</li>
				<li>Array size is fixed.</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Behind the Scenes
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Memory looks like this:
			<CodeBlock :code="behindTheScenes" language="c" />
			Each element is stored next to each other.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Key Takeaways
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<ul class="list-disc list-inside space-y-1">
				<li>Arrays store multiple values in one variable.</li>
				<li>Elements must be of the same data type.</li>
				<li>Access elements using index.</li>
				<li>Use loops to traverse arrays.</li>
				<li>Use sizeof() to compute size.</li>
			</ul>
		</p>
	</TutorialMainLayout>
</template>