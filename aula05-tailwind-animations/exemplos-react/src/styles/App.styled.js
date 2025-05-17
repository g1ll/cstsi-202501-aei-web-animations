
import styled from 'styled-components'

export const AnimateCSSLogo = styled.img`
  width: 100%;
  height: 100%;
  will-change: filter;
  transition: filter 300ms;
`;

export const LogosContainer = styled.div`
    width: 75%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    & a{
        text-decoration: none;
        width:auto;
    }

    @media (min-width: 600px) {
        width: 60%;
    }

    @media (min-width: 724px) {
        width: 55%;
    }

    @media (min-width: 1024px) {
        width: 50%;
    }

    @media (min-width: 2048px) {
        width: 25%;
    }

`;