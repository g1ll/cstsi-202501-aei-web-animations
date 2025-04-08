
import styled from 'styled-components'

export const AnimateCSSLogo = styled.img`
  width: 350px;
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
`;