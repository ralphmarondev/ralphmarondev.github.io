<script setup lang="ts">
import AboutSection from '@/views/portfolio/sections/AboutSection.vue'
import EductionSection from '@/views/portfolio/sections/EductionSection.vue'
import SkillSection from '@/views/portfolio/sections/SkillSection.vue'
import ProjectSection from '@/views/portfolio/sections/ProjectSection.vue'
import ContactSection from '@/views/portfolio/sections/ContactSection.vue'
import HomeSection from '@/views/portfolio/sections/HomeSection.vue'
import MainLayout from '@/views/portfolio/layouts/MainLayout.vue'
import {useNavigationStore} from '@/store/useNavigationStore.ts'
import {onMounted} from 'vue'
import {useThemeStore} from '@/store/useThemeStore.ts'
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