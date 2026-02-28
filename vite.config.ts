import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub Pages: base = '/repo-name/' (vaihda jos repon nimi on eri)
export default defineConfig({
  base: '/demosite/',
  plugins: [react()],
})
