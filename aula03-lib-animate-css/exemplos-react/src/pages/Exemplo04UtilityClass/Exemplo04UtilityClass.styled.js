import styled from "styled-components";

export const Main = styled.main`
    --animate-duration: .5s;
    
    /* Esta variável multiplica o delay aplicado pela classe utilitária animate__delay-[n]s*/
    /*Descomente  linha abaixo para ver o efeito na animação do logo do ReactJS*/
    /* --animate-delay: 4s; */ 
    
    /* Altera a duração apenas da animação fadeIn*/
    & .animate__animated.animate__fadeIn {
        --animate-duration: 5s;
    }

    background-color: #333232;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Container = styled.div`
    height: 50vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;

export const LogoJs = styled.div`
    background-image: url('assets/svgs/react.svg');
    background-size: 100% 100%;
    width: 100px;    
    height: 100px;
`;

export const LogoVite = styled.div`
    background-image: url('assets/svgs/vite.svg');
    background-size: 100% 100%;
    width: 100px;    
    height: 100px;
`;

export const LogoAnimateCss = styled.div`
    width: 200px;
    height: 150px;
    border-radius: 10% 10%;
    background-image: url(assets/img/animatecss-opengraph.jpg);
    background-size: 100% 100%;
    opacity: 0;
`;