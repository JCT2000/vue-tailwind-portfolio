// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/triana-portfolio/',
  plugins: [vue()],
  assetsInclude: ['**/*.JPG'],
  resolve: {
    alias: {
      '@': '/src', // Adjust the alias path
    },
  },
})
