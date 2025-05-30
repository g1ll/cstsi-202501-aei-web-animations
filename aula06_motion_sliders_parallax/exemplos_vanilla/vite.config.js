import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import { pages } from './src/pages.js'

const __dirname = dirname(fileURLToPath(import.meta.url))


const inputPages = {}
pages.forEach(page => {
  inputPages[page.path]= resolve(__dirname,`pages/${page.path}/index.html`);
});

export default   defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...inputPages
       }
    },
  },
  plugins:[
    tailwindcss()
  ]
})