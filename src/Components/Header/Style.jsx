import styled from "styled-components";
import { Link } from "react-router-dom";

const colors = {
    primary: "#1E3932",
    hover: "#01874F",
};

const font = "'Poppins', sans-serif";

export const StyleHeader = styled.header`
    display: flex;
    justify-content: space-between;
    height: 12vh;
    align-items: center;
    padding: 0 10%;
    font-family: ${font};

    @media (max-width: 600px) {
        flex-direction: rown; 
        height: auto; 
        padding: 2rem; 
    }
`;

export const StyleUl = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    width: 28vw;
    margin-top: 5rem;

    @media (max-width: 600px) {
        flex-direction: rown; 
        width: 61vw; 
        margin-top: 1.7rem; 
    }
`;

export const StyleImg = styled.img`
    margin-top: 5.2rem;
    margin-left: 2rem;
    width: 6vw;

    @media (max-width: 600px) {
        margin-top: 2rem; 
        margin-left: -0.6rem;
        width: 15vw; 
    }
`;

export const StyleLink = styled(Link)`
    text-decoration: none;
    font-family: ${font};
    color: ${colors.primary};
    font-size: 1.5rem;
    font-weight: 400;

    &:hover {
        color: ${colors.hover};
    }

    @media (max-width: 600px) {
        font-size: 1.1rem; 
        margin: 0.5rem;
    }
`;
