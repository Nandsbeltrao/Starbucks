import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyleHeader = styled.header`
    display: flex;
    justify-content: space-between;
    height: 12vh;
    align-items: center;
    padding: 0 10%;
    font-family: 'Poppins', sans-serif;
`;

export const StyleUl = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    width: 37.5vw;
    margin-top: 9.2rem;
    
    
    
`;

export const StyleImg = styled.img`
    margin-top: 10rem;
    margin-left: 5rem;
    width: 7vw;
`;

export const StyleLink = styled(Link)`
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    color: #1E3932;
    font-size: 1.7rem;
    font-weight: 400;

    &:hover {
        color: #037143;
    }
`;
