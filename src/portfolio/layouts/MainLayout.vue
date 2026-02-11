<script setup lang="ts">
import Header from '@/portfolio/layouts/Header.vue'
import Footer from '@/portfolio/layouts/Footer.vue'
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