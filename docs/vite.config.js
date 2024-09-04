import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/show-some-reaction-1/', // set this to your repository name
  plugins: [react()],
  build: {
    outDir: 'dist', 
  },
  server: {
    proxy: {
      "/rest": "http://localhost:3333",
    },
  },
})
