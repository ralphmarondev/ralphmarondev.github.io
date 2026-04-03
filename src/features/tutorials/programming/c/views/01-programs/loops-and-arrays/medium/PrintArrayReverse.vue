<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import {ref} from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'
import OutputBlock from '@/shared/components/OutputBlock.vue'
import TaskCard from '@/shared/components/TaskCard.vue'

const lastUpdated = 'April 3, 2026'

const program = ref(`
#include <stdio.h>

int main() {
    int n;
    printf("Enter the number of elements: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d elements:\\n", n);
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Array elements in reverse order:\\n");
    for(int i = n - 1; i >= 0; i--) {
        printf("%d ", arr[i]);
    }
    printf("\\n");

    return 0;
}
`)

const sampleOutput = ref(`
Enter the number of elements: 5
Enter 5 elements:
10 20 30 40 50
Array elements in reverse order:
50 40 30 20 10
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-solved-loops-arrays"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Print Array in Reverse</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<TaskCard>
			<p>
				A mischievous wizard wants to display the list of magical potions he collected, but in reverse order to confuse
				a rival apprentice.
			</p>
			<p class="mt-2 font-medium">
				<strong>Task:</strong> Read <strong>N numbers</strong> into an array and print all elements in <strong>reverse
				                                                                                                       order</strong>.
			</p>
			<p class="mt-2 font-medium text-gray-700">Steps to follow:</p>
			<ul class="list-inside space-y-1 mt-1">
				<li>
					<span class="bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg">Read the number of potions <code>n</code></span>
				</li>
				<li><span class="bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg">Store the <code>n</code> potion powers in an array</span>
				</li>
				<li>
					<span class="bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg">Use a loop to traverse the array backward</span>
				</li>
				<li><span class="bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg">Print each element as you go</span></li>
			</ul>
		</TaskCard>

		<CodeBlock :code="program" language="c" />

		<p class="mt-2 font-medium text-gray-700">Sample Output:</p>
		<OutputBlock :output="sampleOutput" />
	</TutorialMainLayout>
</template>