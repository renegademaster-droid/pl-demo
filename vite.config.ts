import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// GitHub Pages: base = repon nimi (https://user.github.io/pl-demo/)
export default defineConfig({
  base: '/pl-demo/',
  plugins: [react()],
})
