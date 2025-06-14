import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      tailwindcss()
    ],
    base: mode === 'production' ? '' : '',
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  }
})
