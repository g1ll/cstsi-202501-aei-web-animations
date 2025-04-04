import styled, { createGlobalStyle } from 'styled-components';

/*https://i.ibb.co/rdb23sk/goblin-big.png*/
/*background-image: url('https://i.ibb.co/YWHGhYN/goblin_big.png');*/

export const GlobalStyles = createGlobalStyle`
      body{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
            }
`;

const SpriteDiv = styled.div`
    background-image: url('https://i.ibb.co/rdb23sk/goblin-big.png');
    background-size: 480px 730px;
    width:160px;
    height: 180px;
    background-repeat: no-repeat;
    background-clip: content-box;
    background-position: 0px 0px;
    animation-name: div-sprite;
    animation-duration:1s;
    animation-iteration-count: infinite;
    animation-timing-function: step-end;

     @keyframes div-sprite{
                 0%,100%{background-position: 0px 0px;transform: translateY(0px);}
                 25%{background-position: -170px 0px;transform: translateY(2px);}
                 50%{background-position: -330px 0px;transform: translateY(4px);}
                 75%{background-position: -170px 0px;transform: translateY(8px);}
            }
`;

const SpriteImg = styled.img`
    width: 160px;
    height: 180px;
    object-fit: none;
    object-position: 40% 90%;
    animation-name: img-sprite;
    animation-duration:1s;
    animation-iteration-count: infinite;
    animation-timing-function: step-end;

    @keyframes img-sprite{
      0%,100%{object-position: 0% 67%;transform: translateX(0px);}
      25%{object-position: 50% 67%;transform: translateX(5px);}
      50%{object-position: 100% 67%;transform: translateX(10px);}
    }
`;


export { SpriteDiv, SpriteImg };