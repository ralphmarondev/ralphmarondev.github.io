<script setup lang="ts">
import Header from '@/views/portfolio/layouts/Header.vue'
import Footer from '@/views/portfolio/layouts/Footer.vue'
</script>

<template>
	<main>
		<Header />
		<slot></slot>
		<Footer />
	</main>
</template>