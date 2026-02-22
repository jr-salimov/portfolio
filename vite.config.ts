import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/sass-variables.scss" as *; @use "@/mixins.scss" as *;`,
      },
    },
  },
  server: {
    host: '0.0.0.0', // Listen on all network interfaces
    port: 5173,
    strictPort: true,
    hmr: {
      protocol: 'wss', // Use secure WebSocket
      host: '0.0.0.0',
      port: 5173,
      clientPort: 5173,
      timeout: 10000,
      overlay: true,
    },
    watch: {
      usePolling: true,
      interval: 1000,
    },
    cors: true, // Enable CORS
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})
