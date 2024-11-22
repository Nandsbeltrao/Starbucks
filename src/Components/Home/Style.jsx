import styled from "styled-components";

const font = "'Poppins', sans-serif";

export const StyledSection = styled.section`
  margin-top: 12.6rem;
`;

export const Title = styled.h1`
  font-family: ${font};
  font-weight: 300;
  font-size: 4.8rem;
  margin-left: 15rem;

  span {
    display: block;
    margin-bottom: -1.2rem;
  }

  strong {
    color: #037143;
    font-weight: 800;
    font-size: 6rem;
  }
`;

export const StyleParagrafo = styled.p`
  margin-left: 15.5rem;
  margin-top: 0.5rem;
  font-family: ${font};
  width: 40vw;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const StyleButton = styled.button`
  margin-top: 1.5rem;
  margin-left: 15rem;
  background: #037143;
  padding: 0.7rem 3rem;
  border: none;
  border-radius: 30px;
  font-family: ${font};
  color: white;
  font-weight: 600;
  font-size: 1.3rem;

   &:hover {
        background-color: #02643B;
    }
`;

export const StyleSegundaSessao = styled.section`
  position: relative; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export const StyledImagem = styled.img`
    position: relative;
    top:-36.3rem;
    left: 96%;
    z-index: 2; 
    width: 32vw;

`;

export const StyleEllipse = styled.img`
    position: absolute;
    top: -34.5rem;
    left: 80%;
    transform: translateX(-50%);
    width: 47vw;
    z-index: 1; 
`;

export const Stylecafes = styled.ul`
    
`;
