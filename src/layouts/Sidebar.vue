<script setup lang="ts">
import {useLayoutStore} from '@/store/useLayoutStore.ts'
import {useRoute, useRouter} from 'vue-router'
import {onMounted, onUnmounted, ref, watch} from 'vue'
import {useAuthStore} from '@/store/useAuthStore.ts'

const layout = useLayoutStore()
const router = useRouter()
const route = useRoute()
const auth = useAuthStore()

const menuItems = [
	{icon: 'bxs-home', label: 'Dashboard', route: '/dashboard'},
	{icon: 'bxs-image', label: 'My Memories', route: '/memories'},
	{icon: 'bxs-book-heart', label: 'My Diary', route: '/diary'},
	{icon: 'bxs-user', label: 'Profile', route: '/account'},
	{icon: 'bxs-cog', label: 'Settings', route: '/settings'}
]

const accountMenu = ref(false)
const mobileAccountMenu = ref(false)
const isMobile = ref(false)

const checkIfMobile = () => {
	isMobile.value = window.innerWidth < 768
}

onMounted(() => {
	isMobile.value = window.innerWidth < 768
	window.addEventListener('resize', checkIfMobile)
})

onUnmounted(() => {
	window.removeEventListener('resize', checkIfMobile)
})

const toggleAccount = () => {
	accountMenu.value = !accountMenu.value
}

const toggleMobileAccount = () => {
	mobileAccountMenu.value = !mobileAccountMenu.value
}

const goToAccount = () => {
	accountMenu.value = false
	mobileAccountMenu.value = false
	layout.closeSidebar()
	console.log('Navigate to account index.')
}

const logout = () => {
	auth.logout()
	accountMenu.value = false
	mobileAccountMenu.value = false
	layout.closeSidebar()
	router.push({name: 'login'})
}

if (!layout.closeSidebar) {
	layout.closeSidebar = () => {
		layout.sidebarOpen = false
	}
}

watch(
		() => route.path,
		(newPath) => {
			const active = menuItems.find(item => newPath.startsWith(item.route))
			layout.activeItem = active ? active.label : ''
		},
		{immediate: true}
)
</script>

