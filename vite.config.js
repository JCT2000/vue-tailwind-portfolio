// vite.config.js
<<<<<<< HEAD
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/vue-tailwind-portfolio/",
  plugins: [vue()],
  assetsInclude: ["**/*.JPG"],
  resolve: {
    alias: {
      "@": "/src", // Adjust the alias path
    },
  },
});
=======
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
>>>>>>> parent of 44239a7 (Updates)
