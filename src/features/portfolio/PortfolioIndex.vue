<!-- App.vue - Updated Portfolio with Header Refresh, Featured Projects & Tutorials -->
<script setup lang="ts">
import {onMounted, ref, watch} from 'vue'
import {RouterLink, useRouter} from 'vue-router'
import AOS from 'aos'
import Typed from 'typed.js'
import Footer from '@/shared/layouts/Footer.vue'
import ContactSection from '@/features/portfolio/sections/ContactSection.vue'

// ==================== STORES & COMPOSABLES ====================
// You'll need to import these from your existing stores
// import { useNavigationStore } from '@/app/store/useNavigationStore.ts'
// import { useThemeStore } from '@/app/store/useThemeStore.ts'

// For now, let's create mock stores
const nav = ref({activeSection: ref('home')})
const theme = ref({
	dark: false, toggleTheme: () => {
		theme.value.dark = !theme.value.dark
	}
})

const mobileMenuOpen = ref(false)
const router = useRouter()
const currentYear = new Date().getFullYear()
const START_YEAR = 2023
const yearsOfExperience = currentYear - START_YEAR

// ==================== HEADER DATA ====================
const navItems = [
	{name: 'Home', route: '/#home', icon: 'bx-home', section: 'home'},
	{name: 'About', route: '/#about', icon: 'bx-id-card', section: 'about'},
	{name: 'Projects', route: '/#projects', icon: 'bx-code', section: 'projects'},
	{name: 'Tutorials', route: '/#tutorials', icon: 'bx-book-open', section: 'tutorials'},
	{name: 'Contact', route: '/#contact', icon: 'bx-envelope', section: 'contact'}
]

// ==================== PROJECTS DATA - Only 3 Best Projects ====================
const featuredProjects = [
	{
		id: 1,
		name: 'PiSync',
		description: 'Smart access control system for condominiums with mobile app, desktop app, and Raspberry Pi integration.',
		longDescription: 'Complete IoT solution with real-time door access management, biometric authentication, and comprehensive logging system.',
		image: '/projects/pisync.jpg', // Add your image path
		tags: ['Kotlin', 'Jetpack Compose', 'Django', 'Raspberry Pi'],
		icon: 'bx-server',
		gradient: 'from-purple-500 to-pink-500',
		github: 'https://github.com/maronworks/pi-sync',
		demo: null,
		featured: true
	},
	{
		id: 2,
		name: 'Maron OS',
		description: 'Virtual operating system experience within an Android app featuring multiple mini-apps.',
		longDescription: 'A complete OS simulation with file manager, media player, notes, calculator, and 15+ integrated applications.',
		image: '/projects/maronos.jpg', // Add your image path
		tags: ['Jetpack Compose', 'Koin', 'Firebase', 'Room'],
		icon: 'bx-terminal',
		gradient: 'from-pink-500 to-orange-500',
		github: 'https://github.com/ralphmarondev/MaronOS',
		demo: null,
		featured: true
	},
	{
		id: 3,
		name: 'KeepSafe',
		description: 'Cross-platform family information manager with end-to-end encryption.',
		longDescription: 'Secure application for managing family information across Android, iOS, and Desktop with encrypted storage.',
		image: '/projects/keepsafe.jpg', // Add your image path
		tags: ['Compose Multiplatform', 'Kotlin', 'Firebase', 'Koin'],
		icon: 'bx-lock-alt',
		gradient: 'from-orange-500 to-purple-500',
		github: 'https://github.com/ralphmarondev/KeepSafe',
		demo: null,
		featured: true
	}
]

