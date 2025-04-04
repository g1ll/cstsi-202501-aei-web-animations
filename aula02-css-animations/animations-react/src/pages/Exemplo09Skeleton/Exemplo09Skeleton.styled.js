import sty, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
      body{
            width: 100%;
            height: 100vh;
            margin: 0;
            padding: 0;
        }

        .nes-btn {
			font-size: 2vw;
			border: solid 0px black;
		}

        .btn {
            margin: 15px;
            width: 200px;
        }

        #root{
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
`;

export const ContainerExamples = sty.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
    width: 75%;
`;

export const Container = sty.div`
      margin-top: 1%;
      width: 95%;
      display: flex;
      flex-direction: column;
      column-gap: 2%;
      align-items: center;
      justify-content: center;
`;

export const Skeleton = sty.div`
      background-image: linear-gradient(66deg, lightgrey, white, grey);
      background-size: 600%;
      background-repeat: no-repeat;
      background-position: 0px 0px;
      border-radius: 30px;
      animation: skeletonLoder 1s ease-in 1s infinite;
      margin-bottom: 10px;

      @keyframes skeletonLoder {
      0%,
      100% {
        background-position: 0px 0px;
      }

      50% {
        background-position: -600px 0px;
      }
    }

    &  div{
        width: 200px;
        height: 200px;
    }

    &  h1{
        width: 500px;
        height: 50px;
        font-size: 12px;
        color:transparent;
    }
`;