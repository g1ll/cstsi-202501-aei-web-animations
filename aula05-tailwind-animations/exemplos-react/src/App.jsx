import { Link } from 'react-router-dom'
import { pages } from './config/routes'
import tailwindCssLogoSrc from '/assets/svgs/tailwind.svg?url'
import { LogosContainer } from './styles/App.styled'
import MenuItem from './components/MenuItem/MenuItem'
import { Container } from './styles/globals.styled'
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';

function App() {

  return (
    <>
      <Container>
        <h1>CSTSI - AEI
          <a target="_blank" href="#">&nbsp;Aula 05</a>
        </h1>
        <ul className="z-20">
          {pages.map(({ path, title }, index) => (
            <MenuItem
              key={index}
              path={path}
              title={title}
              index={index}
            />
          ))}
        </ul>
        <div className="absolute z-10  w-3/4 pt-50">
            <Link to={'https://tailwindcss.com/docs/installation/using-vite'} target="_blank">
              <img className="animate-pulse" src={tailwindCssLogoSrc} />
            </Link>
        </div>
        <LogosContainer className="z-30 animate-[spin_3000ms_ease_0ms]">
          <img  src={reactLogo} alt="react" 
            className="logo animate-[spin_5s_linear_1000ms_infinite]"/>
          <img src={viteLogo} alt="vite" 
            className="logo vite-logo animate-flip" />
        </LogosContainer>
      </Container>
    </>
  )
}

export default App
