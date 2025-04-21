import styled, { keyframes, css } from 'styled-components';

const borderSize = 50;

const completeRotarion = keyframes`
         0%{ transform: rotate(0deg);}
        25%{ transform: rotate(90deg);}
        50%{ transform: rotate(180deg);}
        75%{ transform: rotate(270deg);}
        100%{ transform: rotate(360deg);}
`;

const animationStyles = css`
    animation-name: ${completeRotarion};
    animation-duration: .5s;
    /*animation-timing-function: step-end;*/
    animation-timing-function: ease;
    animation-iteration-count: infinite;
    animation-play-state: running;`


export const LoaderImage = styled.div`
    width: 1px;
    height: 1px;
    background-color: transparent;
    border-radius: 50%; 
    border-style: solid;
    border-width: ${borderSize}px;
    border-color: #db5656;
    border-bottom-color:  #5baf5b;
    border-right-color: #5baf5b;
    background-size: contain;
    /*background-image: url(/assets/images/loader.png');*/

    ${animationStyles}
`;

