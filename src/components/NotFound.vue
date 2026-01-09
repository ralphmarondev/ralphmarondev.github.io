<script setup lang="ts">
import {useRouter} from 'vue-router'

const router = useRouter()

const goHome = () => {
	router.push({name: 'portfolio'})
}
</script>

<template>
	<div
			class="flex flex-col items-center justify-center min-h-screen text-center bg-gradient-to-br from-pink-50 to-blue-50">
		<div class="text-9xl font-extrabold text-pink-500 animate-bounce">404</div>
		<h1 class="text-3xl font-semibold mt-4 text-gray-800">Page Not Found</h1>
		<p class="text-gray-500 mt-2 max-w-sm">
			Oops! It looks like this page took a wrong turn. Let’s get you back home safely 💫
		</p>

		<button
				@click="goHome"
				class="mt-6 px-6 py-3 rounded-2xl bg-pink-500 text-white font-medium shadow hover:bg-pink-600 active:scale-95 transition-all">
			Take Me Home 🏠
		</button>
	</div>
</template>