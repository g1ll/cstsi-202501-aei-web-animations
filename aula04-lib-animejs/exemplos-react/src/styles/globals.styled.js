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
  justify-content: center;
  justify-items: center;
  place-items: center;
}

h1{
  color: var(--text-primary);
  font-size: 2em;
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

li{
  margin: 5px 0;
  list-style: none;
  list-style-position: inside;
  font-weight: 700;
  transition: 2s;

  a {
    text-decoration: none;
    color:var(--text-primary);
  }

  a:visited{
    color:var(--text-secodary);
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
    color:white;
    transition: 1s color;
  }
  
}

a{
  font-size: 32px;
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

@media (min-width: 1024px) {
  .container{
    width: 25%;
    h3{
      font-size: 35px;
    }
  }
}`;

export const Container = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    opacity: 1;

    ul{
      margin: 2rem 0;
    }
    
    div{
      width: 75%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      
    }
    a{
      text-decoration: none;
      width:auto;
    }

    @media (min-width: 1024px) {
    width: 25%;
  }
`;