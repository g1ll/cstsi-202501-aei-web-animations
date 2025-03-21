import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'exemplo-01-animation': resolve(__dirname, 'pages/exemplo-01-animation/index.html'),
        'exemplo-02-abreviado': resolve(__dirname, 'pages/exemplo-02-abreviado/index.html'),
        'exemplo-03-porcentagens': resolve(__dirname, 'pages/exemplo-03-porcentagens/index.html'),
        'exemplo-04-loader-imgs': resolve(__dirname, 'pages/exemplo-04-loader-imgs/index.html'),
        'exemplo-05-imgs-sprites': resolve(__dirname, 'pages/exemplo-05-imgs-sprites/index.html'),
        'exemplo-06-animation-delays': resolve(__dirname, 'pages/exemplo-06-animation-delays/index.html'),
        'exemplo-07-delays-hover': resolve(__dirname, 'pages/exemplo-07-delays-hover/index.html'),
        'exemplo-08-imgs-hover': resolve(__dirname, 'pages/exemplo-08-imgs-hover/index.html'),
        'exemplo-09-skeleton': resolve(__dirname, 'pages/exemplo-09-skeleton/index.html'),      
      }
    },
  },
})