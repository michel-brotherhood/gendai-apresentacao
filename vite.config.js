import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves project sites from a /<repo>/ subpath; other hosts
  // (Vercel, Netlify) serve from the domain root, so this defaults to '/'.
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
})
