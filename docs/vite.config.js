import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // or 'dist' if that’s what you use
  },
  server: {
    proxy: {
      "/rest": "http://localhost:3333",
    },
  },
})
