import animeJsLogo from '/assets/img/animejs_logo.png?url'
import {startAnimations} from './animations.js' 


const links = [
  { path: 'exemplo-01-intro-animejs', title: 'Introdução a Biblioteca' },
  { path: 'exemplo-02-seletor-utils', title: 'Seletores com o Objeto Utils' },
  { path: 'exemplo-03-slider-imagem', title: 'Slider Imagem' },
  { path: 'exemplo-04-motion-path', title: 'SVG Motion Path' },
  { path: 'exemplo-05-svg-icon', title: 'Animando um Icone SVG' },
  { path: 'exemplo-06-morph-svg', title: 'Função Morph SVG' },
  ]

const DOMlist = document.querySelector('ul')
links.forEach((item,index) =>{ 
  let menuItem =  `Exemplo 0${index+1} - ${(item.title)}`;
  let contentArray = menuItem.split('');
  let content = contentArray.map((letter) => {
    return `<span>${letter===' '?'&nbsp;':letter}</span>`
  }).join('')
  DOMlist.innerHTML += `
  <li>
    <a href="/pages/${item.path}/index.html">
      <h3>${content}</h3>
    </a>
  </li>
`})

const DivImages = document.querySelector('div > img').parentElement
console.log(DivImages)

const linkAnimatecssDocs = document.createElement('a')
linkAnimatecssDocs.href = 'https://animejs.com/documentation/getting-started'
linkAnimatecssDocs.target = '_blank'

const imgAnimeJsLogo = document.createElement('img')
imgAnimeJsLogo.src = animeJsLogo;
imgAnimeJsLogo.alt = 'AnimeJS Logo'
imgAnimeJsLogo.classList.add('logoAnimeJs');
imgAnimeJsLogo.onload = () => startAnimations()
linkAnimatecssDocs.appendChild(imgAnimeJsLogo)
DivImages.appendChild(linkAnimatecssDocs)
