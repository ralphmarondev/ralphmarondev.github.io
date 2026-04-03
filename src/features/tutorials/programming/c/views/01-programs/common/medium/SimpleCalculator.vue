<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import { ref } from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'
import TaskCard from '@/shared/components/TaskCard.vue'
import OutputBlock from '@/shared/components/OutputBlock.vue'

const lastUpdated = 'March 31, 2026'

const program = ref(`
#include <stdio.h>

int main()
{
    double num1, num2, result;
    char op;

    printf("Enter first number: ");
    scanf("%lf", &num1);

    printf("Enter an operator (+, -, *, /): ");
    scanf(" %c", &op);

    printf("Enter second number: ");
    scanf("%lf", &num2);

    switch(op) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/':
            if(num2 != 0)
                result = num1 / num2;
            else {
                printf("Cannot divide by zero!\\n");
                return 0;
            }
            break;
        default:
            printf("Invalid operator!\\n");
            return 0;
    }

    printf("Result: %.2lf\\n", result);
    return 0;
}
`)

const sampleOutput = ref(`
Enter first number: 12
Enter an operator (+, -, *, /): *
Enter second number: 3
Result: 36.00
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-common-programs"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Simple Calculator</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<TaskCard>
			<p>
				Imagine a little wizard who wants to calculate magic potions' quantities quickly. Your task is to create a simple calculator that:
			</p>
			<ul class="list-disc list-inside space-y-1 mt-1">
				<li>Prompts the user to input the first number</li>
				<li>Asks for the operator: <strong>+</strong>, <strong>-</strong>, <strong>*</strong>, or <strong>/</strong></li>
				<li>Prompts for the second number</li>
				<li>Performs the calculation and prints the result</li>
				<li>Handles division by zero gracefully and invalid operators</li>
			</ul>
		</TaskCard>

		<p class="mt-6 text-lg font-semibold text-gray-800">Solution</p>
		<CodeBlock :code="program" language="c" />

		<p class="mt-6 text-lg font-semibold text-gray-800">Sample Output</p>
		<OutputBlock :output="sampleOutput" />
	</TutorialMainLayout>
</template>