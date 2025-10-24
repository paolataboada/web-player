import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@public': path.resolve(__dirname, './public'),
      '@global': path.resolve(__dirname, './src/global'),
      '@features': path.resolve(__dirname, './src/features'),
      '@navigation': path.resolve(__dirname, './src/navigation'),
    }
  }
})