<script setup lang="ts">
import PortfolioLayout from '@/features/portfolio/PortfolioLayout.vue'

interface Achievement {
	title: string
	subtitle: string
	description: string
	img: string
	badgeText: string
	badgeGradient: string
	gradientBg: string
	location: string
	delay: number
}

const achievements: Achievement[] = [
	{
		title: 'Regional Programming Competition',
		subtitle: 'Champion • 2023',
		description: 'Secured 1st place in the Regional Convention Programming Competition, competing against top universities across the region.',
		img: '/achievements/regcon2023.png',
		badgeText: '1st Place',
		badgeGradient: 'from-yellow-500 to-orange-500',
		gradientBg: 'from-purple-600 to-pink-500',
		location: 'Region 2',
		delay: 0
	},
	{
		title: 'National Programming Competition',
		subtitle: '11th Place • 2023',
		description: 'Ranked 11th against universities nationwide in the National Programming Competition.',
		img: '/achievements/natcon2023.png',
		badgeText: 'Top 11',
		badgeGradient: 'from-blue-500 to-cyan-500',
		gradientBg: 'from-purple-500 to-pink-400',
		location: 'National Level',
		delay: 100
	},
	{
		title: 'Regional Programming Competition',
		subtitle: '1st Runner Up • 2024',
		description: 'Secured 2nd place in the Regional Convention Programming Competition, defending our university\'s reputation.',
		img: '/achievements/recgon2024.png',
		badgeText: '2nd Place',
		badgeGradient: 'from-purple-500 to-pink-500',
		gradientBg: 'from-pink-500 to-purple-600',
		location: 'Region 2',
		delay: 200
	}
]
</script>

<template>
	<PortfolioLayout :showNavItems="false">
		<section class="py-30">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="grid md:grid-cols-3 gap-6">
					<div
							v-for="ach in achievements"
							:key="ach.title + ach.delay"
							class="group"
							:data-aos="'fade-up'"
							:data-aos-delay="ach.delay"
					>
						<div class="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
							<div :class="['relative h-48 overflow-hidden', ach.gradientBg]">
								<div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
								<img :src="ach.img" :alt="ach.title">
								<div class="absolute top-4 right-4">
                  <span :class="`px-3 py-1 bg-gradient-to-r ${ach.badgeGradient} text-white text-sm font-bold rounded-full shadow-lg`">
                    {{ ach.badgeText }}
                  </span>
								</div>
							</div>

							<div class="p-6">
								<h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">
									{{ ach.title }}
								</h3>
								<p class="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2">
									{{ ach.subtitle }}
								</p>
								<p class="text-gray-600 dark:text-gray-400 text-sm">
									{{ ach.description }}
								</p>
								<div class="mt-4 flex items-center gap-2">
									<i class="bx bx-map text-gray-400"></i>
									<span class="text-xs text-gray-500">{{ ach.location }}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</PortfolioLayout>
</template>