<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import { ref } from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'
import OutputBlock from '@/shared/components/OutputBlock.vue'
import TaskCard from '@/shared/components/TaskCard.vue'

const lastUpdated = 'April 3, 2026'

const program = ref(`
#include <stdio.h>

int main() {
    int n, sum = 0;
    printf("Enter the number of elements: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d elements:\\n", n);
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
        sum += arr[i];
    }

    printf("Sum of array elements: %d\\n", sum);

    return 0;
}
`)

const sampleOutput = ref(`
Enter the number of elements: 5
Enter 5 elements:
10 20 30 40 50
Sum of array elements: 150
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-solved-loops-arrays"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Sum of Array Elements</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<TaskCard>
			<p>
				A treasure hunter collects coins from different rooms in a dungeon. He wants to know the total amount he has gathered before leaving.
			</p>
			<p class="mt-2 font-medium">
				<strong>Task:</strong> Read <strong>N numbers</strong> into an array and calculate the <strong>sum of all elements</strong>.
			</p>
			<p class="mt-2 font-medium text-gray-700">Steps to follow:</p>
			<ul class="list-inside space-y-1 mt-1">
				<li><span class="bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg">Read the number of coins <code>n</code></span></li>
				<li><span class="bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg">Store the coin values in an array</span></li>
				<li><span class="bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg">Use a loop to add each coin to a <code>sum</code> variable</span></li>
				<li><span class="bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg">Print the total sum at the end</span></li>
			</ul>
		</TaskCard>

		<CodeBlock :code="program" language="c" />

		<p class="mt-2 font-medium text-gray-700">Sample Output:</p>
		<OutputBlock :output="sampleOutput" />
	</TutorialMainLayout>
</template>