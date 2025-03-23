import { Link } from 'react-router-dom'
import './styles/App.css'

function App() {

  const links = [
    { path: 'exemplo-01-animation', title: 'Propriedade Animation' },
    { path: 'exemplo-02-abreviado', title: 'Animation Abreviada' },
    { path: 'exemplo-03-porcentagens', title: 'Frames Intermediários' },
    { path: 'exemplo-04-loader-imgs', title: 'Animação de Imagens' },
    { path: 'exemplo-05-imgs-sprites', title: 'Animação com Sprites' },
    { path: 'exemplo-06-animation-delays', title: 'Combinando Animações' },
    { path: 'exemplo-07-delays-hover', title: 'Gatilho com :hover' },
    { path: 'exemplo-08-imgs-hover', title: 'Gatilho e Imagens' },
    { path: 'exemplo-09-skeleton', title: 'Loader Skeleton' },
  ]

  return (
    <>
      <div className="container">
        <h1 className="nes-text is-success">CSTSI - AEI
          <a className="is-success" target="_blank" href="#">Aula 02</a>
        </h1>
        <ul className="nes-list">
          {
            links.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>
                  <button type="button" className="nes-btn is-primary"> {'>>'} </button>
                  {` Exemplo 0${index+1} ${item.title}`}
                </Link>
              </li>
            ))
          }
        </ul>
        <div>
          <img src="assets/svgs/react.svg" alt="react" className="nes-avatar is-large logo react-spin" />
          <img src="assets/svgs/vite.svg" alt="vite" className="nes-avatar is-large logo vite-logo" />
        </div>
      </div>
    </>
  )
}

export default App
