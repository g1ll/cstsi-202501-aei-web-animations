import React from 'react'
import { Link } from 'react-router-dom'
import { ContainerExamples } from '../../styles/ContainerExamples.styeld';
import "./exemplo02.css"

const Exemplo02SeletorUtils = () => {

    return (
        <>
            <title>CSTSI-AEI Aula 04: Seleção de Elementos com o Utils da AnimeJS</title>
            <h2 className="nes-text is-primary">
                Exemplos de Introdução a Biblioteca
                <a href="https://animejs.com/documentation/" target="_blank"> AnimeJS</a>
            </h2>
            <ContainerExamples>
                <div class="nes-container with-title">
                    <span class="title">Exemplo 2.1</span>
                    <div >
                        <svg class="animate-pulse nes-pointer" width="98" height="100" viewBox="0 0 98 100" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 49C0 21.938 21.938 0 49 0V0C76.062 0 98 21.938 98 49V51C98 78.062 76.062 100 49 100V100C21.938 100 0 78.062 0 51L0 49Z"
                                fill="#ff0000" />
                        </svg>
                    </div>
                </div>

                <div class="nes-container with-title">
                    <span class="title">Exemplo 2.2</span>
                    <div >
                        <svg class="nes-pointer" width="98" height="100" viewBox="0 0 98 100" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path class="hover:animate-[rave_5ms_linear_infinite]"
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