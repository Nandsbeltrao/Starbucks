import styled from "styled-components";

const font = "'Poppins', sans-serif";

export const StyledSection = styled.section`
  margin-top: 9.8rem;

  @media (max-width: 600px) {
    margin-top: 6rem; 
  }
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

  @media (max-width: 600px) {
    font-size: 2.3rem; 
    margin-left: 2.6rem; 
    margin-top: -5rem;
    
    span{
      margin-bottom: -0.6rem;
    }

    strong {
      font-size: 2.48rem; 
    }
  }
`;

export const StyleParagrafo = styled.p`
  margin-left: 15.5rem;
  margin-top: 0.5rem;
  font-family: ${font};
  width: 40vw;
  font-size: 1.2rem;
  font-weight: 500;

  @media (max-width: 600px) {
    margin-left: 2.6rem;
    margin-top: 1.3rem;
    width: 85%; 
    font-size: 0.9rem; 
  }
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

  @media (max-width: 600px) {
    margin-left: 2rem; 
    margin-top: 0.7rem;
    font-size: 0.9rem; 
    padding: 0.4rem 1.5rem; 
  }
`;

export const StyleSegundaSessao = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 14rem;
  margin-left: 6rem;

  @media (max-width: 600px) {
    margin-top: 16.6rem; 
    margin-left: 15.5rem; 
  }
`;

export const StyledImagem = styled.img`
  position: relative;
  top: -40rem;
  left: 102%;
  z-index: 2;
  width: 30vw;

  @media (max-width: 600px) {
    width: 52vw; 
    left: 0.2rem; 
    top: -18.9rem; 
  }
`;

export const StyleEllipse = styled.img`
  position: absolute;
  top: -33rem;
  left: 80%;
  transform: translateX(-50%);
  width: 38vw;
  z-index: 1;

  @media (max-width: 600px) {
    width: 60vw; 
    top: -15rem; 
    left: 50%; 
  }
`;

export const StyleCafe = styled.div`
  margin-top: -44.7rem;
  margin-left: 53.5rem;
  position: relative;
  top: -2rem;

  img:hover {
    transform: translateY(-9%) rotate(12deg);
  }

 @media (max-width: 600px) {
    margin-top: -25rem; 
    margin-left: 3vw; 

    img {
      width: 17.4%; 
      margin-top: 2.5rem; 
    }
  }
`;
