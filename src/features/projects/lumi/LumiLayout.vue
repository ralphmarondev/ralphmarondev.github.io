<script setup lang="ts">
import {ref} from 'vue'
import Footer from '@/shared/layouts/Footer.vue'

const currentYear = ref(new Date().getFullYear())
const isMenuOpen = ref(false)

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
	<div class="lumi-layout">
		<!-- Custom Navbar -->
		<nav class="lumi-navbar">
			<div class="nav-container">
				<div class="nav-content">
					<router-link to="/projects/lumi" class="logo">
						<div class="logo-icon">
							<i class="bx bx-window-alt"></i>
						</div>
						<span class="logo-text">
							Lumi<span class="text-purple-500">OS</span>
						</span>
					</router-link>

					<!-- Desktop Navigation -->
					<div class="desktop-nav">
						<router-link to="/" class="nav-link">Home</router-link>
						<router-link to="/projects" class="nav-link">Projects</router-link>
						<a href="#features" class="nav-link">Features</a>
						<a href="#download" class="nav-link">Download</a>
						<a href="https://github.com/ralphmarondev/lumi-release"
						   target="_blank"
						   class="nav-link">
							<i class="bx bxl-github"></i> GitHub
						</a>
					</div>

					<!-- Mobile Menu Button -->
					<button @click="toggleMenu" class="mobile-menu-btn" aria-label="Menu">
						<i :class="isMenuOpen ? 'bx bx-x' : 'bx bx-menu'"></i>
					</button>
				</div>

				<!-- Mobile Navigation -->
				<div v-show="isMenuOpen" class="mobile-nav">
					<router-link to="/" class="mobile-nav-link" @click="toggleMenu">Home</router-link>
					<router-link to="/projects" class="mobile-nav-link" @click="toggleMenu">Projects</router-link>
					<a href="#features" class="mobile-nav-link" @click="toggleMenu">Features</a>
					<a href="#download" class="mobile-nav-link" @click="toggleMenu">Download</a>
					<a href="https://github.com/ralphmarondev/lumi-release"
					   target="_blank"
					   class="mobile-nav-link"
					   @click="toggleMenu">
						<i class="bx bxl-github"></i> GitHub
					</a>
				</div>
			</div>
		</nav>

		<!-- Main Content -->
		<main class="lumi-main">
			<slot />
		</main>
		<Footer />
	</div>
</template>

<style scoped>
/* Layout */
.lumi-layout {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.lumi-main {
	flex: 1;
}

/* Custom Navbar */
.lumi-navbar {
	background: rgba(255, 255, 255, 0.98);
	backdrop-filter: blur(10px);
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	position: sticky;
	top: 0;
	z-index: 50;
}

.dark .lumi-navbar {
	background: rgba(17, 24, 39, 0.98);
}

.nav-container {
	max-width: 1280px;
	margin: 0 auto;
	padding: 0 1.5rem;
}

.nav-content {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 4rem;
}

.logo {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	text-decoration: none;
	font-weight: bold;
	font-size: 1.25rem;
}

.logo-icon {
	width: 2rem;
	height: 2rem;
	background: linear-gradient(135deg, #8b5cf6, #ec4899);
	border-radius: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	font-size: 1.25rem;
}

.logo-text {
	background: linear-gradient(135deg, #8b5cf6, #ec4899);
	-webkit-background-clip: text;
	background-clip: text;
	color: transparent;
}

.text-purple-500 {
	color: #8b5cf6;
}

.desktop-nav {
	display: none;
	gap: 2rem;
	align-items: center;
}

@media (min-width: 768px) {
	.desktop-nav {
		display: flex;
	}
}

.nav-link {
	color: #4b5563;
	text-decoration: none;
	transition: color 0.2s;
	font-weight: 500;
	display: flex;
	align-items: center;
	gap: 0.25rem;
}

.dark .nav-link {
	color: #9ca3af;
}

.nav-link:hover {
	color: #8b5cf6;
}

.mobile-menu-btn {
	display: block;
	background: none;
	border: none;
	font-size: 1.5rem;
	color: #4b5563;
	cursor: pointer;
}

.dark .mobile-menu-btn {
	color: #9ca3af;
}

@media (min-width: 768px) {
	.mobile-menu-btn {
		display: none;
	}
}

.mobile-nav {
	display: flex;
	flex-direction: column;
	padding: 1rem 0;
	gap: 0.75rem;
	border-top: 1px solid #e5e7eb;
}

.dark .mobile-nav {
	border-top-color: #374151;
}

@media (min-width: 768px) {
	.mobile-nav {
		display: none;
	}
}

.mobile-nav-link {
	color: #4b5563;
	text-decoration: none;
	padding: 0.5rem 0;
	transition: color 0.2s;
	display: flex;
	align-items: center;
	gap: 0.5rem;
}

.dark .mobile-nav-link {
	color: #9ca3af;
}

.mobile-nav-link:hover {
	color: #8b5cf6;
}

/* Custom Footer */
.lumi-footer {
	background: #111827;
	color: #9ca3af;
	margin-top: auto;
}

.footer-container {
	max-width: 1280px;
	margin: 0 auto;
	padding: 3rem 1.5rem 2rem;
}

.footer-grid {
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
	margin-bottom: 3rem;
}

@media (min-width: 640px) {
	.footer-grid {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media (min-width: 1024px) {
	.footer-grid {
		grid-template-columns: repeat(4, 1fr);
	}
}

.footer-section {
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

.footer-title {
	color: white;
	font-weight: 600;
	font-size: 1.125rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
	margin-bottom: 0.5rem;
}

.footer-description {
	font-size: 0.875rem;
	line-height: 1.5;
	color: #9ca3af;
}

.version-badge {
	display: inline-block;
	background: rgba(139, 92, 246, 0.2);
	color: #a78bfa;
	padding: 0.25rem 0.75rem;
	border-radius: 9999px;
	font-size: 0.75rem;
	font-weight: 500;
	width: fit-content;
}

.footer-links {
	list-style: none;
	padding: 0;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
}

.footer-links li a {
	color: #9ca3af;
	text-decoration: none;
	transition: color 0.2s;
	font-size: 0.875rem;
}

.footer-links li a:hover {
	color: #a78bfa;
}

.social-links {
	display: flex;
	gap: 1rem;
}

.social-link {
	color: #9ca3af;
	font-size: 1.5rem;
	transition: color 0.2s;
}

.social-link:hover {
	color: #a78bfa;
}

.download-badge {
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	background: linear-gradient(135deg, #8b5cf6, #ec4899);
	color: white;
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	text-decoration: none;
	font-size: 0.875rem;
	font-weight: 500;
	transition: transform 0.2s, box-shadow 0.2s;
}

.download-badge:hover {
	transform: translateY(-2px);
	box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
}

.footer-bottom {
	border-top: 1px solid #1f2937;
	padding-top: 2rem;
	text-align: center;
	font-size: 0.875rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
}

@media (min-width: 768px) {
	.footer-bottom {
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
}

.footer-bottom-links {
	display: flex;
	gap: 0.5rem;
	justify-content: center;
	align-items: center;
}

.footer-bottom-links a {
	color: #9ca3af;
	text-decoration: none;
	transition: color 0.2s;
}

.footer-bottom-links a:hover {
	color: #a78bfa;
}

.separator {
	color: #4b5563;
}

.back-to-top {
	display: inline-flex;
	align-items: center;
	gap: 0.25rem;
}

/* Selection Style */
::selection {
	background-color: #8b5cf6;
	color: white;
}
</style>