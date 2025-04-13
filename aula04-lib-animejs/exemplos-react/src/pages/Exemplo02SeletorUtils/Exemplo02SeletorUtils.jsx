import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { animate, createScope, utils } from 'animejs'
import { ContainerExamples } from '../../styles/ContainerExamples.styeld';

const Exemplo02SeletorUtils = () => {

    const root = useRef(null);
    const scope = useRef(null);

    useEffect(() => {

        scope.current = createScope({ root }).add(scope => {
            //Animação 2.1
            const $svgTarget = utils.$('#sgv-geometry path');
            //console.log($svgTarget);

            const anime2 = animate(
                $svgTarget, //alvo da animação (elemento svg)
                {
                    fill: [//propriedade a ser modificada (fill)
                        { to: '#00ff00', duration: 1000 }, //keyframe 01
                        { to: '#0000ff', duration: 1000 }, //keyframe 02
                        { to: '#ff0000', duration: 1000 }, //keyframe 03
                    ],
                    scale: [ //keyframes de escala
                        { to: 1, duration: 1000 }, //keyframe 01
                        { to: .5, duration: 1000 }, //keyframe 02
                        { to: .75, duration: 1000 } //keyframe 03
                    ],
                    alternate: true,
                    loop: true, 			//animação em loop (animation-count:infinite)
                    autoplay: false,	//animate-play-state: paused
                    ease: 'inQuad'	//função de tempo  (animation-timing-function)
                });

            // $svgTarget[0].onclick = () => anime2.play();
            scope.add('starteAnime', () => {
                console.log('anime2', anime2);
                anime2.play();
            })
        });

        return () => scope.current.revert()
    }, [])

    const handlePathClick = () => scope.current.methods.starteAnime();

    return (
        <>
            <title>CSTSI-AEI Aula 04: Seleção de Elementos com o Utils da AnimeJS</title>
            <h2 className="nes-text is-primary">
                Exemplos de Introdução a Biblioteca
                <a href="https://animejs.com/documentation/" target="_blank"> AnimeJS</a>
            </h2>
            <ContainerExamples>
                <div className="nes-container with-title examples-containers" ref={root}>
                    <span className="title">Exemplo 2.1</span>
                    <div id="svg-container" >
                        <svg id='sgv-geometry' width="98" height="100" viewBox="0 0 98 100" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path onClick={handlePathClick}
                                d="M0 49C0 21.938 21.938 0 49 0V0C76.062 0 98 21.938 98 49V51C98 78.062 76.062 100 49 100V100C21.938 100 0 78.062 0 51L0 49Z"
                                fill="#ff0000" />
                        </svg>
                    </div>
                </div>

                <div>
                    <Link to="/">
                        <button type="button" title='Voltar ao início!' className="nes-btn is-error btn">Voltar</button>
                    </Link>
                </div>
            </ContainerExamples>
        </>
    )
}

export default Exemplo02SeletorUtils