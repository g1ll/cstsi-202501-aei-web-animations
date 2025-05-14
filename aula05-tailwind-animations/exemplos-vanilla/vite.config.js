import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'exemplo-01-intro-tailwind': resolve(__dirname, 'pages/exemplo-01-intro-tailwind/index.html'),
        'exemplo-02-seletor-utils': resolve(__dirname, 'pages/exemplo-02-svgs/index.html'),
        'exemplo-03-slider-imagem': resolve(__dirname, 'pages/exemplo-03-slider-imagem/index.html'),
        'exemplo-04-motion-path': resolve(__dirname, 'pages/exemplo-04-motion-path/index.html'),
        'exemplo-05-svg-icon': resolve(__dirname, 'pages/exemplo-05-svg-icon/index.html'),
       }
    },
  },
  plugins:[
     tailwindcss(),
  ]
})