// ==================== TUTORIALS DATA - Only 3 Best Tutorials with Images ====================
const featuredTutorials = [
	{
		id: 1,
		title: 'Building Cross-Platform Apps with Compose Multiplatform',
		description: 'Learn how to create apps that run on Android, iOS, and Desktop with shared Kotlin code.',
		image: '/tutorials/compose-multiplatform.jpg', // Add your image path
		category: 'Mobile Development',
		readTime: '25 min read',
		level: 'Intermediate',
		icon: 'bxl-kotlin',
		gradient: 'from-purple-500 to-pink-500',
		slug: 'compose-multiplatform-guide'
	},
	{
		id: 2,
		title: 'Mastering Spring Boot with Kotlin',
		description: 'Build robust, production-ready REST APIs with Spring Boot and Kotlin.',
		image: '/tutorials/spring-boot.jpg', // Add your image path
		category: 'Backend Development',
		readTime: '30 min read',
		level: 'Intermediate',
		icon: 'bxl-spring-boot',
		gradient: 'from-green-500 to-emerald-500',
		slug: 'spring-boot-kotlin-guide'
	},
	{
		id: 3,
		title: 'Modern Android Architecture with Jetpack Compose',
		description: 'Clean Architecture, MVVM, and dependency injection with Koin.',
		image: '/tutorials/jetpack-compose.jpg', // Add your image path
		category: 'Mobile Development',
		readTime: '20 min read',
		level: 'Advanced',
		icon: 'bxl-android',
		gradient: 'from-blue-500 to-purple-500',
		slug: 'android-jetpack-compose-guide'
	}
]

const allAchievements = [
	// Competition Achievements
	{title: 'Regional Programming Competition', place: 'Champion', year: '2023', level: 'Regional', icon: 'bx-trophy'},
	{title: 'National Programming Competition', place: '11th Place', year: '2023', level: 'National', icon: 'bx-award'},
	{
		title: 'Regional Programming Competition',
		place: '1st Runner Up',
		year: '2024',
		level: 'Regional',
		icon: 'bx-medal'
	},
	{title: 'Best Research Award', place: 'Champion', year: '2024', level: 'Regional', icon: 'bx-bulb'}

	// Add your other achievements here
	// { title: 'Dean\'s Lister', year: '2023', icon: 'bx-star' },
	// { title: 'Scholarship Award', year: '2022', icon: 'bx-dollar' },
	// etc.
]

// ==================== ABOUT LINKS ====================
const aboutLinks = [
	{name: 'About Me', route: '/#about', icon: 'bx-user'},
	{name: 'Contact', route: '/#contact', icon: 'bx-envelope'},
	{name: 'Privacy Policy', route: '/privacy-policy', icon: 'bx-shield-quarter'}
]

// ==================== METHODS ====================
onMounted(() => {
	AOS.init()

	// Typing animation
	const typingElement = document.querySelector('#typing-text')
	if (typingElement) {
		new Typed('#typing-text', {
			strings: ['Mobile Developer', 'Computer Engineer', 'Fullstack Developer'],
			typeSpeed: 60,
			backSpeed: 40,
			backDelay: 2000,
			loop: true
		})
	}
})

watch(() => theme.value.dark, () => {
	AOS.refresh()
})

const handleImageClick = () => {
	// Easter egg to login page
	router.push({name: 'login'})
}

const currentYearFooter = ref(new Date().getFullYear())

const aboutLinksFooter = [
	{name: 'About Me', route: '/#about', icon: 'bx-user'},
	{name: 'Contact', route: '/#contact', icon: 'bx-envelope'},
	{name: 'Privacy Policy', route: '/privacy-policy', icon: 'bx-shield-quarter'}
]

const projectsLinksFooter = [
	{name: 'All Projects', route: '/projects', icon: 'bx-grid-alt'},
	{name: 'Lumi OS', route: '/projects/lumi-os', icon: 'bx-window-alt'},
	{name: 'KeepSafe', route: '/projects/keepsafe', icon: 'bx-lock-alt'}
]

const tutorialsLinksFooter = [
	{name: 'All Tutorials', route: '/tutorials', icon: 'bx-collection'},
	{name: 'C Language', route: '/c-programming-language', icon: 'bxl-c-plus-plus'},
	{name: 'C++', route: '/cpp', icon: 'bxl-c-plus-plus'}
]
</script>

