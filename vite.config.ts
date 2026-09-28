import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Street-Digital-AI/',
  plugins: [react()],
  server: {
    port: Number(process.env.PORT) || 5173,
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
})
