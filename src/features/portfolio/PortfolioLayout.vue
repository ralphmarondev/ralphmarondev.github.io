<script setup lang="ts">
import {RouterLink} from 'vue-router'
import Footer from '@/shared/layouts/Footer.vue'
import {ref} from 'vue'

const props = defineProps({
	showNavItems: {
		type: Boolean,
		default: true
	}
})

const nav = ref({activeSection: ref('home')})
const theme = ref({
	dark: false, toggleTheme: () => {
		theme.value.dark = !theme.value.dark
	}
})

const mobileMenuOpen = ref(false)

const navItems = [
	{name: 'Home', route: '/#home', icon: 'bx-home', section: 'home'},
	{name: 'About', route: '/#about', icon: 'bx-id-card', section: 'about'},
	{name: 'Projects', route: '/#projects', icon: 'bx-code', section: 'projects'},
	{name: 'Tutorials', route: '/#tutorials', icon: 'bx-book-open', section: 'tutorials'},
	{name: 'Contact', route: '/#contact', icon: 'bx-envelope', section: 'contact'}
]
</script>

<template>
	<div>
		<nav class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm fixed w-full z-50 py-2 transition-all duration-300"
		     data-aos="fade-down">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="flex justify-between h-16 items-center">
					<!-- Logo -->
					<RouterLink to="/" class="flex items-center space-x-2 group">
						<div class="relative">
							<i class="bx bx-code text-3xl text-purple-600 dark:text-purple-400"></i>
							<div class="absolute inset-0 bg-purple-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition duration-300"></div>
						</div>
						<span class="hidden md:block text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Ralph Maron Eda
            </span>
					</RouterLink>

					<!-- Desktop Navigation -->
					<div v-if="props.showNavItems" class="hidden md:flex items-center space-x-1">
						<RouterLink
								v-for="item in navItems"
								:key="item.name"
								:to="item.route"
								class="relative px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300 group"
								:class="{ 'text-purple-600 dark:text-purple-400': nav.activeSection === item.section }"
						>
							<i :class="['bx', item.icon, 'mr-1 text-lg']"></i>
							{{ item.name }}
							<span
									class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 group-hover:w-full"
									:class="{ 'w-full': nav.activeSection === item.section }"
							></span>
						</RouterLink>

						<button
								@click="theme.toggleTheme"
								class="ml-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
						>
							<i class="bx text-xl" :class="theme.dark ? 'bx-sun text-yellow-400' : 'bx-moon'"></i>
						</button>
					</div>

					<!-- Mobile Menu Button -->
					<div v-if="props.showNavItems" class="md:hidden flex items-center space-x-2">
						<button
								@click="theme.toggleTheme"
								class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
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
						class="md:hidden py-4 border-t border-gray-200 dark:border-gray-800"
				>
					<div class="flex flex-col space-y-2">
						<RouterLink
								v-for="item in navItems"
								:key="item.name"
								:to="item.route"
								@click="mobileMenuOpen = false"
								class="flex items-center px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 transition"
								:class="{ 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20': nav.activeSection === item.section }"
						>
							<i :class="['bx', item.icon, 'mr-3 text-xl']"></i>
							{{ item.name }}
						</RouterLink>
					</div>
				</div>
			</div>
		</nav>
		<main class="bg-white dark:bg-gray-900 min-h-screen">
			<slot></slot>
		</main>
		<Footer />
	</div>
</template>