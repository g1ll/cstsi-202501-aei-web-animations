import tailwindJsLogo from '/assets/svgs/tailwind.svg?url'

const links = [
  { path: 'exemplo-01-intro-tailwind', title: 'Introdução ao Framework' },
  { path: 'exemplo-02-svgs', title: 'Animações em Propriedades SVGs' },
  { path: 'exemplo-03-slider-imagem', title: 'Slider Imagem' },
  { path: 'exemplo-04-motion-path', title: 'SVG Motion Path' },
  { path: 'exemplo-05-svg-icon', title: 'Animando um Icone SVG' },
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
      <h3 class='hover:bg-primary_bg'>${content}</h3>
    </a>
  </li>
`})

const DivImages = document.querySelector('ul ~ div')
console.log(DivImages)

const imgTailwindLogo = document.createElement('img')
imgTailwindLogo.src = tailwindJsLogo;
imgTailwindLogo.alt = 'Tailwind Logo'
imgTailwindLogo.classList.add('animate-pulse');
DivImages.appendChild(imgTailwindLogo)
