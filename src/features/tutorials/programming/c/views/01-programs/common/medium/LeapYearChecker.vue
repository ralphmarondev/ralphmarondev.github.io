<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import {ref} from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'
import TaskCard from '@/shared/components/TaskCard.vue'
import OutputBlock from '@/shared/components/OutputBlock.vue'

const lastUpdated = 'March 31, 2026'

const program = ref(`
#include <stdio.h>

int main()
{
    int year;
    printf("Enter a year: ");
    scanf("%d", &year);

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
        printf("%d is a leap year\\n", year);
    else
        printf("%d is not a leap year\\n", year);

    return 0;
}
`)

const sampleOutput = ref(`
Enter a year: 2024
2024 is a leap year
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-common-programs"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Leap Year Checker</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<TaskCard>
			<p>
				Once upon a time, in a kingdom where calendars ruled the days, a wise programmer was asked by the king
				to find which years had an extra day in February. This magical day only appeared in <strong>leap years</strong>.
				Your task is to help the kingdom by writing a program that:
			</p>
			<ul class="list-disc list-inside space-y-1 mt-1">
				<li>Prompts the user to enter a year</li>
				<li>Checks the leap year rules:</li>
				<ul class="list-disc list-inside ml-6 space-y-1">
					<li>A year divisible by 4 is a leap year</li>
					<li>Except years divisible by 100 are not leap years</li>
					<li>Unless the year is divisible by 400, then it is a leap year</li>
				</ul>
				<li>Displays whether the year has the magical extra day or not</li>
			</ul>
		</TaskCard>

		<p class="mt-6 text-lg font-semibold text-gray-800">Solution</p>
		<CodeBlock :code="program" language="c" />

		<p class="mt-6 text-lg font-semibold text-gray-800">Sample Output</p>
		<OutputBlock :output="sampleOutput" />
	</TutorialMainLayout>
</template>