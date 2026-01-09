import {defineStore} from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    dark: true
  }),
  actions: {
    toggleTheme() {
      this.dark = !this.dark

      if (this.dark) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    },

    initTheme() {
      const saved = localStorage.getItem('theme')
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches

      this.dark = saved === 'dark' || (!saved && prefersDark)

      if (this.dark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }
})
