import { useEffect } from 'react';
import { animate } from 'animejs';
import { ContainerExamples } from '../../styles/ContainerExamples.styeld';

const Exemplo01Intro = () => {

  useEffect(() => {
    animate('#circle', { 		//alvo da animação, pode ser mais de um
      translateX: 100,			//propriedade a ser modificada (camelCase)
      backgroundColor: '#0f0',	//propriedade css em camelCase
      borderRadius: '0%',			//propriedade css em camelCase
      duration: 4000,				//duração em  milisegundos (ms) (animation-duration)
      alternate: true,		//direção da animação (animation-direction) 
      loop: true,					//numero de iterações (animation-iteration-count)
      // ease: 'inBounce'		//função de tempo (animation-timing-function)
      ease: 'outBounce'		//função de tempo (animation-timing-function)
    });
  }, [])

  return (
    <>
      <title>CSTSI-AEI Aula 04: Introdução a Biblioteca AnimeJS</title>
      <style>{`
        #circle {
          width: 40px;
          height: 40px;
          background-color: blue;
          border-radius: 50%;
        }
	`}</style>
      <h2 className="nes-text is-primary">
        Exemplos de Introdução a Biblioteca
        <a href="https://animejs.com/documentation/" target="_blank"> AnimeJS</a>
      </h2>
      <ContainerExamples>
        <div className="nes-container with-title examples-containers">
          <span className="title">
            Exemplo 1.1
          </span>
          <div id="circle"></div>
        </div>
        <div>
          <a href="/">
            <button type="button" title='Voltar ao início!' className="nes-btn is-error btn">Voltar</button>
          </a>
        </div>
      </ContainerExamples>
    </>
  )
}

export default Exemplo01Intro;