<template>
	<!-- Desktop -->
	<aside
			class="hidden md:flex flex-col bg-gradient-to-b from-white/95 to-pink-50/50 dark:from-gray-900/95 dark:to-gray-800/50 border-r border-pink-100/50 dark:border-gray-700/50 backdrop-blur-sm transition-all duration-500 ease-out z-20 shrink-0"
			:class="layout.sidebarOpen ? 'w-64' : 'w-22'">
		<nav class="mt-6 px-3 flex flex-col space-y-1">
			<router-link
					v-for="item in menuItems"
					:key="item.label"
					:to="item.route"
					@click="layout.setActiveItem(item.label)"
					class="group relative flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-md"
					:class="[
          layout.activeItem === item.label
            ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg transform -translate-y-0.5'
            : 'text-gray-600 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-700/80'
        ]">
				<span v-if="layout.activeItem === item.label"
				      class="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20animate-pulse">
				</span>

				<div class="relative z-10 flex items-center justify-center">
					<div :class="[
            'w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300',
            layout.activeItem === item.label
              ? 'bg-white/20 backdrop-blur-sm'
              : 'bg-pink-100 dark:bg-gray-700 group-hover:bg-pink-200 dark:group-hover:bg-gray-600'
          ]">
						<i :class="[
              'bx text-xl',
              item.icon,
              layout.activeItem === item.label
                ? 'text-white'
                : 'text-pink-600 dark:text-pink-400'
            ]"></i>
					</div>
				</div>
				<span v-if="layout.sidebarOpen" class="relative z-10 text-sm font-medium truncate">
          {{ item.label }}
        </span>

				<div v-if="!layout.sidebarOpen"
				     class="absolute left-full top-1/2 -translate-y-1/2 ml-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap shadow-xl pointer-events-none z-50">
					{{ item.label }}
					<div class="absolute left-0 top-1/2 -translate-y-1/2 -ml-1.5 w-3 h-3 bg-gray-800 rotate-45"></div>
				</div>
				<div v-if="layout.activeItem === item.label && layout.sidebarOpen"
				     class="absolute right-3 top-1/2 -translate-y-1/2">
					<div class="w-2 h-2 rounded-full bg-white/80 animate-ping"></div>
				</div>
			</router-link>
		</nav>
	</aside>

	<!-- Mobile -->
	<transition name="fade">
		<div
				v-if="layout.sidebarOpen && isMobile"
				@click="layout.toggleSidebar"
				class="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-30"
		></div>
	</transition>

	<aside
			class="fixed left-0 top-0 h-screen bg-gradient-to-b from-white to-pink-50/30 dark:from-gray-900 dark:to-gray-800/50 border-r border-pink-100/50 dark:border-gray-700/50 backdrop-blur-sm z-40 flex flex-col justify-between transition-all duration-500 ease-out overflow-hidden"
			:class="[
      layout.sidebarOpen && isMobile ? 'translate-x-0 w-64' : '-translate-x-full w-64',
      isMobile ? '' : 'hidden'
    ]">
		<div class="p-4 border-b border-pink-100/50 dark:border-gray-700/50">
			<div class="flex items-center justify-between">
				<h1 class="text-lg font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
					Memory Journal
				</h1>
				<button
						@click="layout.toggleSidebar"
						class="p-2 rounded-lg hover:bg-pink-100 dark:hover:bg-gray-700">
					<i class="bx bx-x text-xl text-gray-600 dark:text-gray-300"></i>
				</button>
			</div>
		</div>

		<nav class="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
			<router-link
					v-for="item in menuItems"
					:key="item.label"
					:to="item.route"
					@click="layout.closeSidebar()"
					class="group relative flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-300"
					:class="[
          layout.activeItem === item.label
            ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
            : 'text-gray-600 dark:text-gray-300 hover:bg-white/80 dark:hover:bg-gray-700/80'
        ]">
				<div class="w-10 h-10 rounded-xl flex items-center justify-center"
				     :class="layout.activeItem === item.label
               ? 'bg-white/20'
               : 'bg-pink-100 dark:bg-gray-700'">
					<i :class="[
            'bx text-xl',
            item.icon,
            layout.activeItem === item.label
              ? 'text-white'
              : 'text-pink-600 dark:text-pink-400'
          ]"></i>
				</div>
				<span class="text-sm font-medium">{{ item.label }}</span>
			</router-link>
		</nav>

		<!-- Mobile account -->
		<section class="p-4 border-t border-gray-200 dark:border-gray-700">
			<div @click="toggleMobileAccount"
			     class="flex items-center gap-3 cursor-pointer p-3 rounded-xl hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all">
				<div class="relative">
					<img src="/ralphmaron.png" alt="Ralph Maron Eda"
					     class="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-gray-800"/>
					<div
							class="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-gray-800"></div>
				</div>
				<div class="flex-1">
					<p class="text-gray-700 dark:text-gray-200 font-medium">My Account</p>
					<p class="text-xs text-gray-500">View or Logout</p>
				</div>
				<i :class="[
          'bx text-gray-600 dark:text-gray-300 ml-auto transition-transform duration-300',
          mobileAccountMenu ? 'bx-chevron-up' : 'bx-chevron-down'
        ]"></i>
			</div>

			<transition name="slide">
				<div v-if="mobileAccountMenu"
				     class="mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
					<button
							@click="goToAccount"
							class="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-700 flex items-center gap-3">
						<span class="w-8 h-8 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
							<i class="bx bx-user text-pink-600 dark:text-pink-400"></i>
						</span>
						<span>Profile</span>
					</button>
					<button
							@click="logout"
							class="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-700 flex items-center gap-3">
						<span class="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
							<i class="bx bx-log-out text-red-600 dark:text-red-400"></i>
						</span>
						<span>Logout</span>
					</button>
				</div>
			</transition>
		</section>
	</aside>
</template>

<style scoped>
aside::-webkit-scrollbar {
	width: 4px;
}

aside::-webkit-scrollbar-track {
	background: transparent;
}

aside::-webkit-scrollbar-thumb {
	background: rgba(0, 0, 0, 0.1);
	border-radius: 2px;
}

.dark aside::-webkit-scrollbar-thumb {
	background: rgba(255, 255, 255, 0.1);
}
</style>