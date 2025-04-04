import React, { useEffect, useState } from 'react'
import { Container, ContainerExamples, GlobalStyles, Skeleton } from './Exemplo09Skeleton.styled'
import ImageBoat from '/assets/img/image.jpg?url'

const Exemplo09Skeleton = () => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [LoadedData, setLoadedData] = useState({})

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setLoadedData({ title: 'Exemplo Skeleton!', image: ImageBoat });
    }, 5000); // 2 seconds delay
    return () => clearTimeout(timer); 
  });

  return (
    <>
      <GlobalStyles />
      <ContainerExamples className="nes-container with-title" >
        <span className="title">Exemplo 9</span>
        <Container>
          {!isLoaded ? <>
            <Skeleton>
              <h1></h1>
            </Skeleton>
            <Skeleton>
              <div></div>
            </Skeleton>
          </>
            :
            <>
              <h1>{LoadedData.title}</h1>
              <div>
                <img src={LoadedData.image} alt="barcos" width="200" height="200" />
              </div>
            </>
          }
        </Container>
      </ContainerExamples>
      <div>
        <a href="/">
          <button type="button" title="Voltar ao início!" class="nes-btn is-error btn">Voltar</button>
        </a>
      </div>
    </>
  )
}

export default Exemplo09Skeleton