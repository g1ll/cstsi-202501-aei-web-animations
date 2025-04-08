import { Container, LogoAnimateCss, LogoJs, LogoVite, Main } from "./Exemplo04UtilityClass.styled"

const Exemplo04UtilityClass = () => {
  return (
      <Main>
          <Container>
            <LogoAnimateCss className="animate__animated animate__backInUp animate__fast animate__delay-5s"/>
            <LogoVite className="animate__animated animate__flip animate__slower animate__repeat-3"/>
            <LogoJs className="animate__animated animate__rotateIn animate__slow animate__delay-2s"/> 
          </Container>
        </Main>
  )
}

export default Exemplo04UtilityClass