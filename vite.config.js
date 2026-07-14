import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: '/REPO_NAME/' is required for GitHub Pages project sites.
// If you deploy to Vercel/Netlify, or to a username.github.io root repo, set base back to '/'.
export default defineConfig({
  plugins: [react()],
  base: './',
})
