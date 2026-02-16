<script setup lang="ts">
import Header from '@/projects/layouts/Header.vue'
import Footer from '@/layouts/Footer.vue'
</script>

<template>
	<div class="flex flex-col min-h-screen">
		<Header />
		<main class="flex-1 px-6 py-6 md:px-8 lg:px-12 max-w-5xl mx-auto">
			<slot />
		</main>
		<Footer />
	</div>
</template>

<style>
::selection {
	background-color: #f472b6; /* Tailwind pink-400 */
	color: #ffffff; /* text color while selected */
}

.dark ::selection {
	background-color: #ec4899; /* Tailwind pink-500 for dark mode */
	color: #ffffff;
}
</style>