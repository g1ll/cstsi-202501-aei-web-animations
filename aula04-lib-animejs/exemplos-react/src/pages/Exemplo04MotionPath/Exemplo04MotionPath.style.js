import styled from "styled-components";
import { ContainerExamples } from "../../styles/ContainerExamples.styeld";


export const ContainerExamplesSVG = styled(ContainerExamples)`

    width: 100% !important;
    padding: 0px !important;

    @media screen and (max-width: 680px) {
        .nes-container{
            padding: 0px;
            background-color: #00f;
        }
    }   

    @media screen and (max-width: 370px) {
        .nes-container{
            width: max(75%,280px);
            padding: 0px;
        
            .container{
                width: 256px;
            }

        }
    }

`;

export const SVGDroneContainer = styled.div`
    
    width: 100% !important;
    height: 100% !important;
    overflow: hidden;

    svg{
        width: 100%;
        height: 100%;
    }

    svg #drone {
        /*offset-path: path("M1 3C1 3 556.501 243 1014 1");*/
        offset-path: path("M1.008 5.054C41.9932 -15.4386 128.008 48.8634 205.508 25.9587C283.008 3.05401 370.508 21.5543 443.008 81.7774C515.508 142 623.508 25.9585 759.508 87.9184C895.508 149.878 927.464 48.8325 1014.01 3.054");
        /*offset-path: path("M0.743199 257.48C0.743199 257.48 198.545 90.0487 368.243 319.98C537.941 549.911 801.743 -43.0205 755.743 3.47951");*/
        animation: move-drone 5s linear infinite alternate paused;
        /* transform-origin: center; */
    }

    &:hover svg #drone {
        animation-play-state: running;
    }

    @keyframes move-drone {
        100% {
            offset-distance: 100%;
            motion-offset: 10%;
        }
    }   
    
    #drone-container:hover svg #drone {
        animation-play-state: running;
    }
`;

export const SVGKartContainer = styled.div`

    width: 100% !important;
    height: 100% !important;
    padding: 0px !important;
    overflow: hidden;

    .container {
        margin:auto;
        margin-top: 1%;
        width: 95%;
        display: flex;
        flex-direction: row;
        column-gap: 2%;
        align-items: center;
        justify-content: center;

        .circuit {
            width: 500px;
            height: 345px;
            /* overflow: hidden; */
            --posicao-x: 100px;
            --posicao-y: 100px;

        }   

        svg {
            width: 100%;
            height: 100%;
        }

    }

    @media screen and (max-width: 680px) {

        .circuit {
            width: 100%;
            overflow: hidden;
        }
    }

    @media screen and (max-width: 370px) {

        .circuit {
            width: 100%;
            overflow: hidden;
            }
        }
`;

const KartPlayers =  styled.div`
        position: absolute;
        width: 30px;
        height: 30px;
        background-repeat: no-repeat;

        @media screen and (max-width: 680px) {
            width: 20px;
            height: 20px;
            background-size: contain;
        }


        @media screen and (max-width: 370px) {
            width: 15px;
            height: 15px;
            background-size: contain;
        }

`;

export const MarioPlayer = styled(KartPlayers)`
     background-image: url('/assets/img/mario-kart/mario.png');
     z-index: 12;
`;

export const LuigiPlayer = styled(KartPlayers)`
        background-image: url('/assets/img/mario-kart/luigi.png');
        z-index: 11;
`;