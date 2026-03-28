<script setup lang="ts">
import AboutSection from '@/features/portfolio/sections/AboutSection.vue'
import EductionSection from '@/features/portfolio/sections/EductionSection.vue'
import SkillSection from '@/features/portfolio/sections/SkillSection.vue'
import ProjectSection from '@/features/portfolio/sections/ProjectSection.vue'
import ContactSection from '@/features/portfolio/sections/ContactSection.vue'
import HomeSection from '@/features/portfolio/sections/HomeSection.vue'
import MainLayout from '@/features/portfolio/layouts/MainLayout.vue'
import {useNavigationStore} from '@/app/store/useNavigationStore.ts'
import {onMounted} from 'vue'
import {useThemeStore} from '@/app/store/useThemeStore.ts'
import AOS from 'aos'

const nav = useNavigationStore()
const theme = useThemeStore()

onMounted(() => {
	theme.initTheme()

	AOS.init({
		duration: 800,
		once: true,
		offset: 100
	})

	const sections = document.querySelectorAll('section[id]')
	const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const id = entry.target.getAttribute('id')
						if (id) nav.setActiveSection(id)
					}
				})
			},
			{
				threshold: 0.5 // adjust to trigger when section is ~50% visible
			}
	)

	sections.forEach((section) => observer.observe(section))
})
</script>

<template>
	<MainLayout>
		<HomeSection />
		<AboutSection />
		<EductionSection />
		<SkillSection />
		<ProjectSection />
		<ContactSection />
	</MainLayout>
</template>