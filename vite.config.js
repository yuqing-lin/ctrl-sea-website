import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set base to '/ctrl-sea-website/' if deploying to https://<user>.github.io/ctrl-sea-website/
// Change to '/' if using a custom domain or deploying to the root of a GitHub Pages user site.
export default defineConfig({
  plugins: [react()],
  base: '/ctrl-sea-website/',
})
