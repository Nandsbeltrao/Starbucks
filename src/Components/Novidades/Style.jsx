import styled from "styled-components";

const font = "'Poppins', sans-serif";

export const StyleMain = styled.main`
  background-color: #1E3932; 
  min-height: 100vh; 
  margin-top: 3.5rem;
  padding: 12rem;

  @media (max-width: 600px) {
    padding: 5rem; 
    margin-top: 0.6rem; 
  }
`;

export const StyleContainer = styled.div`
  margin-left: 7.5rem;

  h2 {
    font-size: 1.5rem;
    font-family: ${font};
    font-weight: 600;
    color: white;

    @media (max-width: 600px) {
      font-size: 1.2rem; 
      margin-left: -9.7rem; 
    }
  }

  h1 {
    font-size: 4rem;
    font-family: ${font};
    font-weight: 400;
    color: white;
    margin-bottom: 1rem;

    @media (max-width: 600px) {
      font-size: 2.3rem; 
      margin-left: -9.9rem; 
    }
  }

  p {
    font-size: 1.6rem;
    width: 32.8vw;
    color: white;
    font-family: ${font};
    font-weight: 300;
    margin-top: -0.5rem;
    margin-bottom: 2rem;

    @media (max-width: 600px) {
      font-size: 1rem; 
      width: 280%; 
      margin-left: -10rem;
  
    }
  }

  button {
    background-color: #00754a;
    color: white;
    border: none;
    border-radius: 30px;
    padding: 0.7rem 3rem;
    font-size: 1.2rem;
    font-family: ${font};
    font-weight: 600;

    &:hover {
      background-color: #005b39;
    }

    @media (max-width: 600px) {
      font-size: 0.9rem; 
      padding: 0.5rem 2rem; 
      margin-left: -10rem;
      margin-top: -1.2rem;
    }
  }
`;

export const StyledSegundaSessao = styled.section`
  img {
    width: 29.8vw;
    margin-left: 56rem;
    margin-top: -22rem;

    @media (max-width: 600px) {
      width: 51vw; 
      margin-left: 38%; 
      margin-bottom: -8rem; 
    }
  }
`;
