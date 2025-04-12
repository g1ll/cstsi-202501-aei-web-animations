import { Link } from 'react-router-dom'
import { pages } from './config/routes'
import { useEffect, useRef, useState } from 'react'
import animatecssLogoSrc from '/assets/img/animejs_logo.png?url'
import { AnimateCSSLogo, LogosContainer } from './styles/App.styled'
import { animate } from 'animejs'

function App() {
  const [showAnimateCSSLogo, setShowAnimateCSSLogo] = useState(false)
  const animateCSSLogoRef = useRef(null);

  const applyAnimations = () => {
    console.log(animateCSSLogoRef.current)
    animateCSSLogoRef.current && animate(animateCSSLogoRef.current, {
      opacity: [0, 1],
      translateY: ['100%', '0%'],
      duration: 2000,
      easing: 'easeIn',
      delay: 2000,
      autoplay: true,
    });

    animate('.react-spin',{
      opacity: [0, 1],
      alternate: true,
      rotate: '-1turn',
      loop: true,
      duration:5000,
      onBegin: self =>{
        console.log('onBegin',self)
        animate('.react-spin',{
          scale:[0,1],
          loop:false,
          duration: self.iterationDuration,
        });
      }
    });

    animate('.vite-logo', {
      keyframes: [
          { translateX: 450, rotateZ: '0deg', opacity: 0 },
          { translateX: 0, rotateZ: '360deg', opacity: 1 },
      ],
      duration: 2000,
      easing: 'easeInOutQuad',
      play: 'paused',
  });
  }

  useEffect(() => {
    !showAnimateCSSLogo && setShowAnimateCSSLogo(true)
    applyAnimations()
  }, [showAnimateCSSLogo]);

  return (
    <>
      <div className="container">
        <h1>CSTSI - AEI
          <a target="_blank" href="#">&nbsp;Aula 04</a>
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
          <img  src="assets/svgs/react.svg" alt="react" className="logo react-spin" />
          <img src="assets/svgs/vite.svg" alt="vite" className="logo vite-logo" />
          {showAnimateCSSLogo ?
            <Link to={'https://animejs.com/documentation/getting-started/using-with-react'} target="_blank">
              <AnimateCSSLogo ref={animateCSSLogoRef} src={animatecssLogoSrc} />
            </Link>
            : ''}
        </LogosContainer>
      </div>
    </>
  )
}

export default App
