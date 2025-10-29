import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from "vite-plugin-svgr"
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
  ],
  resolve: {
    alias: {
      '@public': path.resolve(__dirname, './public'),
      '@api': path.resolve(__dirname, './src/api'),
      '@app': path.resolve(__dirname, './src/app'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@global': path.resolve(__dirname, './src/global'),
      '@features': path.resolve(__dirname, './src/features'),
      '@navigation': path.resolve(__dirname, './src/navigation'),
    }
  }
})