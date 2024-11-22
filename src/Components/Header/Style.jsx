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

`;

export const StyleUl = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-evenly;
    width: 28vw;
    margin-top: 7rem;

`;

export const StyleImg = styled.img`
    margin-top: 8.7rem;
    margin-left: 2rem;
    width: 6.7vw;

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

`;
