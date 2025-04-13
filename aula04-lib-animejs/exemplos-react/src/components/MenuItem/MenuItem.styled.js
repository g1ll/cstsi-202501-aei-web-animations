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
    font-size: 1.25em;
    transition: 5s;
  }

  h3:hover{
    background-color:var(--bg-primary);
    border-radius: 5px;
    transition: 1s;
  }

`;

