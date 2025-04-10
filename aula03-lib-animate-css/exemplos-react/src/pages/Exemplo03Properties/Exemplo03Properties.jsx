import React from 'react'
import { Container, LogoAnimateCssFadeIn, LogoJs, LogoVite, Main } from './Exemplo03Properties.styled'

const Exemplo03Properties = () => {
  return (
    <Main>
      <Container>
        {/* animate__delay-2s (--animate-delay)  */}
        <LogoJs className="animate__animated animate__lightSpeedInRight animate__delay-2s"/> 
        <LogoVite className="animate__animated animate__bounce"/>
        <LogoAnimateCssFadeIn className="animate__animated animate__fadeIn"/>
      </Container>
    </Main>
  )
}

export default Exemplo03Properties
