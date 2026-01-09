<script setup lang="ts">
import {useThemeStore} from '@/store/useThemeStore.ts'
import {useLayoutStore} from '@/store/useLayoutStore.ts'
import {computed, onMounted, ref} from 'vue'
import {useRouter} from 'vue-router'
import {useAuthStore} from '@/store/useAuthStore.ts'

const auth = useAuthStore()
const layout = useLayoutStore()
const router = useRouter()
const theme = useThemeStore()

const ping = ref(75)
onMounted(() => {
	setInterval(() => {
		ping.value = Math.floor(50 + Math.random() * 100)
	}, 5000)
})

const signalLevel = computed(() => {
	if (ping.value < 80) return 3
	if (ping.value < 120) return 2
	return 1
})

const showAccountDropdown = ref(false)
const toggleAccountDropdown = () => {
	showAccountDropdown.value = !showAccountDropdown.value
	closeNotifDropdown()
}
const closeAccountDropdown = () => (showAccountDropdown.value = false)

const showNotifDropdown = ref(false)
const toggleNotifDropdown = () => {
	showNotifDropdown.value = !showNotifDropdown.value
	closeAccountDropdown()
}
const closeNotifDropdown = () => (showNotifDropdown.value = false)

const goToAccount = () => {
	closeAccountDropdown()
	console.log('Navigate to account index')
}

const logout = () => {
	auth.logout()
	closeAccountDropdown()
	router.push({name: 'login'})
}

const markAllAsRead = () => {
	console.log('Marking all notifications as read')
	showNotifDropdown.value = false
}
</script>

