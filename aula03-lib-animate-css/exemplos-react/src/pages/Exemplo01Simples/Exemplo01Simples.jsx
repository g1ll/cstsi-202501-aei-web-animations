import { Container, GlobalStyle } from '../../styles/globals.styled';

const Exemplo01Animation = () => {
  return (
    <main>
      <title>CSTI-5SEM-AEI-Aula03 | Animate.css: Exemplo 01</title>
      <Container>
        <h1 className="animate__animated animate__bounce">
          Primeiro Exemplo de Animação com Animate.CSS</h1>
        <a href="/"><span>&larr;</span> Voltar</a>
      </Container>
    </main>
  )
}

export default Exemplo01Animation;

