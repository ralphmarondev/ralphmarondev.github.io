<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const username = ref('')
const password = ref('')

const onLogin = () => {
  console.log(`Username: ${username.value}, Password: ${password.value}`)

  if (username.value === 'admin' && password.value === 'admin') {
    router.push({ name: 'password-keeper-home' })
  } else {
    alert('Invalid username or password')
  }
}
</script>

<template>
  <section class="section vh-100">
    <div class="container">
      <div class="section-heading">
        <h3>Password Keeper</h3>
      </div>

      <div
        class="shadow-sm p-4 mb-5 bg-body rounded"
        style="max-width: 400px; margin: auto"
      >
        <form @submit.prevent="onLogin">
          <div class="mb-3">
            <label for="username" class="form-label">Username:</label>
            <input
              type="text"
              class="form-control"
              id="username"
              v-model="username"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password:</label>
            <input
              type="password"
              class="form-control"
              id="password"
              v-model="password"
              required
            />
          </div>

          <button type="submit" class="btn btn-primary">Login</button>
        </form>
      </div>
    </div>
  </section>
</template>
