<script setup lang="ts">
import LumiLayout from '@/features/projects/lumi/LumiLayout.vue'

const downloadLink = 'https://github.com/ralphmarondev/lumi-release/releases/download/26.03-Corgi/lumi-corgi.apk'

const handleDownload = (e: Event) => {
	e.preventDefault()
	window.location.href = downloadLink
}

const features = [
	{
		icon: 'bx-window-alt',
		title: 'OS-Inspired Environment',
		description: 'A virtual operating system experience inside an Android app, built with Jetpack Compose'
	},
	{
		icon: 'bx-grid-alt',
		title: 'Unified Experience',
		description: 'Multiple system-style apps under a single interface — cohesive, minimal, and intentional'
	},
	{
		icon: 'bx-palette',
		title: 'Minimal UI',
		description: 'Clean, distraction-free interface with consistent navigation patterns'
	},
	{
		icon: 'bx-component',
		title: 'System Components',
		description: 'Each feature behaves like a built-in system app, not just a standalone tool'
	},
	{
		icon: 'bx-bulb',
		title: 'Design-First',
		description: 'Built for exploration and experimentation with modern Android development'
	},
	{
		icon: 'bx-trending-up',
		title: 'Evolving Experience',
		description: 'Designed to grow naturally as new ideas take shape'
	}
]

const systemRequirements = [
	'Android 9.0 (Pie) or higher',
	'Minimum 2GB RAM',
	'100MB free storage space',
	'ARM64 or ARMv7 processor'
]

const philosophyPoints = [
	'Minimal, distraction-free UI',
	'Clear separation between system logic and features',
	'Design-first approach',
	'Built for experimentation and learning'
]
</script>

