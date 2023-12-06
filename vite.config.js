// vite.config.js

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import VitePages from 'vite-plugin-pages';
import ViteLayouts from 'vite-plugin-vue-layouts';
import ViteWind from 'vite-plugin-windicss';
import ViteSvgIcons from 'vite-plugin-svg-icons';
import ViteComponents from 'vite-plugin-components';
import ViteIconsResolver from 'vite-plugin-icons-resolver';

export default defineConfig({
  base: "/vue-tailwind-portfolio/",
  plugins: [vue(),
    VitePages(),
    ViteLayouts(),
    ViteWind(),
    ViteSvgIcons({
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[name]',
    }),
    ViteComponents(),
    ViteIconsResolver(),
    // Add vite-plugin-gh-pages
    require('vite-plugin-gh-pages')(),],
  
  assetsInclude: ["**/*.JPG"],
  resolve: {
    alias: {
      "@": "/src", // Adjust the alias path
    },
  },
});
