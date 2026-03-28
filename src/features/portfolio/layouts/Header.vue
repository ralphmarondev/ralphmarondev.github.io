<!-- features/portfolio/components/Header/Header.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useNavigationStore } from '@/app/store/useNavigationStore.ts'
import { useThemeStore } from '@/app/store/useThemeStore.ts'

const nav = useNavigationStore()
const theme = useThemeStore()
const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
	isScrolled.value = window.scrollY > 50
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})

const navItems = [
	{ to: '/#home', icon: 'bx-home', label: 'Home' },
	{ to: '/#about', icon: 'bx-id-card', label: 'About' },
	{ to: '/#projects', icon: 'bx-code', label: 'Projects' },
	{ to: '/#tutorials', icon: 'bx-book-open', label: 'Tutorials' },
	{ to: '/#contact', icon: 'bx-envelope', label: 'Contact' }
]
</script>

<template>
	<nav
			class="fixed w-full z-50 transition-all duration-300"
			:class="isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-1' : 'bg-white dark:bg-gray-900 shadow-lg py-1.5'"
	>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between h-16 items-center">
				<!-- Logo -->
				<router-link to="/" class="flex items-center group">
					<div class="relative">
						<i class="bx bx-code text-3xl text-purple-600 dark:text-purple-400"></i>
						<div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-300"></div>
					</div>
					<span class="ml-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Ralph
          </span>
				</router-link>

				<!-- Desktop Navigation -->
				<div class="hidden md:flex items-center space-x-1">
					<router-link
							v-for="item in navItems"
							:key="item.label"
							:to="item.to"
							class="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition group"
							:class="{ 'text-purple-600 dark:text-purple-400': nav.activeSection === item.label.toLowerCase() }"
					>
						<i :class="['bx', item.icon, 'mr-1 text-lg']"></i>
						{{ item.label }}
						<span
								class="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
								:class="{ 'scale-x-100': nav.activeSection === item.label.toLowerCase() }"
						></span>
					</router-link>

					<button
							@click="theme.toggleTheme"
							class="ml-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
					>
						<i class="bx text-xl" :class="theme.dark ? 'bx-sun text-yellow-400' : 'bx-moon'"></i>
					</button>
				</div>

				<!-- Mobile Menu Button -->
				<div class="md:hidden flex items-center space-x-2">
					<button
							@click="theme.toggleTheme"
							class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
					>
						<i class="bx text-xl" :class="theme.dark ? 'bx-sun text-yellow-400' : 'bx-moon'"></i>
					</button>
					<button
							@click="mobileMenuOpen = !mobileMenuOpen"
							class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
					>
						<i class="bx text-2xl" :class="mobileMenuOpen ? 'bx-x' : 'bx-menu'"></i>
					</button>
				</div>
			</div>

			<!-- Mobile Menu -->
			<div
					v-show="mobileMenuOpen"
					class="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700 py-4"
			>
				<div class="flex flex-col space-y-2 px-4">
					<router-link
							v-for="item in navItems"
							:key="item.label"
							:to="item.to"
							@click="mobileMenuOpen = false"
							class="flex items-center px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20 transition"
							:class="{ 'text-purple-600 dark:text-purple-400 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20': nav.activeSection === item.label.toLowerCase() }"
					>
						<i :class="['bx', item.icon, 'mr-3 text-xl']"></i>
						{{ item.label }}
					</router-link>
				</div>
			</div>
		</div>
	</nav>
</template>