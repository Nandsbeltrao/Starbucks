import {
  StyledSection,
  Title,
  StyleParagrafo,
  StyleButton,
  StyledImagem,
  StyleEllipse,
  StyleSegundaSessao,
  StyleCafe,
} from "./Style";
import { useState } from "react";
import CafePrincipal1 from "/laranja2x 1.png";
import CafePrincipal2 from "/vermelho2x 1.png";
import CafePrincipal3 from "/amarelo2x 1.png";
import miniaturaCafe1 from "/vermelho 1.png";
import miniaturaCafe2 from "/amarelo 1.png";
import miniaturaCafe3 from "/laranja 3.png";
import Ellipse from "/Ellipse1.png";
import EllipseVermelha from "/Ellipse2.png";
import EllipeAmarela from "/Ellipse3.png";

export default function Home() {
  const [ellipseCafe, setEllipseCafe] = useState(Ellipse);
  const [cafePrincipal, setCafe] = useState(CafePrincipal1);

  const modificarStyle = (ellipse, cafe) => {
    setEllipseCafe(ellipse);
    setCafe(cafe);
  };

  return (
    <main>
      <StyledSection>
        <Title>
          <span>Mais que Café</span>
          <span>
            Isso é <strong>Starbucks</strong>
          </span>
        </Title>
        <StyleParagrafo>
          A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.
        </StyleParagrafo>
        <StyleButton>SAIBA MAIS</StyleButton>
      </StyledSection>

      <StyleSegundaSessao>
        <figure>
          <StyledImagem src={cafePrincipal} alt="Café principal selecionado" />
          <StyleEllipse src={ellipseCafe} alt="Fundo do café selecionado" />
        </figure>
      </StyleSegundaSessao>

      <StyleCafe>
        <img
          src={miniaturaCafe3}
          alt="Miniatura do café laranja"
          onClick={() => modificarStyle(Ellipse, CafePrincipal1)}
        />
        <img
          src={miniaturaCafe1}
          alt="Miniatura do café vermelho"
          onClick={() => modificarStyle(EllipseVermelha, CafePrincipal2)}
        />
        <img
          src={miniaturaCafe2}
          alt="Miniatura do café amarelo"
          onClick={() => modificarStyle(EllipeAmarela, CafePrincipal3)}
        />
      </StyleCafe>
    </main>
  );
}
