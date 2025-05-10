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
        'exemplo-02-seletor-utils': resolve(__dirname, 'pages/exemplo-02-seletor-utils/index.html'),
        'exemplo-03-slider-imagem': resolve(__dirname, 'pages/exemplo-03-slider-imagem/index.html'),
        'exemplo-04-motion-path': resolve(__dirname, 'pages/exemplo-04-motion-path/index.html'),
        'exemplo-05-svg-icon': resolve(__dirname, 'pages/exemplo-05-svg-icon/index.html'),
        'exemplo-06-morph-svg': resolve(__dirname, 'pages/exemplo-06-morph-svg/index.html'),
      }
    },
  },
})