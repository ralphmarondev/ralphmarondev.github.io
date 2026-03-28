<script setup lang="ts">
import Header from '@/features/portfolio/layouts/Header.vue'
import Footer from '@/shared/layouts/Footer.vue'
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