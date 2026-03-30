<script setup lang="ts">
import SectionContact from '@/features/portfolio/SectionContact.vue'
import PortfolioLayout from '@/features/portfolio/PortfolioLayout.vue'
import SectionHome from '@/features/portfolio/SectionHome.vue'
import SectionAbout from '@/features/portfolio/SectionAbout.vue'
import SectionTutorial from '@/features/portfolio/SectionTutorial.vue'
import SectionProject from '@/features/portfolio/SectionProject.vue'
</script>

<template>
	<PortfolioLayout>
		<SectionHome />
		<SectionAbout />
		<SectionProject />
		<SectionTutorial />
		<SectionContact />
	</PortfolioLayout>
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