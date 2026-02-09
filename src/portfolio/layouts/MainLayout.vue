<script setup lang="ts">
import Header from '@/portfolio/layouts/Header.vue'
import Footer from '@/portfolio/layouts/Footer.vue'
</script>

<template>
	<main>
		<Header />
		<slot></slot>
		<Footer />
	</main>
</template>