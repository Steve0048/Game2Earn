import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // 1. Désactive les Source Maps pour cacher ton code source
    sourcemap: false,
    
    // 2. Minification avec Terser
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Supprime les console.log
        drop_debugger: true,
      },
      mangle: {
        toplevel: true, // Mélange les noms de variables
      },
    },
  },
})