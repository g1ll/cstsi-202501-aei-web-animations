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
    display: grid;
    grid-template-columns: repeat(100, 1fr);
    margin: 0;
    margin-bottom: .5rem;
    font-size: .85em;
    transition: 5s;
  }

  h3:hover{
    background-color:var(--bg-primary);
    border-radius: 5px;
    transition: 1s;
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
    h3{
      font-size: 35px;
    }
  }

`;

