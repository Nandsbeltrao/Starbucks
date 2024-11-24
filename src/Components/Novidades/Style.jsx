import styled from "styled-components";

const font = "'Poppins', sans-serif";

export const StyleMain = styled.main`
  background-color: #1E3932; 
  min-height: 100vh; 
  margin-top: 5.6rem;
  padding: 12rem; 
`;

export const StyleContainer = styled.div`
    
    margin-left: 7.5rem;


    h2 {
    font-size: 1.5rem;
    font-family: ${font};
    font-weight: 600;
    color: white;
    
  }

  h1 {
    font-size: 4rem;
    font-family: ${font};
    font-weight: 400;
    color: white;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.6rem;
    width: 32.8vw;
    color: white;
    font-family: ${font};
    font-weight: 300;
    margin-top: -0.5rem;
    margin-bottom: 2rem;
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
  }
`;

export const StyledSegundaSessao = styled.section`

    img{
        width: 29.8vw;
        margin-left: 56rem;
        margin-top: -22rem;
        
    
    }

`;
