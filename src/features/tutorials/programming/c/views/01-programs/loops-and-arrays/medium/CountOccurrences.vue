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
    int n, target, count = 0;
    printf("Enter the number of elements: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d elements:\\n", n);
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter the number to count occurrences: ");
    scanf("%d", &target);

    for(int i = 0; i < n; i++) {
        if(arr[i] == target) count++;
    }

    printf("Number %d occurs %d times in the array.\\n", target, count);

    return 0;
}
`)

const sampleOutput = ref(`
Enter the number of elements: 6
Enter 6 elements:
4 2 4 6 4 7
Enter the number to count occurrences: 4
Number 4 occurs 3 times in the array.
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-solved-loops-arrays"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Count Occurrences of a Number in Array</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<TaskCard>
			<p>
				You are keeping track of numbers entered by your friends in a game. Sometimes, the same number might appear multiple times.
			</p>
			<p class="mt-2 font-medium">
				<strong>Task:</strong> Read <strong>N numbers</strong> into an array and count how many times a <strong>specific number</strong> occurs.
			</p>
			<p class="mt-2 font-medium text-gray-700">Inputs / Notes:</p>
			<ul class="list-inside space-y-1 mt-1">
				<li><span class="bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg">Read the total number of elements <code>n</code></span></li>
				<li><span class="bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg">Store <code>n</code> elements in an array</span></li>
				<li><span class="bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg">Read the number to count occurrences</span></li>
				<li><span class="bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg">Use a loop to traverse the array and a counter variable to keep track</span></li>
			</ul>
		</TaskCard>

		<CodeBlock :code="program" language="c" />

		<p class="mt-2 font-medium text-gray-700">Sample Output:</p>
		<OutputBlock :output="sampleOutput" />
	</TutorialMainLayout>
</template>