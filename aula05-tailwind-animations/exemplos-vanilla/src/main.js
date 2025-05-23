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
  DOMlist.innerHTML += `
  <li>
    <a href="/pages/${item.path}/index.html">
      <h3 class='hover:bg-primary_bg text-[1rem]! text-2xl w-full lg:mb-5! lg:text-3xl duration-5000 
                    hover:bg-primary-500 rounded-2xl hover:duration-1000'>${menuItem}</h3>
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
