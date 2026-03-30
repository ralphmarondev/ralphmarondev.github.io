<!-- features/portfolio/layouts/TutorialMainLayout.vue -->
<script setup lang="ts">
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>

<template>
	<div>
		<Header />
		<main>
			<slot></slot>
		</main>
		<Footer />
	</div>
</template>