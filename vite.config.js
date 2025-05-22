import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/E-commerce/",  
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5173',
        rewrite: (path) => path.replace(/^\/api/, '/E-commerce/api'),
        changeOrigin: true
      }
    }
  },
  build: {
    assetsInlineLimit: 0 
  }
})