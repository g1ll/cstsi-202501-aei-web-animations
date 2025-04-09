import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'exemplo-01-intro-animejs': resolve(__dirname, 'pages/exemplo-01-intro-animejs/index.html'),
      }
    },
  },
})