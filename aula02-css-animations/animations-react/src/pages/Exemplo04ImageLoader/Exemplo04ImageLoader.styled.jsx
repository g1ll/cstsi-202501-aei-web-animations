import style from 'styled-components'

export const LoaderImage = style.div`
    width: 100px;
    height: 100px;
    background-size: contain;
    background-image: url(../../public/assets/img/loader.png);
    animation-name: loading;
    animation-duration: 500ms;
    animation-timing-function: step-end;
    /*animation-timing-function: linear;*/
    animation-iteration-count: infinite;
    animation-play-state: running;

    @keyframes loading {
                0%,100%{ transform: rotate(0deg);}
                25%{ transform: rotate(90deg);}
                50%{ transform: rotate(180deg);}
                75%{ transform: rotate(270deg);}
    }
`;

