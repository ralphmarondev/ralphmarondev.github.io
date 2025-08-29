<script setup lang="ts">
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Education from './components/Education.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Projects from './components/Projects.vue'
import Skills from './components/Skills.vue'

import {useNavigationStore} from '@/stores/navigation'
import {onMounted} from 'vue'
import {useThemeStore} from './stores/theme'
import AOS from "aos";

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
				threshold: 0.5, // adjust to trigger when section is ~50% visible
			}
	)
	
	sections.forEach((section) => observer.observe(section))
})
</script>

<template>
	<div>
		<Header/>
		<Home/>
		<About/>
		<Education/>
		<Skills/>
		<Projects/>
		<Contact/>
		<Footer/>
	</div>
</template>