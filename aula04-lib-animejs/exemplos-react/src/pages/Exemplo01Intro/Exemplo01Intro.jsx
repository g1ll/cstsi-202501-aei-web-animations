import { useEffect } from 'react';
import HeaderLinks from '../../components/HeaderLinks/HeaderLinks';
import { animate } from 'animejs';

const Exemplo01Intro = () => {

  useEffect(() => {
    animate('#circle', { 		//alvo da animação, pode ser mais de um
      translateX: 300,			//propriedade a ser modificada (camelCase)
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
        main {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .examples-containers {
          margin-top: 5%;
          width: 50%;
        }

        .btn {
          margin: 15px;
          width: 200px;
        }

        #circle {
          width: 40px;
          height: 40px;
          background-color: blue;
          border-radius: 50%;
        }

        .nes-btn {
          border-image-repeat: stretch !important;
        }
	`}</style>
      <main>
        <h2 className="nes-text is-primary">
          Exemplos de Introdução a Biblioteca
          <a href="https://animejs.com/documentation/" target="_blank">AnimeJS</a>
        </h2>

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
      </main>
    </>
  )
}

export default Exemplo01Intro;

