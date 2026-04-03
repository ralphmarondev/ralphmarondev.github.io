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

    int max = arr[0];
    int min = arr[0];

    for(int i = 1; i < n; i++) {
        if(arr[i] > max) max = arr[i];
        if(arr[i] < min) min = arr[i];
    }

    printf("Maximum element: %d\\n", max);
    printf("Minimum element: %d\\n", min);

    return 0;
}
`)

const sampleOutput = ref(`
Enter the number of elements: 5
Enter 5 elements:
12 7 25 3 18
Maximum element: 25
Minimum element: 3
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-solved-loops-arrays"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Find Maximum and Minimum in Array</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<TaskCard>
			<p>
				A treasure hunter collects gems of different values. He wants to know which gem is the most valuable and which
				one is the least valuable before selling them.
			</p>
			<p class="mt-2 font-medium">
				<strong>Task:</strong> Read <strong>N numbers</strong> into an array and find the <strong>maximum and minimum
				                                                                                          values</strong>.
			</p>
			<p class="mt-2 font-medium text-gray-700">Steps to follow:</p>
			<ul class="list-inside space-y-1 mt-1">
				<li><span class="bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg">Read the number of gems <code>n</code></span>
				</li>
				<li><span class="bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg">Store the value of each gem in an array</span>
				</li>
				<li>
					<span class="bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg">Initialize <code>max</code> and <code>min</code> with the first element</span>
				</li>
				<li><span class="bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg">Traverse the array to update <code>max</code> and <code>min</code> using comparison</span>
				</li>
			</ul>
		</TaskCard>

		<CodeBlock :code="program" language="c" />

		<p class="mt-2 font-medium text-gray-700">Sample Output:</p>
		<OutputBlock :output="sampleOutput" />
	</TutorialMainLayout>
</template>