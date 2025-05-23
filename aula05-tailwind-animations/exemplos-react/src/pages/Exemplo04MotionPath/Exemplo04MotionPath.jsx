
import CircuitPath from './CircuitPath'
import Drone from './Drone'
import { ContainerExamples } from '../../styles/ContainerExamples.styeld'
import { ContainerExamplesSVG, LuigiPlayer, MarioPlayer, SVGKartContainer } from './Exemplo04MotionPath.style'
import { useRef } from 'react'
// import { utils } from 'animejs'

import "./motionPlayers.css"

const Exemplo04MotionPath = () => {

    const marioPlayer = useRef(null)
    const luigiPlayer = useRef(null)


    const handleClick = () => {
        console.log(marioPlayer.current.classList)
        marioPlayer.current.classList.add('animate-play')
        luigiPlayer.current.classList.add('animate-play')
    };

    return (
        <>
            <title>CSTSI-LPAW Aula 04: Biblioteca AnimeJS</title>
            <h2 className="nes-text is-primary">
                Técnica de Motion Path em SVG com
                <a href="https://animejs.com/documentation/" target="_blank"> AnimeJS</a>
            </h2>
            <ContainerExamples>
                <ContainerExamplesSVG
                    className="nes-container with-title svg-animate-play-hover">
                    <span className="title">Exemplo 4.1</span>
                    <div className="w-full! h-full! overflow-hidden">
                        <Drone />
                    </div >
                </ContainerExamplesSVG>
                <ContainerExamplesSVG className="nes-container with-title">
                    <span className="title">Exemplo 4.2</span>
                    <SVGKartContainer>
                        <div className="container">
                            <div className="circuit">
                                <a href="#">
                                    <div
                                        className="mario-path h-[80px] w-[50px] z-35 top-[15%] left-[55%] absolute border-3 opacity-1 bg-slate-500 bg-none border-red-500">
                                    </div>
                                    <MarioPlayer ref={marioPlayer} onClick={handleClick}
                                        className="mario-path animate-player-1" />
                                    <LuigiPlayer ref={luigiPlayer} 
                                            className="luigi-path animate-player-2" />
                                </a>
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
