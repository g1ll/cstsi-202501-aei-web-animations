const links = [
  { path: 'exemplo-01-animation', title: 'Exemplo 01: Propriedade Animation' },
  { path: 'exemplo-02-abreviado', title: 'Exemplo 02: Animation Abreviada' },
  { path: 'exemplo-03-porcentagens', title: 'Exemplo 03: Frames Intermediários' },
  { path: 'exemplo-04-loader-imgs', title: 'Exemplo 04: Animação de Imagens' },
  { path: 'exemplo-05-imgs-sprites', title: 'Exemplo 05: Animação com Sprites' },
  { path: 'exemplo-06-animation-delays', title: 'Exemplo 06: Combinando Animações' },
  { path: 'exemplo-07-delays-hover', title: 'Exemplo 07: Gatilho com :hover' },
  { path: 'exemplo-08-imgs-hover', title: 'Exemplo 08: Gatilho e Imagens' },
  { path: 'exemplo-09-skeleton', title: 'Exemplo 09: Loader Skeleton' },
]

const DOMlist = document.querySelector('ul')
links.forEach((item) => DOMlist.innerHTML += `
  <li>
    <a href="/pages/${item.path}/index.html">
      <button type="button" class="nes-btn is-primary">>></button>
      ${item.title}
    </a>
  </li>
` )
