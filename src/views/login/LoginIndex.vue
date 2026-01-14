<script setup lang="ts">
import {ref} from 'vue'
import {useAuthStore} from '@/store/useAuthStore.ts'
import {useRouter} from 'vue-router'

const email = ref('ralphmaron@cute.super') // for testing :)
const password = ref('') // guess the password :)
const isLoading = ref(false)
const errorMessage = ref('')
const currentYear = ref(new Date().getFullYear())

const auth = useAuthStore()
const router = useRouter()

const handleLogin = async () => {
	errorMessage.value = ''
	isLoading.value = true

	try {
		await auth.login(email.value, password.value)
		await router.push({name: 'dashboard'})
	} catch (err: any) {
		console.error('Login error:', err)
		errorMessage.value = 'Login failed. Please try again.'
	} finally {
		isLoading.value = false
	}
}
</script>

<template>
	<div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
		<div
				class="w-full max-w-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-8 animate-fade-in">
			<div class="mb-6 text-center">
				<h1 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">Welcome Back</h1>
				<p class="text-gray-600 dark:text-gray-300 text-sm">
					Oops... looks like you found a private corner 👀 Only for your eyes!
				</p>
			</div>

			<form @submit.prevent="handleLogin" class="flex flex-col gap-4">
				<input
						v-model="email"
						type="email"
						placeholder="Email"
						class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
						required
				/>
				<input
						v-model="password"
						type="password"
						placeholder="Password"
						class="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
						required
				/>

				<button
						type="submit"
						:disabled="isLoading"
						class="w-full mt-4 bg-pink-500 hover:bg-pink-600 disabled:bg-pink-400 text-white font-medium py-2 rounded-lg transition flex items-center justify-center gap-2"
				>
					<span v-if="isLoading"
					      class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
					{{ isLoading ? 'Logging in...' : 'Log In' }}
				</button>

				<p v-if="errorMessage" class="text-red-500 text-sm text-center mt-2">{{ errorMessage }}</p>
			</form>

			<footer class="mt-6 text-xs text-gray-500 dark:text-gray-400 text-center">
				&copy; {{ currentYear }} Ralph Maron Eda
			</footer>
		</div>
	</div>
</template>

<style scoped>
@keyframes fade-in {
	from {
		opacity: 0;
		transform: translateY(15px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.animate-fade-in {
	animation: fade-in 0.5s ease-out;
}

input:focus {
	box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.3); /* pink-ish glow */
}
</style>