<template>
	<div class="bg-white dark:bg-gray-900 min-h-screen">

		<!-- ==================== HEADER - UPDATED ==================== -->
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
					<div class="hidden md:flex items-center space-x-1">
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
					<div class="md:hidden flex items-center space-x-2">
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

		<!-- ==================== HOME SECTION ==================== -->
		<section id="home"
		         class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-20 overflow-hidden">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
					<div class="space-y-8" data-aos="fade-right">
						<div class="space-y-4">
							<h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
								Hi, I'm Ralph Maron Eda
							</h1>
							<h2 class="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300">
								<span id="typing-text"></span>
							</h2>
						</div>
						<p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
							Crafting sleek and reliable mobile apps since {{ START_YEAR }}.
						</p>

						<!-- Social Links -->
						<div class="flex items-center space-x-4">
							<span class="text-gray-700 dark:text-gray-300 font-medium">Follow me:</span>
							<div class="flex space-x-3">
								<a href="https://github.com/ralphmarondev/"
								   target="_blank"
								   class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300">
									<i class="bx bxl-github text-lg"></i>
								</a>
								<a href="https://www.linkedin.com/in/ralph-maron-eda/"
								   target="_blank"
								   class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300">
									<i class="bx bxl-linkedin text-lg"></i>
								</a>
								<a href="https://www.instagram.com/ralphmaron/"
								   target="_blank"
								   class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300">
									<i class="bx bxl-instagram text-lg"></i>
								</a>
							</div>
						</div>

						<!-- CTA Buttons -->
						<div class="flex flex-col sm:flex-row gap-4">
							<a href="/Ralph-Maron-Eda-Resume.pdf"
							   target="_blank"
							   class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1 transition-all duration-300">
								<i class="bx bx-download mr-2"></i> Download CV
							</a>
							<RouterLink :to="{path: '/', hash: '#contact'}"
							            class="inline-flex items-center justify-center px-6 py-3 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 font-semibold rounded-lg hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transition-all duration-300">
								<i class="bx bx-envelope mr-2"></i> Contact Me
							</RouterLink>
						</div>

						<!-- Quick Stats -->
						<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
							<div class="text-center p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
								<div class="text-xl font-bold text-purple-600 dark:text-purple-400">{{ yearsOfExperience }}</div>
								<div class="text-xs text-gray-600 dark:text-gray-400">Years Exp</div>
							</div>
							<div class="text-center p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
								<div class="text-xl font-bold text-purple-600 dark:text-purple-400">10+</div>
								<div class="text-xs text-gray-600 dark:text-gray-400">Projects</div>
							</div>
							<div class="text-center p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
								<div class="text-xl font-bold text-purple-600 dark:text-purple-400">5+</div>
								<div class="text-xs text-gray-600 dark:text-gray-400">Tech Stacks</div>
							</div>
							<div class="text-center p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
								<div class="text-xl font-bold text-purple-600 dark:text-purple-400">4+</div>
								<div class="text-xs text-gray-600 dark:text-gray-400">Clients</div>
							</div>
						</div>
					</div>

					<!-- Profile Image with Floating Icons -->
					<div class="relative flex justify-center" data-aos="fade-left">
						<div class="relative z-10 cursor-pointer" @click="handleImageClick">
							<div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
							<img src="/ralphmaron.png"
							     alt="Ralph Maron Eda"
							     class="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-800 hover:scale-105 transition-transform duration-300" />
						</div>
						<div class="absolute top-10 left-0 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center animate-float">
							<i class="bx bxl-android text-2xl text-green-500"></i>
						</div>
						<div class="absolute bottom-10 right-0 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center animate-float-delayed">
							<i class="bx bxl-kotlin text-2xl text-purple-500"></i>
						</div>
						<div class="absolute top-20 right-10 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center animate-float">
							<i class="bx bxl-spring-boot text-xl text-green-500"></i>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- ==================== ABOUT SECTION ==================== -->
		<section id="about" class="py-20 bg-gray-50 dark:bg-gray-800/50">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-12" data-aos="fade-up">
					<h2 class="text-4xl lg:text-5xl font-bold mb-4">
						About <span class="text-purple-600 dark:text-purple-400">Me</span>
					</h2>
					<p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Get to know the story behind my code.
					</p>
				</div>

				<div class="flex flex-col lg:flex-row gap-12 items-center">
					<div class="lg:w-1/3" data-aos="fade-right">
						<img src="/ralphmaron.png"
						     alt="Ralph Maron Eda"
						     class="w-80 h-80 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300" />
					</div>
					<div class="lg:w-2/3" data-aos="fade-left">
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<div class="p-5 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
								<div class="flex items-center space-x-3 mb-3">
									<div class="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
										<i class="bx bx-code-alt text-white text-lg"></i>
									</div>
									<h4 class="text-lg font-semibold">Bio</h4>
								</div>
								<p class="text-sm text-gray-600 dark:text-gray-400">Self-taught mobile developer since 2023. Passionate
								                                                    about Kotlin, Compose Multiplatform, and Spring
								                                                    Boot.</p>
							</div>
							<div class="p-5 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
								<div class="flex items-center space-x-3 mb-3">
									<div class="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
										<i class="bx bx-heart text-white text-lg"></i>
									</div>
									<h4 class="text-lg font-semibold">Hobbies</h4>
								</div>
								<p class="text-sm text-gray-600 dark:text-gray-400">Hiking, gaming, sci-fi movies, and open-source
								                                                    contributions.</p>
							</div>
							<div class="p-5 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
								<div class="flex items-center space-x-3 mb-3">
									<div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
										<i class="bx bx-map text-white text-lg"></i>
									</div>
									<h4 class="text-lg font-semibold">Location</h4>
								</div>
								<p class="text-sm text-gray-600 dark:text-gray-400">Cagayan, Philippines. Available for remote work.</p>
							</div>
							<div class="p-5 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
								<div class="flex items-center space-x-3 mb-3">
									<div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
										<i class="bx bx-graduation text-white text-lg"></i>
									</div>
									<h4 class="text-lg font-semibold">Education</h4>
								</div>
								<p class="text-sm text-gray-600 dark:text-gray-400">BS Computer Engineering, Cagayan State University
								                                                    (2021-2025)</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- ACHIEVEMENTS SECTION - Updated with Purple Theme -->
		<section id="achievements"
		         class="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-12" data-aos="fade-up">
					<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4">
						<i class="bx bx-trophy text-lg"></i>
						<span>Recognition & Awards</span>
					</div>
					<h2 class="text-4xl lg:text-5xl font-bold mb-4">
						<span class="text-gray-900 dark:text-white">Competition</span>
						<span class="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"> Achievements</span>
					</h2>
					<p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Proven excellence through competitive programming.
					</p>
				</div>

				<div class="grid md:grid-cols-3 gap-6">
					<!-- Champion - Regional 2023 -->
					<div class="group" data-aos="fade-up" data-aos-delay="0">
						<div class="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
							<div class="relative h-48 overflow-hidden bg-gradient-to-r from-purple-600 to-pink-500">
								<div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
								<div class="absolute inset-0 flex items-center justify-center">
									<i class="bx bx-trophy text-7xl text-white/80"></i>
								</div>
								<div class="absolute top-4 right-4">
              <span class="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg">
                1st Place
              </span>
								</div>
							</div>

							<div class="p-6">
								<h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">
									Regional Programming Competition
								</h3>
								<p class="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2">
									Champion • 2023
								</p>
								<p class="text-gray-600 dark:text-gray-400 text-sm">
									Secured 1st place in the Regional Convention Programming Competition, competing against top
									universities across the region.
								</p>
								<div class="mt-4 flex items-center gap-2">
									<i class="bx bx-map text-gray-400"></i>
									<span class="text-xs text-gray-500">Cagayan Valley Region</span>
								</div>
							</div>
						</div>
					</div>

					<!-- 11th Place - National 2023 -->
					<div class="group" data-aos="fade-up" data-aos-delay="100">
						<div class="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
							<div class="relative h-48 overflow-hidden bg-gradient-to-r from-purple-500 to-pink-400">
								<div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
								<div class="absolute inset-0 flex items-center justify-center">
									<i class="bx bx-award text-7xl text-white/80"></i>
								</div>
								<div class="absolute top-4 right-4">
              <span class="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full shadow-lg">
                Top 11
              </span>
								</div>
							</div>

							<div class="p-6">
								<h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">
									National Programming Competition
								</h3>
								<p class="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2">
									11th Place • 2023
								</p>
								<p class="text-gray-600 dark:text-gray-400 text-sm">
									Ranked 11th out of 50+ universities nationwide in the National Programming Competition.
								</p>
								<div class="mt-4 flex items-center gap-2">
									<i class="bx bx-map text-gray-400"></i>
									<span class="text-xs text-gray-500">National Level</span>
								</div>
							</div>
						</div>
					</div>

					<!-- 2nd Place - Regional 2024 -->
					<div class="group" data-aos="fade-up" data-aos-delay="200">
						<div class="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
							<div class="relative h-48 overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600">
								<div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
								<div class="absolute inset-0 flex items-center justify-center">
									<i class="bx bx-medal text-7xl text-white/80"></i>
								</div>
								<div class="absolute top-4 right-4">
              <span class="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-full shadow-lg">
                2nd Place
              </span>
								</div>
							</div>

							<div class="p-6">
								<h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">
									Regional Programming Competition
								</h3>
								<p class="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2">
									1st Runner Up • 2024
								</p>
								<p class="text-gray-600 dark:text-gray-400 text-sm">
									Secured 2nd place in the Regional Convention Programming Competition, defending our university's
									reputation.
								</p>
								<div class="mt-4 flex items-center gap-2">
									<i class="bx bx-map text-gray-400"></i>
									<span class="text-xs text-gray-500">Cagayan Valley Region</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- View All Achievements Button -->
				<div class="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
					<RouterLink
							to="/achievements"
							class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1 transition-all duration-300"
					>
						View All Achievements
						<i class="bx bx-chevron-right text-xl"></i>
					</RouterLink>
				</div>
			</div>
		</section>

		<!-- ==================== PROJECTS SECTION - Only 3 Featured Projects ==================== -->
		<section id="projects" class="py-20 bg-white dark:bg-gray-900">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-12" data-aos="fade-up">
					<h2 class="text-4xl lg:text-5xl font-bold mb-4">
						Featured <span class="text-purple-600 dark:text-purple-400">Projects</span>
					</h2>
					<p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						A showcase of my best work
					</p>
				</div>

				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div v-for="project in featuredProjects"
					     :key="project.id"
					     class="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
					     data-aos="fade-up">
						<!-- Project Image -->
						<div class="relative h-48 overflow-hidden bg-gradient-to-r" :class="project.gradient">
							<div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
							<div class="absolute bottom-4 left-4 text-white">
								<i :class="['bx', project.icon, 'text-3xl']"></i>
							</div>
						</div>

						<div class="p-6">
							<h3 class="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
								{{ project.name }}
							</h3>
							<p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
								{{ project.description }}
							</p>

							<div class="flex flex-wrap gap-2 mb-5">
                <span v-for="tag in project.tags.slice(0, 3)"
                      :key="tag"
                      class="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                  {{ tag }}
                </span>
							</div>

							<div class="flex gap-4">
								<a v-if="project.github"
								   :href="project.github"
								   target="_blank"
								   class="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 transition flex items-center gap-1">
									<i class="bx bxl-github"></i> GitHub
								</a>
								<RouterLink :to="`/projects/${project.id}`"
								            class="text-sm text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1">
									Learn More <i class="bx bx-chevron-right"></i>
								</RouterLink>
							</div>
						</div>
					</div>
				</div>

				<div class="text-center mt-12" data-aos="fade-up">
					<RouterLink to="/projects"
					            class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
						View All Projects
						<i class="bx bx-chevron-right"></i>
					</RouterLink>
				</div>
			</div>
		</section>

		<!-- ==================== TUTORIALS SECTION - With Images ==================== -->
		<!-- ==================== TUTORIALS SECTION - Updated with Your Actual Content ==================== -->
		<section id="tutorials" class="py-20 bg-gray-50 dark:bg-gray-800/50">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-12" data-aos="fade-up">
					<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium mb-4">
						<i class="bx bx-book-heart text-lg"></i>
						<span>For Students & Learners</span>
					</div>
					<h2 class="text-4xl lg:text-5xl font-bold mb-4">
						Programming <span class="text-purple-600 dark:text-purple-400">Tutorials</span>
					</h2>
					<p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Learn programming from the ground up — resources designed for my students
					</p>
					<div class="flex justify-center gap-3 mt-3">
        <span class="text-sm px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
          📚 50+ students learning
        </span>
						<span class="text-sm px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
          ⭐ Beginner friendly
        </span>
					</div>
				</div>

				<div class="grid md:grid-cols-3 gap-8">
					<!-- C Programming Tutorial -->
					<RouterLink
							to="/c-programming-language"
							class="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
							data-aos="fade-up"
					>
						<div class="relative h-48 overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500">
							<div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
							<div class="absolute inset-0 flex items-center justify-center">
								<i class="bx bxl-c-plus-plus text-7xl text-white/80"></i>
							</div>
							<div class="absolute bottom-4 left-4 z-20">
            <span class="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              Foundation Language
            </span>
							</div>
							<div class="absolute top-4 right-4">
            <span class="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
              Most Popular
            </span>
							</div>
						</div>

						<div class="p-6">
							<div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500 mb-2">
								<i class="bx bx-time"></i>
								<span>Complete Series</span>
								<span>•</span>
								<i class="bx bx-signal"></i>
								<span>Beginner → Advanced</span>
								<span>•</span>
								<i class="bx bx-book-open"></i>
								<span>15+ Lessons</span>
							</div>

							<h3 class="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
								C Programming Language
							</h3>
							<p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
								Master the fundamentals of programming with C — from variables and loops to pointers and memory
								management.
							</p>

							<div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              Pointers
            </span>
								<span class="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              Memory Management
            </span>
								<span class="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              Data Structures
            </span>
							</div>

							<div class="flex items-center justify-between">
								<div class="flex items-center gap-1 text-sm text-purple-600 dark:text-purple-400 font-medium group-hover:gap-2 transition-all">
									Start Learning
									<i class="bx bx-chevron-right group-hover:ml-1 transition"></i>
								</div>
								<div class="text-xs text-gray-500">
									<i class="bx bx-user"></i> 25+ students
								</div>
							</div>
						</div>
					</RouterLink>

					<!-- C++ Programming Tutorial -->
					<RouterLink
							to="/cpp"
							class="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
							data-aos="fade-up"
							data-aos-delay="100"
					>
						<div class="relative h-48 overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500">
							<div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
							<div class="absolute inset-0 flex items-center justify-center">
								<i class="bx bxl-c-plus-plus text-7xl text-white/80"></i>
							</div>
							<div class="absolute bottom-4 left-4 z-20">
            <span class="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              Object-Oriented
            </span>
							</div>
							<div class="absolute top-4 right-4">
            <span class="px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
              OOP Focus
            </span>
							</div>
						</div>

						<div class="p-6">
							<div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500 mb-2">
								<i class="bx bx-time"></i>
								<span>Complete Series</span>
								<span>•</span>
								<i class="bx bx-signal"></i>
								<span>Intermediate</span>
								<span>•</span>
								<i class="bx bx-book-open"></i>
								<span>12+ Lessons</span>
							</div>

							<h3 class="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
								C++ Programming
							</h3>
							<p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
								Take your C knowledge further with object-oriented programming, STL, and modern C++ features.
							</p>

							<div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              OOP
            </span>
								<span class="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              STL
            </span>
								<span class="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              Templates
            </span>
							</div>

							<div class="flex items-center justify-between">
								<div class="flex items-center gap-1 text-sm text-purple-600 dark:text-purple-400 font-medium group-hover:gap-2 transition-all">
									Start Learning
									<i class="bx bx-chevron-right group-hover:ml-1 transition"></i>
								</div>
								<div class="text-xs text-gray-500">
									<i class="bx bx-user"></i> 15+ students
								</div>
							</div>
						</div>
					</RouterLink>

					<!-- Java Programming Tutorial -->
					<RouterLink
							to="/java-programming"
							class="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
							data-aos="fade-up"
							data-aos-delay="200"
					>
						<div class="relative h-48 overflow-hidden bg-gradient-to-r from-orange-500 to-red-500">
							<div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
							<div class="absolute inset-0 flex items-center justify-center">
								<i class="bx bxl-java text-7xl text-white/80"></i>
							</div>
							<div class="absolute bottom-4 left-4 z-20">
            <span class="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              Enterprise Ready
            </span>
							</div>
							<div class="absolute top-4 right-4">
            <span class="px-2 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
              Career Path
            </span>
							</div>
						</div>

						<div class="p-6">
							<div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500 mb-2">
								<i class="bx bx-time"></i>
								<span>Complete Series</span>
								<span>•</span>
								<i class="bx bx-signal"></i>
								<span>Beginner → Advanced</span>
								<span>•</span>
								<i class="bx bx-book-open"></i>
								<span>20+ Lessons</span>
							</div>

							<h3 class="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
								Java Programming
							</h3>
							<p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
								Learn one of the most in-demand languages — from basics to building real-world applications.
							</p>

							<div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              OOP
            </span>
								<span class="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              Collections
            </span>
								<span class="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              GUI
            </span>
							</div>

							<div class="flex items-center justify-between">
								<div class="flex items-center gap-1 text-sm text-purple-600 dark:text-purple-400 font-medium group-hover:gap-2 transition-all">
									Start Learning
									<i class="bx bx-chevron-right group-hover:ml-1 transition"></i>
								</div>
								<div class="text-xs text-gray-500">
									<i class="bx bx-user"></i> 20+ students
								</div>
							</div>
						</div>
					</RouterLink>
				</div>

				<!-- Additional Resources Section -->
				<div class="mt-12 text-center" data-aos="fade-up">
					<div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-200 dark:border-purple-800">
						<div class="flex flex-col md:flex-row items-center justify-between gap-4">
							<div class="flex items-center gap-3">
								<div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
									<i class="bx bx-book-reader text-2xl text-white"></i>
								</div>
								<div class="text-left">
									<h3 class="font-bold text-gray-900 dark:text-white">For My Students</h3>
									<p class="text-sm text-gray-600 dark:text-gray-400">These tutorials are designed specifically for my
									                                                    students</p>
								</div>
							</div>
							<RouterLink
									to="/tutorials"
									class="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition"
							>
								View All Tutorials
								<i class="bx bx-chevron-right"></i>
							</RouterLink>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- ==================== CONTACT SECTION ==================== -->
		<ContactSection />

		<!-- ==================== FOOTER ==================== -->

		<footer class="bg-gray-900 text-gray-300">
			<div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

				<!-- About Me Section -->
				<div>
					<h3 class="text-white font-semibold mb-4 flex items-center gap-2">
						<i class="bx bx-user text-xl"></i> About Me
					</h3>
					<ul class="space-y-2">
						<li v-for="link in aboutLinksFooter" :key="link.name">
							<router-link
									:to="link.route"
									class="hover:text-white transition flex items-center gap-2"
							>
								<i :class="['bx', link.icon, 'text-sm']"></i>
								{{ link.name }}
							</router-link>
						</li>
					</ul>
				</div>

				<!-- Projects Section -->
				<div>
					<h3 class="text-white font-semibold mb-4 flex items-center gap-2">
						<i class="bx bx-code-alt text-xl"></i> Projects
					</h3>
					<ul class="space-y-2">
						<li v-for="link in projectsLinksFooter" :key="link.name">
							<router-link
									:to="link.route"
									class="hover:text-white transition flex items-center gap-2"
							>
								<i :class="['bx', link.icon, 'text-sm']"></i>
								{{ link.name }}
							</router-link>
						</li>
					</ul>
				</div>

				<!-- Tutorials Section -->
				<div>
					<h3 class="text-white font-semibold mb-4 flex items-center gap-2">
						<i class="bx bx-book-open text-xl"></i> Tutorials
					</h3>
					<ul class="space-y-2">
						<li v-for="link in tutorialsLinksFooter" :key="link.name">
							<router-link
									:to="link.route"
									class="hover:text-white transition flex items-center gap-2"
							>
								<i :class="['bx', link.icon, 'text-sm']"></i>
								{{ link.name }}
							</router-link>
						</li>
					</ul>
				</div>

				<!-- Connect Section -->
				<div>
					<h3 class="text-white font-semibold mb-4 flex items-center gap-2">
						<i class="bx bx-link-alt text-xl"></i> Connect
					</h3>
					<p class="text-gray-400 text-sm mb-4">
						Follow me on social media or subscribe to my newsletter.
					</p>
					<div class="flex space-x-4">
						<a href="https://www.facebook.com/imralphmaron"
						   target="_blank"
						   rel="noopener noreferrer"
						   class="hover:text-white transition">
							<i class="bx bxl-facebook-square text-2xl"></i>
						</a>
						<a href="https://www.tiktok.com/@ralphmaron"
						   target="_blank"
						   rel="noopener noreferrer"
						   class="hover:text-white transition">
							<i class="bx bxl-tiktok text-2xl"></i>
						</a>
						<a href="https://www.instagram.com/ralphmaron"
						   target="_blank"
						   rel="noopener noreferrer"
						   class="hover:text-white transition">
							<i class="bx bxl-instagram text-2xl"></i>
						</a>
						<a href="https://www.linkedin.com/in/ralph-maron-eda"
						   target="_blank"
						   rel="noopener noreferrer"
						   class="hover:text-white transition">
							<i class="bx bxl-linkedin-square text-2xl"></i>
						</a>
						<a href="https://www.youtube.com/@RalphMaronEda"
						   target="_blank"
						   rel="noopener noreferrer"
						   class="hover:text-white transition">
							<i class="bx bxl-youtube text-2xl"></i>
						</a>
					</div>
				</div>
			</div>

			<div class="border-t border-gray-700 mt-8 py-4 text-center text-gray-400 text-sm">
				&copy; {{ currentYearFooter }} Ralph Maron Eda. All rights reserved.
			</div>
		</footer>
	</div>
</template>

<style scoped>
@keyframes float {
	0%, 100% {
		transform: translateY(0px);
	}
	50% {
		transform: translateY(-10px);
	}
}

@keyframes float-delayed {
	0%, 100% {
		transform: translateY(0px);
	}
	50% {
		transform: translateY(-10px);
	}
}

.animate-float {
	animation: float 4s ease-in-out infinite;
}

.animate-float-delayed {
	animation: float 4s ease-in-out infinite;
	animation-delay: 2s;
}
</style>