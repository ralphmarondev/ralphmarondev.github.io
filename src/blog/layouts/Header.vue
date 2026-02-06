<script setup lang="ts">
import {ref} from 'vue'

const mobileMenuOpen = ref(false)

function toggleMobileMenu() {
	mobileMenuOpen.value = !mobileMenuOpen.value
}

function toggleTheme() {
	console.log('Theme toggled! Coming soon :)')
}

function goToLogin() {
	console.log('Go to Login. Coming soon :)')
}
</script>

<template>
	<nav class="bg-white dark:bg-gray-900 shadow-md sticky top-0 w-full z-50">
		<div class="max-w-5xl mx-auto">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
				<router-link to="/blog" class="flex items-center space-x-2">
					<i class="bx bx-code text-2xl text-gray-800 dark:text-white"></i>
					<span class="font-bold text-xl text-gray-800 dark:text-white">Ralph's Blog</span>
				</router-link>
				<div class="hidden md:flex items-center space-x-4">
					<button
							@click="toggleTheme"
							class="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
						<i class="bx bx-moon text-xl"></i>
					</button>

					<button
							@click="goToLogin"
							class="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition">
						Sign In
					</button>
				</div>

				<!-- Mobile Toggle -->
				<div class="md:hidden flex items-center space-x-2">
					<button
							@click="toggleTheme"
							class="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
					>
						<i class="bx bx-moon text-xl"></i>
					</button>

					<button
							@click="toggleMobileMenu"
							class="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
					>
						<i :class="mobileMenuOpen ? 'bx bx-x' : 'bx bx-menu'" class="text-2xl"></i>
					</button>
				</div>
			</div>

			<!-- Mobile Menu -->
			<div v-show="mobileMenuOpen" class="md:hidden bg-white dark:bg-gray-900 shadow-md">
				<div class="flex flex-col space-y-2 p-4">
					<router-link
							to="/"
							@click="mobileMenuOpen=false"
							class="px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
						Home
					</router-link>
					<router-link
							to="/blog/c-programming-language"
							@click="mobileMenuOpen=false"
							class="px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition">
						Blog
					</router-link>
					<button
							@click="goToLogin"
							class="px-3 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition">
						Sign In
					</button>
				</div>
			</div>
		</div>
	</nav>
</template>
