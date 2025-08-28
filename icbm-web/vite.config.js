import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // This base path is the name of your repository on GitHub
  base: '/React-ICBM/', 
  plugins: [react()],
})