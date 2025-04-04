import animatecssLogo from '/assets/img/animatecss-opengraph.jpg?url'

const links = [
  { path: 'exemplo-01-animation', title: 'Aplicando Animação com Classe' },
  { path: 'exemplo-02-keyframes', title: 'Animation @Keyframes' },
  { path: 'exemplo-03-custom-properties', title: 'CSS Variables' },
  { path: 'exemplo-04-utility-class', title: 'Utility Class' },

]

const DOMlist = document.querySelector('ul')
links.forEach((item,index) => DOMlist.innerHTML += `
  <li>
    <a href="/pages/${item.path}/index.html">
      Exemplo ${index+1}: ${item.title}
    </a>
  </li>
` )

const DivImages = document.querySelector('div > img').parentElement
console.log(DivImages)

const linkAnimatecssDocs = document.createElement('a')
linkAnimatecssDocs.href = 'https://animate.style/#documentation'
linkAnimatecssDocs.target = '_blank'

const imgAnimatecssLogo = document.createElement('img')
imgAnimatecssLogo.src = animatecssLogo;
imgAnimatecssLogo.alt = 'Animate.css Logo'
imgAnimatecssLogo.classList.add('logoAnimatecss','animate__animated', 'animate__fadeIn','animate__delay-2s')

linkAnimatecssDocs.appendChild(imgAnimatecssLogo)
DivImages.appendChild(linkAnimatecssDocs)
