import { pages } from './pages';

const DOMlist = document.querySelector('ul')
pages.forEach((item,index) =>{ 
  let menuItem =  `Exemplo 0${index+1} - ${(item.title)}`;
  DOMlist.innerHTML += `
  <li>
    <a href="/pages/${item.path}/index.html">
      <h3 class='hover:bg-primary_bg text-[1rem]! px-5 text-2xl w-full lg:mb-5! lg:text-3xl duration-5000 
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
