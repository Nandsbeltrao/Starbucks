import styled from "styled-components";

const font = "'Poppins', sans-serif";

export const StyleImagem =  styled.section`
  margin-top: 12.4rem;
  margin-left: 30rem;

  img {
    width: 20vw;
  }

  @media (max-width: 600px) {
    margin-top: 1em;
    margin-left: 10vw;
    
    img {
      width: 45vw;
     
    }
  }
`;

export const StylePrimeiraSessao = styled.section`
  position: relative;
  left: 63rem;
  top: -28rem;

  h2 {
    font-size: 1.2rem;
    font-family: ${font};
    font-weight: 600;
    color: black;
  }

  h1 {
    font-size: 3.4rem;
    font-family: ${font};
    font-weight: 300;
    color: black;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.4rem;
    width: 32.8vw;
    color: black;
    font-family: ${font};
    font-weight: 400;
    margin-top: -0.5rem;
    margin-bottom: 2rem;
  }

  button {
    background-color: #00754a;
    color: white;
    border: none;
    border-radius: 30px;
    padding: 0.7rem 3rem;
    font-size: 1rem;
    font-family: ${font};
    font-weight: 600;

    &:hover {
      background-color: #005b39;
    }
  }

  @media (max-width: 600px) {
    left: 6vw;
    top: 0; 

    h2 {
      font-size: 0.9rem; 
      margin-top: 0.5rem;
      margin-left: 15rem;
      margin-bottom: -0.6rem;
    }

    h1 {
      font-size: 2.2rem; 
      margin-left: 5.5rem;
      margin-bottom: 0.9rem; 
      font-weight: 400;
    }

    p {
      font-size: 0.9rem; 
      width: 70%; 
      margin-left: 5.6rem;
      margin-bottom: 0.4rem;
      
    }

    button {
      width: 35%; 
      font-size: 0.8rem; 
      padding: 0.6rem 1.2em; 
      margin-left: 5rem;
      
    }
  }
`;
