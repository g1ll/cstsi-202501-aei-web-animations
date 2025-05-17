import styled from "styled-components";

export const HamburgerStyled = styled.div`
    
    background: transparent;
    border: ${props=>props?.$hasBorder ? '2px solid #999' : 'none'};
    border-radius: 5px;
    transition: 1s;

    &:hover{
        border-color: ${props=>props?.$hasBorder ? '#333' : 'none'};
        transition: 1s;
    }
`;