import { Link } from 'react-router-dom'
import { pages } from './config/routes'
import { useEffect, useRef, useState } from 'react'
import animatecssLogoSrc from '/assets/img/animatecss-opengraph.jpg?url'
import { AnimateCSSLogo, LogosContainer } from './styles/App.styled'

function App() {
  const [showAnimateCSSLogo, setShowAnimateCSSLogo] = useState(false)
  const animateCSSLogoRef = useRef(null);

  useEffect(() => {
    !showAnimateCSSLogo && setShowAnimateCSSLogo(true)
    if (animateCSSLogoRef.current) {
      animateCSSLogoRef.current.src = animatecssLogoSrc
      animateCSSLogoRef.current.classList.add('animate__animated', 'animate__fadeIn', 'animate__delay-2s')
    }
  },[showAnimateCSSLogo]);

  return (
    <>
      <div className="container">
        <h1>CSTSI - AEI
          <a target="_blank" href="#">&nbsp;Aula 03</a>
        </h1>
        <ul>
          {pages.map(({ path, title }, index) => (
            <li key={index}>
              <Link to={path}>
                {` Exemplo 0${index + 1} ${title}`}
              </Link>
            </li>
          ))}
        </ul>
        <LogosContainer>
          <img src="assets/svgs/react.svg" alt="react" className="logo react-spin" />
          <img src="assets/svgs/vite.svg" alt="vite" className="logo vite-logo" />
          {showAnimateCSSLogo ?
            <Link to={'https://animate.style/#documentation'} target="_blank">
              <AnimateCSSLogo ref={animateCSSLogoRef} />
            </Link>
            : ''}
        </LogosContainer>
      </div>
    </>
  )
}

export default App
