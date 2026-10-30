import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * GitHub Pages serves static files only, so a direct hit on /about would 404.
 * Shipping a copy of index.html as 404.html makes Pages hand every unknown path
 * back to the app, and React Router then renders the right page.
 */
const githubPagesSpaFallback = (): Plugin => ({
  name: 'github-pages-spa-fallback',
  apply: 'build',
  closeBundle() {
    const dist = resolve(__dirname, 'dist')
    copyFileSync(resolve(dist, 'index.html'), resolve(dist, '404.html'))
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), githubPagesSpaFallback()],
  base: '/',
})
