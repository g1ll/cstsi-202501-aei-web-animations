import animatecssLogo from '/assets/img/animatecss-opengraph.jpg?url'

const links = [
  { path: 'exemplo-01-animation', title: 'Exemplo 01: Aplicando Animação com Classe' },
  { path: 'exemplo-02-keyframes', title: 'Exemplo 02: Animation @Keyframes' },
]

const DOMlist = document.querySelector('ul')
links.forEach((item) => DOMlist.innerHTML += `
  <li>
    <a href="/pages/${item.path}/index.html">
      ${item.title}
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
