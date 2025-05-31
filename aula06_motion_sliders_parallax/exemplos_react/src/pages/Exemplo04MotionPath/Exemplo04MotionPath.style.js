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