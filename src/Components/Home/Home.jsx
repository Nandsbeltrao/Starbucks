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
  import CafePrincipal1 from "../../../public/laranja2x 1.png";
  import miniaturaCafe1 from "/vermelho 1.png";
  import miniaturaCafe2 from "/amarelo 1.png";
  import miniaturaCafe3 from "/laranja 3.png";
  import Ellipse from "/Ellipse1.png";
  
  
  
  
  
  
  
  
  
  
  
  export default function Home() {
    return (
      <main>
        {/* Primeira Sessão */}
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
  
        {/* Segunda Sessão */}
        <StyleSegundaSessao>
          <figure>
            <StyledImagem src={CafePrincipal1} alt="Café principal com sabor laranja" />
            <StyleEllipse src={Ellipse} alt="Elliptical background shape" />
          </figure>
        </StyleSegundaSessao>
  
        {/* Terceira Sessão */}
        <StyleCafe>
            <img src={miniaturaCafe3} alt="Miniatura do café laranja" />
            <img src={miniaturaCafe1} alt="Miniatura do café vermelho" />
            <img src={miniaturaCafe2} alt="Miniatura do café amarelo" />
            
        </StyleCafe>
      </main>
    );
  }
  