<template>
	<LumiLayout>
		<div class="min-h-screen">
			<!-- Hero Section -->
			<section class="relative overflow-hidden">
				<!-- Animated Background -->
				<div class="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900 opacity-90"></div>
				<div class="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>

				<div class="relative max-w-7xl mx-auto px-6 py-16 lg:py-24">
					<div class="flex flex-col lg:flex-row items-center gap-12">
						<!-- Left Content -->
						<div class="lg:w-1/2 text-center lg:text-left space-y-6">
							<div class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white border border-white/30">
								<i class="bx bxl-android text-lg"></i>
								<span class="font-medium">Version 26.03 Corgi</span>
								<span class="w-1 h-1 bg-white/50 rounded-full"></span>
								<span>Jetpack Compose</span>
							</div>

							<h1 class="text-6xl lg:text-7xl font-bold text-white">
								<span class="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
									Lumi
								</span>
							</h1>

							<p class="text-xl text-purple-100 leading-relaxed max-w-lg mx-auto lg:mx-0">
								A virtual operating system experience inside an Android app, built with Jetpack Compose.
							</p>

							<p class="text-purple-200/90 leading-relaxed">
								Lumi brings together multiple system-style apps under a single interface,
								designed to feel cohesive, minimal, and intentional.
							</p>

							<div class="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
								<a
										:href="downloadLink"
										@click.prevent="handleDownload"
										class="inline-flex items-center gap-3 bg-white text-purple-700 hover:bg-purple-50 font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
								>
									<i class="bx bxl-android text-2xl"></i>
									<span>Download APK (v26.03)</span>
									<i class="bx bx-download text-xl"></i>
								</a>
								<a
										href="https://github.com/ralphmarondev/lumi-release"
										target="_blank"
										class="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 border border-white/30"
								>
									<i class="bx bxl-github text-xl"></i>
									View Releases
								</a>
							</div>

							<div class="pt-4 flex items-center gap-3 justify-center lg:justify-start text-sm text-purple-200">
								<i class="bx bx-shield-alt"></i>
								<span>Side-load only</span>
								<span class="w-1 h-1 bg-purple-300 rounded-full"></span>
								<i class="bx bx-lock-alt"></i>
								<span>Enable "Install from unknown sources"</span>
							</div>
						</div>

						<!-- Right Image - Phone Mockup -->
						<div class="lg:w-1/2 flex justify-center">
							<div class="relative group">
								<div class="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-500"></div>
								<img
										src="/projects/lumi.png"
										alt="Lumi OS on Android"
										class="rounded-2xl shadow-2xl w-full max-w-md relative border-4 border-white/20 transform transition duration-300 group-hover:scale-105"
								/>
								<div class="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs px-3 py-1.5 rounded-full shadow-lg animate-pulse">
									<i class="bx bx-mobile-alt mr-1"></i> Android App
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Philosophy Section -->
			<section class="py-20 bg-white dark:bg-gray-900">
				<div class="max-w-7xl mx-auto px-6">
					<div class="text-center mb-12">
						<div class="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 rounded-full px-4 py-2 mb-6">
							<i class="bx bx-brain text-purple-600 dark:text-purple-400"></i>
							<span class="text-purple-700 dark:text-purple-300 font-medium">Our Philosophy</span>
						</div>
						<h2 class="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
							What Makes Lumi Different?
						</h2>
						<p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
							Lumi values cohesion over complexity and experience over excess features
						</p>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
						<div v-for="(point, index) in philosophyPoints" :key="index"
						     class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
							<div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
								<i class="bx bx-star text-white text-xl"></i>
							</div>
							<p class="text-gray-800 dark:text-gray-200 font-medium">{{ point }}</p>
						</div>
					</div>
				</div>
			</section>

			<!-- Features Section -->
			<section class="py-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-800">
				<div class="max-w-7xl mx-auto px-6">
					<div class="text-center mb-12">
						<h2 class="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
							What Lumi Is
						</h2>
						<p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
							A sandbox for modern Android development, a Compose-first experiment
						</p>
					</div>

					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div v-for="feature in features" :key="feature.title"
						     class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
							<div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition duration-300">
								<i :class="`bx ${feature.icon} text-white text-2xl`"></i>
							</div>
							<h3 class="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{{ feature.title }}</h3>
							<p class="text-gray-600 dark:text-gray-400 leading-relaxed">{{ feature.description }}</p>
						</div>
					</div>
				</div>
			</section>

			<!-- What Lumi Is Not Section -->
			<section class="py-20 bg-white dark:bg-gray-900">
				<div class="max-w-7xl mx-auto px-6">
					<div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-10 max-w-4xl mx-auto border-l-8 border-purple-500">
						<div class="flex items-start gap-4">
							<i class="bx bx-info-circle text-3xl text-purple-500 flex-shrink-0"></i>
							<div>
								<h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">What Lumi Is Not</h3>
								<p class="text-gray-600 dark:text-gray-300 leading-relaxed">
									Lumi is
									<span class="font-semibold text-purple-600 dark:text-purple-400">not a launcher replacement</span> —
									it is an
									<span class="font-semibold text-purple-600 dark:text-purple-400">OS-inspired environment</span>,
									where each feature behaves like a built-in system app rather than a standalone tool.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- System Requirements -->
			<section class="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600">
				<div class="max-w-7xl mx-auto px-6">
					<div class="rounded-2xl p-10 text-white">
						<div class="flex flex-col lg:flex-row items-center justify-between gap-10">
							<div class="flex-1">
								<h2 class="text-3xl font-bold mb-6 flex items-center gap-3">
									<i class="bx bx-devices text-4xl"></i>
									System Requirements
								</h2>
								<ul class="space-y-3">
									<li v-for="req in systemRequirements" :key="req" class="flex items-center gap-3 text-lg">
										<i class="bx bx-check-circle text-2xl text-green-300"></i>
										<span>{{ req }}</span>
									</li>
								</ul>
							</div>
							<div class="flex-1 text-center border-l border-white/20 pl-8">
								<i class="bx bxl-android text-8xl mb-4"></i>
								<div class="space-y-2">
									<p class="text-lg font-semibold">Optimized Experience</p>
									<p class="text-purple-100">
										✓ Works on both phones and tablets<br>
										✓ Portrait and landscape modes<br>
										✓ Built with Jetpack Compose
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Download CTA -->
			<section class="py-20 bg-white dark:bg-gray-900">
				<div class="max-w-7xl mx-auto px-6 text-center">
					<div class="max-w-3xl mx-auto">
						<h2 class="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
							Ready to Experience Lumi?
						</h2>
						<p class="text-gray-600 dark:text-gray-300 mb-10 text-lg leading-relaxed">
							Download the APK and explore a cohesive, minimal, and intentional
							virtual operating system experience on your Android device.
						</p>
						<a
								:href="downloadLink"
								@click.prevent="handleDownload"
								class="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-10 py-5 rounded-xl transition-all duration-300 text-lg shadow-xl hover:shadow-2xl hover:scale-105"
						>
							<i class="bx bxl-android text-2xl"></i>
							Download Lumi v26.03 Corgi
							<i class="bx bx-download text-2xl"></i>
						</a>
						<div class="mt-6 text-sm text-gray-500 dark:text-gray-400 space-y-1">
							<p><i class="bx bx-file"></i> APK Size: ~32MB</p>
							<p><i class="bx bx-calendar"></i> Last updated: March 2026</p>
							<p><i class="bx bx-code-alt"></i> Built with Jetpack Compose</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	</LumiLayout>
</template>

<style scoped>
@keyframes pulse {
	0%, 100% {
		opacity: 1;
	}
	50% {
		opacity: 0.7;
	}
}

.animate-pulse {
	animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>