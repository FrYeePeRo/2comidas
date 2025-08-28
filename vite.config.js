import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
    open: true,
    host: true // Para acceso desde otros dispositivos en la red
  },
  build: {
    // Optimizaciones para producción
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          bootstrap: ['bootstrap', '@popperjs/core']
        }
      }
    },
    // Optimizar assets
    assetsDir: 'assets',
    // Generar sourcemaps para debugging
    sourcemap: false
  },
  // Optimizaciones adicionales
  optimizeDeps: {
    include: ['vue', 'vue-router', 'bootstrap']
  }
})
