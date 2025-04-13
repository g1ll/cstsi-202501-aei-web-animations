import styled from "styled-components";

export const MenuItemStyled = styled.li`

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
  

  h3{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(100, 1fr);
    margin: 0;
    place-items: center;
    margin-bottom: .5rem;
    font-size: .5em;
    transition: 5s;
  }

  h3:hover{
    background-color:var(--bg-primary);
    border-radius: 5px;
    transition: 1s;
  }

  @media (min-width: 450px) {
    h3{
    font-size: max(10px,1.5vw);
  }
  .logo {
    width: 25%;
  }
  .logoAnimeJs {
    width: 80%;
  }
}

@media (min-width: 600px) {
  h3{
    font-size: max(12px,1.5vw);
  }
}

@media (min-width: 960px) {
  h3{
    font-size: max(15px,2vw);
  }
}

@media (min-width: 1024px) {
    h3{
      font-size: 20px;
    }
  }

  @media (min-width: 1100px) {
    h3{
      font-size: 25px;
    }
  }

`;

