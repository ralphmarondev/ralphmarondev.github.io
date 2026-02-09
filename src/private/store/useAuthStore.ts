import {defineStore} from 'pinia'
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {ref} from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<null | { email: string }>(null)
  const loading = ref(true)

  const login = async (email: string, password: string) => {
    const auth = getAuth()
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    user.value = {email: userCredential.user.email ?? ''}
  }

  const logout = async () => {
    const auth = getAuth()
    await signOut(auth)
    user.value = null
  }

  const fetchUser = (): Promise<void> => {
    return new Promise((resolve) => {
      const auth = getAuth()

      onAuthStateChanged(auth, (u) => {
        user.value = u ? {email: u.email ?? ''} : null
        loading.value = false
        resolve()
      })
    })
  }

  return {user, loading, login, logout, fetchUser}
})
