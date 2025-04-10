import styled from "styled-components";

export const Main = styled.main`
    background-color: #333232;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const AnimatedDiv = styled.div`
        width: 50%;
        height: 20%;
        border-radius: 10% 10%;
        background-image: url('assets/img/animatecss-opengraph.jpg');
        background-size: 100% 100%;
        opacity: 0;

        /*---configurando opções de animação----*/
        animation-duration: 5s;
        animation-timing-function: ease-in-out;
        /*animation-iteration-count: infinite;*/ /*alterando repetições*/
        animation-delay: 2s;
        animation-fill-mode: forwards;
        animation-direction: alternate;
        animation-play-state: running;
        /*---fim configuração----*/
        animation-name: fadeIn; /*utilizando @keyframes da animate.css*/
`;