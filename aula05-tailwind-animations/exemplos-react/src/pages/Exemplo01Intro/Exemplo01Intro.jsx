// import { useEffect } from 'react';
// import { animate } from 'animejs';
import { ContainerExamples } from '../../styles/ContainerExamples.styeld';
import "./exemplo01.css"

const Exemplo01Intro = () => {

  // useEffect(() => {
  //   animate('#circle', { 		//alvo da animação, pode ser mais de um
  //     translateX: 100,			//propriedade a ser modificada (camelCase)
  //     backgroundColor: '#0f0',	//propriedade css em camelCase
  //     borderRadius: '0%',			//propriedade css em camelCase
  //     duration: 4000,				//duração em  milisegundos (ms) (animation-duration)
  //     alternate: true,		//direção da animação (animation-direction) 
  //     loop: true,					//numero de iterações (animation-iteration-count)
  //     // ease: 'inBounce'		//função de tempo (animation-timing-function)
  //     ease: 'outBounce'		//função de tempo (animation-timing-function)
  //   });
  // }, [])

  return (
    <>
      <title>CSTSI-AEI Aula 04: Introdução ao TailwindCss</title>
      <h2 className="nes-text is-primary">
        Exemplos de Introdução a Biblioteca
        <a href="https://animejs.com/documentation/" target="_blank"> AnimeJS</a>
      </h2>
      <ContainerExamples className="items-start min-w-1/2 w-4/5">
        <div className="nes-container with-title">
          <span className="title">
            Exemplo 1.1
          </span>
          <div className="rounded-full bg-myblue-500 w-[40px] h-[40px]"></div>
        </div>

        <div className="nes-container with-title min-w[600px]">
          <span className="title">
            Exemplo 1.2
          </span>
          {/* <div className="bg-blue-500 hover:bg-blue-900 transition-colors duration-2000 rounded-full w-[40px] h-[40px]  translate-x-[100px]  nes-pointer"></div> */}
          <div className="
                w-[40px] h-[40px]
                translate-x-[1px]
                rounded-full

                bg-blue-500
                hover:bg-red-500
                hover:scale-150

                transition
                duration-2000
                ease-[cubic-bezier(.71,1.27,.25,-0.53)]	
                dealy-500

                animate-pong
                nes-pointer"
                >
          </div>
        </div>
        <div className="nes-container with-title">
          <span className="title">
            Exemplo 1.3
          </span>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col items-center">
              <div>spin</div>
              <div className="bg-blue-500 hover:bg-blue-900 transition-colors
		 		rounded-sm w-[40px] h-[40px] nes-pointer
				animate-spin duration-100"></div>
            </div>

            <div className="flex flex-col items-center">
              <div>ping</div>
              <div className="bg-green-500 hover:bg-green-900 transition-colors
		 		rounded-sm w-[40px] h-[40px] nes-pointer
				animate-ping duration-100"></div>
            </div>
            <div className="flex flex-col items-center">
              <div>pulse</div>
              <div className="bg-pink-500 hover:bg-pink-900 transition-colors
		 		rounded-sm w-[40px] h-[40px] nes-pointer
				animate-pulse duration-1000"></div>
            </div>
            <div className="flex flex-col items-center">
              <div> 4x</div>
              <div className="bg-pink-900 hover:bg-purple-900 transition-colors
		 		rounded-sm w-[40px] h-[40px] nes-pointer
				animate-[pulse_1000ms_ease_4]"></div>
            </div>

            <div className="flex flex-col items-center">
              <div>bounce</div>
              <div className="bg-yellow-300 hover:bg-yellow-600 transition-colors
		 		rounded-sm w-[40px] h-[40px] nes-pointer
				animate-[bounce_500ms_linear_infinite] duration-100"></div>
            </div>

            <div className="flex flex-col items-center">
              <div> delay</div>
              <div className="bg-orange-600 hover:bg-orange-900 transition-colors
		 		                    rounded-sm w-[40px] h-[40px] nes-pointer
				                    animate-[bounce_900ms_ease_1000ms_infinite]"></div>
            </div>
          </div>
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

