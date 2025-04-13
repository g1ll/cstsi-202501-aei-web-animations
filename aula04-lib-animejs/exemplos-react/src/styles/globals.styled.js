import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
  font-family: 'Courier New', Courier, monospace;
  --text-primary: #004b1d;
  --text-secodary: #cc4141;
  --bg-primary:#92cc41
}

#root{
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1{
  color: var(--text-primary);
  font-size: 1.5em;
  text-align: center;
  a{
    color:var(--text-secodary);
    font-size: 1em;
  }

  a:hover{
    color:var(--bg-primary);
    text-decoration: none;
  }

} 

.logo {
  width: 100px;
  height: 100%;
  will-change: filter;
  transition: filter 300ms;
  opacity: 0;
}

.vite{
  transform: rotate(0deg);
  transform: translateX(450px);
  /* transform-origin: 50% 50%; */
  opacity: 0;
}

.logoAnimeJs {
  opacity: 0;
  width: 350px;
  height: 100%;
  will-change: filter;
  transition: filter 300ms;
}


@media (max-width: 450px) {
  .logo {
    width: 25%;
  }
  .logoAnimeJs {
    width: 80%;
  }
}

@media (min-width: 600px) {
  li a{
    font-size: max(20px,2.5vw);
  }
}
`;

export const Container = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 1;

    ul{
      margin: 0 0;
      padding: 0 0;
    }

    a{
      text-decoration: none;
      width:auto;
    }

    @media (min-width: 1024px) {
    width: 50%;
  }
`;