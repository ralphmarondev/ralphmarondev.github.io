import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigate', {
  state: () => ({
    activeSection: 'home'
  }),
  actions: {
    setActiveSection (section: string) {
      this.activeSection = section
    }
  }
})
