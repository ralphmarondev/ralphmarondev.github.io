<script setup lang="ts">
import {useNavigationStore} from '@/stores/navigation';
import {useThemeStore} from '@/stores/theme';
import {onMounted, watch} from "vue";
import AOS from "aos";

const nav = useNavigationStore()
const theme = useThemeStore()

onMounted(() => {
	AOS.init()
})

watch(() => theme.dark, () => {
	AOS.refresh()
})
</script>

<template>
	<nav class='bg-white dark:bg-gray-900 overflow-hidden shadow-lg fixed py-1.5 w-full z-50'
	     data-aos="fade-down"
	     data-aos-duration="1000">
		<div class='container'>
			<div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div class='flex justify-between h-16'>
					<div class='flex items-center'>
						<span class='dark:text-white text-2xl flex items-center font-bold text-gray-800 '>
							<i class='bx bx-code mr-0.5'></i>
							Ralph Maron Eda
						</span>
					</div>
					<div class='hidden md:flex items-center space-x-4'>
						<a href="#home"
						   class="flex items-center px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white hover:shadow-lg text-gray-700 dark:text-gray-300"
						   :class="{ 'bg-gray-800 text-white shadow-lg': nav.activeSection === 'home' }">
							<i class="bx bx-home mr-2"></i>
							Home
						</a>
						<a href="#about"
						   class="flex items-center px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white hover:shadow-lg text-gray-700 dark:text-gray-300"
						   :class="{ 'bg-gray-800 text-white shadow-lg': nav.activeSection === 'about' }">
							<i class="bx bx-id-card mr-2"></i>
							About
						</a>
						
						<a href="#education"
						   class="flex items-center px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white hover:shadow-lg text-gray-700 dark:text-gray-300"
						   :class="{ 'bg-gray-800 text-white shadow-lg': nav.activeSection === 'education' }">
							<i class="bx bx-book mr-2"></i>
							Education
						</a>
						
						<a href="#skills"
						   class="flex items-center px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white hover:shadow-lg text-gray-700 dark:text-gray-300"
						   :class="{ 'bg-gray-800 text-white shadow-lg': nav.activeSection === 'skills' }">
							<i class="bx bx-code-alt mr-2"></i>
							Skills
						</a>
						<a href="#projects"
						   class="flex items-center px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white hover:shadow-lg text-gray-700 dark:text-gray-300"
						   :class="{ 'bg-gray-800 text-white shadow-lg': nav.activeSection === 'projects' }">
							<i class="bx bx-code mr-2"></i>
							Projects
						</a>
						
						<a href="#contact"
						   class="flex items-center px-3 py-2 rounded-md text-sm font-semibold transition-colors duration-200 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white hover:shadow-lg text-gray-700 dark:text-gray-300"
						   :class="{ 'bg-gray-800 text-white shadow-lg': nav.activeSection === 'contact' }">
							<i class="bx bx-envelope mr-2"></i>
							Contact
						</a>
						<button
								class="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
								@click="theme.toggleTheme" aria-label="Toggle Theme">
							<i class="bx " :class="theme.dark ? 'bx-sun' : 'bx-moon'"></i>
						</button>
					</div>
					<div class='md:hidden flex items-center'>
						<button
								class='inline-flex items-center justify-center text-3xl p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'>
							<i class='bx bx-menu'></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	</nav>
</template>