<template>
	<header
			class="sticky top-0 w-full flex items-center justify-between px-4 md:px-6 py-3 bg-gradient-to-r from-pink-50/90 to-purple-50/90 dark:from-gray-800/95 dark:to-gray-900/95 backdrop-blur-sm border-b border-pink-100/50 dark:border-gray-700/50 shadow-soft z-40 transition-all duration-300">
		<div class="flex items-center gap-3">
			<button
					@click="layout.toggleSidebar"
					aria-label="Toggle menu"
					class="relative p-2.5 rounded-xl transition-all duration-300 hover:bg-white/80 dark:hover:bg-gray-700/80   hover:shadow-md active:scale-95">
				<i class="bx bx-menu text-2xl text-pink-600 dark:text-pink-400"></i>
			</button>
			<div class="hidden md:flex items-center gap-3 ps-8">
				<div class="relative">
					<div
							class="w-12 h-12 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 dark:from-gray-700 dark:to-gray-800 p-1.5">
						<div class="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
							<div class="relative">
								<div class="flex items-end gap-0.5">
									<span
											v-for="i in 3"
											:key="i"
											class="w-1.5 rounded-full transition-all duration-500"
											:class="[
                      i <= signalLevel
                        ? 'bg-gradient-to-t from-green-400 to-emerald-500'
                        : 'bg-gray-300 dark:bg-gray-600',
                      i === 1 ? 'h-2' : i === 2 ? 'h-3' : 'h-4'
                    ]"
									></span>
								</div>
							</div>
						</div>
					</div>
					<span class="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white dark:border-gray-800"
					      :class="ping < 80 ? 'bg-emerald-500' : ping < 120 ? 'bg-amber-500' : 'bg-red-500'">
					</span>
				</div>
				<div>
					<p class="text-xs text-gray-500 dark:text-gray-400 font-medium">Connection</p>
					<p class="text-sm font-semibold text-gray-700 dark:text-gray-200">
						{{ ping }}<span class="text-xs font-normal">ms</span>
					</p>
				</div>
			</div>
		</div>

		<div class="flex items-center gap-2 md:gap-4">
			<button
					@click="theme.toggleTheme"
					aria-label="Toggle theme"
					class="relative p-2.5 rounded-xl transition-all duration-300 group hover:bg-white/80 dark:hover:bg-gray-700/80 hover:shadow-md active:scale-95">
				<i class="bx text-xl transition-all duration-500"
				   :class="[
            theme.dark
              ? 'bx-sun text-amber-500 group-hover:text-amber-600'
              : 'bx-moon text-purple-600 dark:text-purple-400'
          ]"
				></i>
			</button>

			<div class="relative">
				<button
						@click="toggleNotifDropdown"
						aria-label="Notifications"
						class="relative p-2.5 rounded-xl transition-all duration-300 group hover:bg-white/80 dark:hover:bg-gray-700/80  hover:shadow-md active:scale-95">
					<i class="bx bx-bell text-xl text-gray-600 dark:text-gray-300 group-hover:text-pink-600 dark:group-hover:text-pink-400"></i>
					<span class="absolute top-1.5 right-1.5 w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
				</button>

				<transition name="dropdown">
					<div v-if="showNotifDropdown"
					     class="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-2xl py-3 z-50 backdrop-blur-sm">
						<div class="px-4 py-2 border-b border-gray-100 dark:border-gray-700">
							<div class="flex items-center justify-between">
								<h3 class="font-semibold text-gray-800 dark:text-gray-200">Notifications</h3>
								<button
										@click="markAllAsRead"
										class="text-xs text-pink-600 hover:text-pink-700">
									Mark all read
								</button>
							</div>
						</div>
						<div class="max-h-64 overflow-y-auto">
							<div
									class="px-4 py-3 hover:bg-pink-50/30 dark:hover:bg-gray-700/50   transition-colors cursor-pointer border-b border-gray-50 dark:border-gray-700/50">
								<div class="flex items-start gap-3">
									<div
											class="w-10 h-10 rounded-full bg-gradient-to-br from-pink-100 to-purple-100  dark:from-gray-700 flex items-center justify-center">
										<i class="bx bx-heart text-pink-600 dark:text-pink-400"></i>
									</div>
									<div class="flex-1">
										<p class="text-sm text-gray-700 dark:text-gray-300">
											<span class="font-medium">Memory from 2 years ago</span> is trending in your feed
										</p>
										<p class="text-xs text-gray-500 mt-1">2 hours ago</p>
									</div>
								</div>
							</div>

							<div class="px-4 py-3 hover:bg-pink-50/30 dark:hover:bg-gray-700/50 transition-colors cursor-pointer">
								<div class="flex items-start gap-3">
									<div
											class="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-gray-700 flex items-center justify-center">
										<i class="bx bx-calendar text-blue-600 dark:text-blue-400"></i>
									</div>
									<div class="flex-1">
										<p class="text-sm text-gray-700 dark:text-gray-300">
											Today's <span class="font-medium">Memory Reflection</span> is ready
										</p>
										<p class="text-xs text-gray-500 mt-1">Yesterday</p>
									</div>
								</div>
							</div>
						</div>
						<div class="px-4 py-3 border-t border-gray-100 dark:border-gray-700">
							<router-link
									to="/notifications"
									class="text-sm text-pink-600 hover:text-pink-700 font-medium text-center block">
								View All Notifications
							</router-link>
						</div>
					</div>
				</transition>
			</div>

			<div class="relative">
				<button
						@click="toggleAccountDropdown"
						aria-label="Account menu"
						class="flex items-center gap-2 p-1 rounded-2xl transition-all duration-300 hover:bg-white/80 dark:hover:bg-gray-700/80 hover:shadow-md active:scale-95">
					<span class="relative">
						<img
								src="/ralphmaron.png"
								alt="Ralph Maron Eda"
								class="w-9 h-9 rounded-full object-cover border-2 border-white dark:border-gray-800 shadow-sm"
						/>
						<span
								class="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-gray-800"></span>
					</span>
					<span class="hidden md:inline text-sm font-medium text-gray-700 dark:text-gray-300">
            {{ auth.user?.email || 'User' }}
          </span>
					<i class="bx bx-chevron-down text-gray-500 hidden md:inline"></i>
				</button>

				<transition name="dropdown">
					<div
							v-if="showAccountDropdown"
							class="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-2xl py-2 z-50 backdrop-blur-sm">
						<div class="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
							<p class="font-semibold text-gray-800 dark:text-gray-200">
								{{ auth.user?.email || 'My Account' }}
							</p>
							<p class="text-xs text-gray-500">{{ auth.user?.email || 'user@cutie.com' }}</p>
						</div>
						<button
								@click="goToAccount"
								class="flex items-center w-full px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-700 transition-colors group">
							<span
									class="w-8 h-8 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
								<i class="bx bx-user text-pink-600 dark:text-pink-400"></i>
							</span>
							<span>My Profile</span>
						</button>

						<button
								@click="logout"
								class="flex items-center w-full px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-gray-700 transition-colors group">
							<span
									class="w-8 h-8 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
								<i class="bx bx-log-out text-red-600 dark:text-red-400"></i>
							</span>
							<span>Logout</span>
						</button>
					</div>
				</transition>
			</div>
		</div>
	</header>
</template>

<style scoped>
.shadow-soft {
	box-shadow: 0 2px 20px -5px rgba(0, 0, 0, 0.05),
	0 1px 3px -1px rgba(0, 0, 0, 0.03);
}

::-webkit-scrollbar {
	width: 6px;
}

::-webkit-scrollbar-track {
	background: #f1f1f1;
	border-radius: 3px;
}

::-webkit-scrollbar-thumb {
	background: #e5e7eb;
	border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
	background: #d1d5db;
}

.dark ::-webkit-scrollbar-track {
	background: #374151;
}

.dark ::-webkit-scrollbar-thumb {
	background: #4b5563;
}

.dark ::-webkit-scrollbar-thumb:hover {
	background: #6b7280;
}
</style>
