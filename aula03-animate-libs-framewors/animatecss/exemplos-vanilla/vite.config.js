import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'exemplo-01-simples': resolve(__dirname, 'pages/exemplo-01-simples/index.html'),
        'exemplo-02-keyframes': resolve(__dirname, 'pages/exemplo-02-keyframes/index.html'),
        'exemplo-03-custom-properties': resolve(__dirname, 'pages/exemplo-03-custom-properties/index.html'),   
        'exemplo-04-utility-class': resolve(__dirname, 'pages/exemplo-04-utility-class/index.html'),   
      }
    },
  },
})