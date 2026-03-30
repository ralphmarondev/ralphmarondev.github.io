<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import {ref} from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'
import OutputBlock from '@/shared/components/OutputBlock.vue'

const lastUpdated = 'March 30, 2026'

const basicExample = ref(`
#include <stdio.h>

int main()
{
	printf("Hello world!\\n");
	return 0;
}
`)

const exampleWrong = ref(`
#include <stdio.h>

int func()
{
	printf("Hello world!\\n");
	return 0;
}
`)

const standardForm = ref(`
int main()
{
	// code here
	return 0;
}
`)

const alternativeForm = ref(`
int main(void)
`)

const alternativeFormNotRecommended = ref(`
void main()
`)

const alwaysUseForm = ref(`
int main()
`)

const returnValueOfMain = ref(`
return 0;
`)

// types of main in c
const type1 = ref(`
void main()
{
	printf("Hello!\\n");
}
`)

const type2 = ref(`
int main()
{
	printf("Hello!\\n");
	return 0;
}
`)

const type3 = ref(`
int main(int argc, char *argv[])
{
	printf("Hello!\\n");
	return 0;
}
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-programming-language">
		<h2 class="text-3xl font-bold text-gray-800 mb-2">The <b>main()</b> Function in C</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			What is main()?
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The main() function is the starting point of every C program. <br>
			When your program runs, execution always begin in main().
			<ul class="list-disc list-inside space-y-1">
				<li>It is required in every C program.</li>
				<li>It controls where the program starts and end.</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Basic Example
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<CodeBlock :code="basicExample" language="c" />
			Output:
			<OutputBlock output="Hello world!" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			How main() Works
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<ol class="list-decimal list-inside space-y-1">
				<ul class="list-disc list-inside space-y-1">
					<li>Program starts</li>
					<li>OS calls main()</li>
					<li>Code inside main() executes</li>
					<li>return 0; sends result back to OS</li>
					<li>Program ends</li>
				</ul>
			</ol>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Why main() is Required?
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			If your program does not have main(), it will not run. <br>
			Example (Wrong):
			<CodeBlock :code="exampleWrong" language="c" />
			Error:
			<OutputBlock output="undefined reference to 'main'" />
			The compiler looks specifically for main(). <br>
			No main() = no entry point = no execution.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Syntax of main()
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<span class="text-gray-800">Standard Form (Recommended)</span>
			<CodeBlock :code="standardForm" language="c" />
			This is the most commonly used and recommended version. <br>

			<span class="text-gray-800">Alternative Forms</span>
			<CodeBlock :code="alternativeForm" language="c" />
			Means: no parameter <br>

			<CodeBlock :code="alternativeFormNotRecommended" language="c" />
			Not recommended (non-standard)
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Important Note
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Even if void main() works in some compilers: <br>
			Always use:
			<CodeBlock :code="alwaysUseForm" language="c" />
			Because:
			<ul class="list-disc list-inside space-y-1">
				<li>It follows the C standard.</li>
				<li>It properly communicates with the operating system.</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Return Value of main()
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<CodeBlock :code="returnValueOfMain" language="c" />
			This tells the operating system:
			<ul class="list-disc list-inside space-y-1">
				<li>0 = Program executed successfully.</li>
				<li>non-zero = Error occurred.</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Types of main() in C
		</h2>
		<p class="text-gray-500 mb-2 text-lg">

			<span class="text-gray-900">1. void main() (Not Recommended)</span>
			<CodeBlock :code="type1" language="c" />
			<ul class="list-disc list-inside space-y-1">
				<li>Avoid using this!</li>
			</ul>

			<span class="text-gray-900">2. int main() (Recommended)</span>
			<CodeBlock :code="type2" language="c" />
			<ul class="list-disc list-inside space-y-1">
				<li>Standard</li>
				<li>Safe</li>
				<li>Portable</li>
			</ul>

			<span class="text-gray-900">3. main() with Arguments</span>
			<CodeBlock :code="type3" language="c" />
			<ul class="list-disc list-inside space-y-1">
				<li>Used for advanced programs.</li>
				<li>Handles external input.</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Key Takeaways
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			1. main() is the entry point of every C program. <br>
			2. Without it, your program will not run. <br>
			3. return 0; means successful execution.
			4. Always use:
			<CodeBlock :code="alwaysUseForm" language="c" />
		</p>

	</TutorialMainLayout>
</template>