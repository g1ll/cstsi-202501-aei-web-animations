
import CircuitPath from './CircuitPath'
import Drone from './Drone'
import { ContainerExamples } from '../../styles/ContainerExamples.styeld'
import { ContainerExamplesSVG, LuigiPlayer, MarioPlayer, SVGDroneContainer, SVGKartContainer } from './Exemplo04MotionPath.style'
import { useEffect, useRef } from 'react'
import { animate, createScope, svg } from 'animejs'

const Exemplo04MotionPath = () => {


    const rootScope = useRef(null)
    const scope = useRef(null)

    const marioPlayer = useRef(null)
    const luigiPlayer = useRef(null)

    useEffect(() => {
        scope.current = createScope({ rootScope }).add(self => {
            const $pathKartMario = svg.createMotionPath('.circuit svg #pathMario');
            const $pathKartLuigi = svg.createMotionPath('.circuit svg #pathLuigi');

            const runLuigi = {
                anime:
                    animate(luigiPlayer.current, {
                        ...$pathKartLuigi,
                        ease: 'outQuad',
                        duration: 3500,
                        delay: 1000,
                        autoplay: false,
                    })
            }

            const runMario = {
                anime: animate(
                    marioPlayer.current,
                    {
                        ...$pathKartMario,
                        ease: 'in',
                        duration: 3500,
                        autoplay: false,
                        onBegin: () => runLuigi.anime.play(),
                    })
            }

            const resizeScreen = () => {
                console.log('resize');
                const resizedPath = svg.createMotionPath('.circuit svg path');
                runMario.anime = animate(
                    marioPlayer.current,
                    {
                        ...resizedPath,
                        ease: 'in',
                        duration: 3500,
                        autoplay: false,
                        onBegin: () => runLuigi.anime.play(),
                    })

                runLuigi.anime = animate(luigiPlayer.current, {
                    ...resizedPath,
                    ease: 'outQuad',
                    duration: 3500,
                    delay: 1000,
                    // zIndex: [11, 15],
                    autoplay: false,
                })
            }

            self.add('marioStart', () => runMario.anime.play())
            self.add('resizeScreen', resizeScreen)
            window.addEventListener('resize', self.methods.resizeScreen)
        })

        return () => {
            window.removeEventListener('resize', scope.current.methods.resizeScreen)
            scope.current.revert()
        }
    }, [])


    const handleClick = () => scope.current.methods.marioStart();


    return (
        <>
            <title>CSTSI-LPAW Aula 04: Biblioteca AnimeJS</title>
            <h2 className="nes-text is-primary">
                Técnica de Motion Path em SVG com
                <a href="https://animejs.com/documentation/" target="_blank"> AnimeJS</a>
            </h2>
            <ContainerExamples>
                <ContainerExamplesSVG className="nes-container with-title">
                    <span className="title">Exemplo 4.1</span>
                    <SVGDroneContainer >
                        <Drone />
                    </SVGDroneContainer>
                </ContainerExamplesSVG>
                <ContainerExamplesSVG className="nes-container with-title">
                    <span className="title">Exemplo 4.2</span>
                    <SVGKartContainer>
                        <div className="container" ref={rootScope}>
                            <div className="circuit">
                                <MarioPlayer ref={marioPlayer} onClick={handleClick} />
                                <LuigiPlayer ref={luigiPlayer} />
                                <CircuitPath />
                            </div>
                        </div>
                    </SVGKartContainer>
                </ContainerExamplesSVG>
                <div>
                    <a href="/">
                        <button type="button" title="Voltar ao início!" className="nes-btn is-error btn">Voltar</button>
                    </a>
                </div>
            </ContainerExamples>
        </>
    )
}

export default Exemplo04MotionPath
