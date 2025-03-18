

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/', // Asegura que la base sea correcta
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  }
})