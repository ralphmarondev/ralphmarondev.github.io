<script setup lang="ts">
import {onMounted, ref, watch} from 'vue'
import {useNavigationStore} from '@/store/useNavigationStore.ts'
import {useThemeStore} from '@/store/useThemeStore.ts'
import AOS from 'aos'

const nav = useNavigationStore()
const theme = useThemeStore()
const mobileMenuOpen = ref(false)

onMounted(() => {
	AOS.init()
})

watch(() => theme.dark, () => {
	AOS.refresh()
})

function toggleMobileMenu() {
	mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
	<nav class="bg-white dark:bg-gray-900 shadow-lg fixed w-full z-50 py-1.5" data-aos="fade-down"
	     data-aos-duration="1000">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-16 items-center">
			<div class="flex items-center">
				<i class="bx bx-code text-3xl md:text-2xl text-gray-800 dark:text-white"></i>
				<span class="hidden md:flex ml-2 text-2xl font-bold text-gray-800 dark:text-white">
				Ralph Maron Eda
			</span>
			</div>
			<div class="hidden md:flex items-center space-x-4">
				<router-link
						:to="{path: '/', hash: '#home'}"
						class="flex items-center px-3 py-2 rounded-md text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white transition"
						:class="{'bg-gray-800 text-white shadow-lg': nav.activeSection==='home'}">
					<i class="bx bx-home mr-2"></i>
					Home
				</router-link>
				<router-link
						:to="{path: '/', hash: '#about'}"
						class="flex items-center px-3 py-2 rounded-md text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white transition"
						:class="{'bg-gray-800 text-white shadow-lg': nav.activeSection==='about'}">
					<i class="bx bx-id-card mr-2"></i>
					About
				</router-link>
				<router-link
						:to="{path: '/', hash: '#education'}"
						class="flex items-center px-3 py-2 rounded-md text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white transition"
						:class="{'bg-gray-800 text-white shadow-lg': nav.activeSection==='education'}">
					<i class="bx bx-book mr-2"></i>
					Education
				</router-link>
				<router-link
						:to="{path: '/', hash: '#skills'}"
						class="flex items-center px-3 py-2 rounded-md text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white transition"
						:class="{'bg-gray-800 text-white shadow-lg': nav.activeSection==='skills'}">
					<i class="bx bx-code-alt mr-2"></i>
					Skills
				</router-link>
				<router-link
						:to="{path: '/', hash: '#projects'}"
						class="flex items-center px-3 py-2 rounded-md text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white transition"
						:class="{'bg-gray-800 text-white shadow-lg': nav.activeSection==='projects'}">
					<i class="bx bx-code mr-2"></i>
					Projects
				</router-link>
				<router-link
						:to="{path: '/', hash: '#contact'}"
						class="flex items-center px-3 py-2 rounded-md text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white transition"
						:class="{'bg-gray-800 text-white shadow-lg': nav.activeSection==='contact'}">
					<i class="bx bx-envelope mr-2"></i>
					Contact
				</router-link>

				<button @click="theme.toggleTheme"
				        class="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
					<i class="bx" :class="theme.dark ? 'bx-sun' : 'bx-moon'"></i>
				</button>
			</div>
			<div class="md:hidden flex items-center space-x-2">
				<button @click="theme.toggleTheme"
				        class="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
					<i class="bx text-2xl md:text-xl" :class="theme.dark ? 'bx-sun' : 'bx-moon'"></i>
				</button>
				<button @click="toggleMobileMenu"
				        class="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
					<i class="bx text-2xl md:text-xl" :class="mobileMenuOpen ? 'bx-x' : 'bx-menu'"></i>
				</button>
			</div>
		</div>

		<div v-show="mobileMenuOpen"
		     class="md:hidden fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg z-50 transition-transform duration-300 transform"
		     :class="mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'">
			<div class="flex flex-col mt-16 space-y-4 px-6">
				<router-link
						:to="{path: '/', hash: '#home'}"
						@click="mobileMenuOpen=false"
						class="flex items-center px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white transition">
					<i class="bx bx-home mr-2"></i>
					Home
				</router-link>
				<router-link
						:to="{path: '/', hash: '#about'}"
						@click="mobileMenuOpen=false"
						class="flex items-center px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white transition">
					<i class="bx bx-id-card mr-2"></i>
					About
				</router-link>
				<router-link
						:to="{path: '/', hash: '#education'}"
						@click="mobileMenuOpen=false"
						class="flex items-center px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white transition">
					<i class="bx bx-book mr-2"></i>
					Education
				</router-link>
				<router-link
						:to="{path: '/', hash: '#skills'}"
						@click="mobileMenuOpen=false"
						class="flex items-center px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white transition">
					<i class="bx bx-code-alt mr-2"></i>
					Skills
				</router-link>
				<router-link
						:to="{path: '/', hash: '#projects'}"
						@click="mobileMenuOpen=false"
						class="flex items-center px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white transition">
					<i class="bx bx-code mr-2"></i>
					Projects
				</router-link>
				<router-link
						:to="{path: '/', hash: '#contact'}"
						@click="mobileMenuOpen=false"
						class="flex items-center px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white transition">
					<i class="bx bx-envelope mr-2"></i>
					Contact
				</router-link>
			</div>
		</div>
	</nav>
</template>