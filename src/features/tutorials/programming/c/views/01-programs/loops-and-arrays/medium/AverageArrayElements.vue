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
    int n, sum = 0;
    printf("Enter the number of elements: ");
    scanf("%d", &n);

    int arr[n];
    printf("Enter %d elements:\\n", n);
    for(int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
        sum += arr[i];
    }

    double average = (double)sum / n;
    printf("Average of array elements: %.2f\\n", average);

    return 0;
}
`)

const sampleOutput = ref(`
Enter the number of elements: 5
Enter 5 elements:
10 20 30 40 50
Average of array elements: 30.00
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-solved-loops-arrays"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Average of Array Elements</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<TaskCard>
			<p>
				A wizard collects magical crystals in different rooms of his tower. Before brewing a potion, he wants to know
				the <b>average power</b> of the crystals he has gathered.
			</p>
			<p class="mt-2 font-medium">
				<strong>Task:</strong> Read <strong>N numbers</strong> into an array and calculate the <strong>average of all
				                                                                                               elements</strong>.
			</p>
			<p class="mt-2 font-medium text-gray-700">Steps to follow:</p>
			<ul class="list-inside space-y-1 mt-1">
				<li>
					<span class="bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg">Read the number of crystals <code>n</code></span>
				</li>
				<li>
					<span class="bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg">Store the power of each crystal in an array</span>
				</li>
				<li><span class="bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg">Sum all crystal powers using a loop</span>
				</li>
				<li><span class="bg-pink-50 text-pink-700 px-2 py-0.5 rounded-lg">Divide the total by <code>n</code> using type casting to get a precise average</span>
				</li>
			</ul>
		</TaskCard>

		<CodeBlock :code="program" language="c" />

		<p class="mt-2 font-medium text-gray-700">Sample Output:</p>
		<OutputBlock :output="sampleOutput" />
	</TutorialMainLayout>
</template>