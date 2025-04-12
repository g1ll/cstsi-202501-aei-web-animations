import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
  font-family: 'Courier New', Courier, monospace;
  --text-primary: #004b1d;
  --text-secodary: #cc4141;
  --bg-primary:#92cc41;
  margin: 0px;
  padding: 00px;
}

body{
    margin: 0px;
    padding: 00px;
}

h1{
  color: var(--text-primary);
  a{
    color:var(--text-secodary);
    font-size: min(32px,5vw);
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
    font-size: 4.5vw;
    text-decoration: none;
    color:var(--text-primary);
  }

  a:visited{
    color:var(--text-secodary);
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
    color:var(--text-secodary);
    transition: 1s color;
  }

  &:has(a:hover) {
    background-color:var(--bg-primary);
    border-radius: 5px;
    transition: 1s;
  }
}

a{
  font-size: 32px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

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
}

.logo {
  width: 100px;
  height: 100%;
  will-change: filter;
  transition: filter 300ms;
}

.vite-logo{
  opacity:0;
  transform-origin: center center;
}

.vite-logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.react-spin:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}
/* 
.react-spin{
  animation-name: rotateOut;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: backwards;
  animation-duration: 5s;
  border-color: blue;
}

@media (prefers-reduced-motion: no-preference) {
  .react-spin{
    animation-name: rotateIn;
  }
} */


@media (max-width: 450px) {
  .logo {
    width: 25%;
  }
  .logoAnimatecss {
    width: 80%;
  }
}

@media (min-width: 600px) {
  li a{
    font-size: max(20px,2.5vw);
  }
  .container div{
    width: 50%;
  }
}

@media (min-width: 1024px) {
  .container div{
    width: 25%;
  }
}
main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    place-items: center;
    height: 100vh;
    margin: 0;
    padding: 0;
}

a {
    font-size: 32px;
    text-decoration: none;
    span { 
        font-size: 4.5vw;
    }
}`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    align-content: center;
    width: 75%;
`;