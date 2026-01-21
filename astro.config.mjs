// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
     site: 'https://kcmsmartdev.github.io',
  base: '/kenerdevweb/', 
  vite: {
    plugins: [tailwindcss()],
  },
});
