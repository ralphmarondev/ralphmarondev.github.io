<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import {ref} from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'
import OutputBlock from '@/shared/components/OutputBlock.vue'
import TaskCard from '@/shared/components/TaskCard.vue'
import Pill from '@/shared/components/Pill.vue'

const lastUpdated = 'April 3, 2026'

const codeGoesHere = ref(`
#include <stdio.h>

int main()
{
	// Your code goes here

	return 0;
}
`)
const showSolution = ref(false)
const program = ref(`
#include <stdio.h>

int main()
{
    int n, factorial = 1;

    printf("Enter a number: ");
    scanf("%d", &n);

    if(n < 0)
    {
        printf("Factorial is not defined for negative numbers.\\n");
    }
    else
    {
        for(int i = 1; i <= n; i++)
        {
            factorial *= i;
        }
        printf("Factorial of %d is %d\\n", n, factorial);
    }
    return 0;
}
`)

const sampleOutput = ref(`
Enter a number: 5
Factorial of 5 is 120
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-solved-loops-arrays"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Factorial of a Number</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<TaskCard>
			<p>
				A young wizard wants to create a magical tower that grows by multiplying levels.
				To calculate how many levels a tower will have after
				<Pill>n</Pill>
				spells, he needs your help.
			</p>

			<p class="mt-2 font-medium">
				<strong>Task:</strong> Write a program to calculate the
				<Pill>factorial</Pill>
				                       of a number entered by the user.
			</p>

			<p class="mt-2 font-medium text-gray-700">Steps to follow:</p>
			<ul class="list-inside space-y-1 mt-1">
				<li>
					<Pill>Read</Pill>
					the number from the user
				</li>
				<li>
					<Pill>Check</Pill>
					if the number is negative — factorial is not defined for negatives
				</li>
				<li>
					<Pill>Initialize</Pill>
					a variable
					<Pill>factorial</Pill>
					to 1
				</li>
				<li>
					<Pill>Use a loop</Pill>
					from 1 to
					<Pill>n</Pill>
					and multiply each number to
					<Pill>factorial</Pill>
				</li>
				<li>
					<Pill>Print</Pill>
					the result
				</li>
			</ul>
		</TaskCard>

		<p class="mt-2 font-medium text-gray-700">Your Solution:</p>
		<CodeBlock :code="codeGoesHere" language="c" />
		<p class="mt-2 font-medium text-gray-700">Sample Output:</p>
		<OutputBlock :output="sampleOutput" />
		<div class="mt-3">
			<button
					@click="showSolution = !showSolution"
					class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm">
				{{ showSolution ? 'Hide Solution' : 'Show Solution' }}
			</button>
		</div>

		<div v-if="showSolution" class="mt-3">
			<CodeBlock :code="program" language="c" />
		</div>
	</TutorialMainLayout>
</template>