import styled   from "styled-components";

export const SliderContainer = styled.div`
     margin-top: 5%;
      width: 75%;
      display:flex;
      /* flex-direction: row; */
      align-items: center;
`;

export const Slider = styled.div`
    width: 90%;
    min-height: 300px;
`;

export const SliderList = styled.ul`
     position: relative;
      overflow: hidden;
      width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
      list-style-type: none;
`;

export const SliderElement = styled.div`
      display: flex;
      justify-content: center;
      width:100%;
      height: 100%;
     
     img {
      width: 600px;
      height: 300px;
    }

    /* @media (min-width: 600px) {
        img {
            width: 100%;
            height: auto;
        }
    } */

    
`;

export const SliderItem = styled.li`
    display: ${props=>props.$isActive ? "block" : "none"};    
`;