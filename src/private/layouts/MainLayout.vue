<script setup lang="ts">
import Header from '@/private/layouts/Header.vue'
import Sidebar from '@/private/layouts/Sidebar.vue'
import {onMounted} from 'vue'
import {useThemeStore} from '@/store/useThemeStore.ts'

const theme = useThemeStore()

onMounted(() => {
	theme.initTheme()
})
</script>

<template>
	<div class="flex flex-col h-screen bg-gradient-to-br from-gray-50 to-pink-50/30 dark:from-gray-950 dark:to-gray-900 overflow-hidden">
		<Header/>
		<div class="flex flex-1 overflow-hidden">
			<Sidebar/>
			<main class="flex-1 overflow-y-auto">
				<div class="min-h-full bg-gradient-to-br from-white/80 to-pink-50/20 dark:from-gray-900/80 dark:to-gray-800/20">
					<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
						<slot></slot>
					</div>
				</div>
			</main>
		</div>
	</div>
</template>

<style>
main {
	scroll-behavior: smooth;
}

main::-webkit-scrollbar {
	width: 8px;
}

main::-webkit-scrollbar-track {
	background: rgba(0, 0, 0, 0.05);
}

main::-webkit-scrollbar-thumb {
	background: rgba(156, 163, 175, 0.3);
	border-radius: 4px;
}

main::-webkit-scrollbar-thumb:hover {
	background: rgba(156, 163, 175, 0.5);
}

.dark main::-webkit-scrollbar-track {
	background: rgba(255, 255, 255, 0.05);
}

.dark main::-webkit-scrollbar-thumb {
	background: rgba(156, 163, 175, 0.2);
}

.dark main::-webkit-scrollbar-thumb:hover {
	background: rgba(156, 163, 175, 0.4);
}
</style>