<!-- features/portfolio/components/sections/AboutSection.vue -->
<script setup lang="ts">
const skills = [
	{ name: 'Kotlin', level: 90, icon: 'bxl-kotlin', color: 'purple' },
	{ name: 'Jetpack Compose', level: 92, icon: 'bxl-android', color: 'purple' },
	{ name: 'Spring Boot', level: 85, icon: 'bxl-spring-boot', color: 'pink' },
	{ name: 'Vue 3', level: 80, icon: 'bxl-vuejs', color: 'green' },
	{ name: 'TypeScript', level: 85, icon: 'bxl-typescript', color: 'blue' },
	{ name: 'Python', level: 80, icon: 'bxl-python', color: 'yellow' }
]
</script>

<template>
	<section id="about" class="py-20 bg-gray-50 dark:bg-gray-800/50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid lg:grid-cols-2 gap-12 items-center">
				<!-- Left - Image -->
				<div class="relative" data-aos="fade-right">
					<div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl blur-2xl opacity-20"></div>
					<div class="relative bg-white dark:bg-gray-900 rounded-2xl p-4 shadow-xl">
						<img
								src="/ralphmaron.png"
								alt="Ralph Maron Eda"
								class="w-full rounded-xl"
						/>
					</div>
				</div>

				<!-- Right - Content -->
				<div class="space-y-6" data-aos="fade-left">
					<div>
						<h2 class="text-4xl lg:text-5xl font-bold mb-4">
							<span class="text-gray-900 dark:text-white">About</span>
							<span class="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"> Me</span>
						</h2>
						<p class="text-gray-600 dark:text-gray-400 leading-relaxed">
							I'm a passionate mobile developer from Cagayan, Philippines, currently pursuing a degree in Computer Engineering.
							I love building beautiful, performant applications that make a difference.
						</p>
					</div>

					<div class="grid grid-cols-2 gap-4">
						<div class="p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
							<i class="bx bx-code-alt text-2xl text-purple-500 mb-2"></i>
							<h3 class="font-semibold text-gray-900 dark:text-white">Experience</h3>
							<p class="text-sm text-gray-600 dark:text-gray-400">2+ years building mobile apps</p>
						</div>
						<div class="p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
							<i class="bx bx-graduation text-2xl text-pink-500 mb-2"></i>
							<h3 class="font-semibold text-gray-900 dark:text-white">Education</h3>
							<p class="text-sm text-gray-600 dark:text-gray-400">BS Computer Engineering</p>
						</div>
					</div>

					<div>
						<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Core Skills</h3>
						<div class="space-y-3">
							<div v-for="skill in skills" :key="skill.name">
								<div class="flex justify-between mb-1">
									<span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
									<span class="text-sm text-gray-600 dark:text-gray-400">{{ skill.level }}%</span>
								</div>
								<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
									<div
											class="h-full rounded-full transition-all duration-1000"
											:class="`bg-${skill.color}-500`"
											:style="{ width: `${skill.level}%` }"
									></div>
								</div>
							</div>
						</div>
					</div>

					<div class="flex space-x-4 pt-4">
						<a
								href="https://github.com/ralphmarondev"
								target="_blank"
								class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
						>
							<i class="bx bxl-github text-2xl text-gray-600 dark:text-gray-400"></i>
						</a>
						<a
								href="https://linkedin.com/in/ralph-maron-eda"
								target="_blank"
								class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
						>
							<i class="bx bxl-linkedin text-2xl text-gray-600 dark:text-gray-400"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>