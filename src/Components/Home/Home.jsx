import {StyledSection, Title, StyleParagrafo, StyleButton,StyledImagem, StyleEllipse, StyleSegundaSessao,Stylecafes } from "./Style";
import CafePrincipal1 from "../../../public/laranja2x 1.png";
import CafePrincipal2 from "/amarelo2x 1.png";
import CafePrincipal3 from "/vermelho2x 1.png";
import miniaturaCafe1 from "/vermelho 1.png";
import miniaturaCafe2 from "/amarelo 1.png";
import miniaturaCafe3 from "/laranja 3.png";
import Ellipse from "/Ellipse1.png";

// const Cafe = [cafePrincipal1, ] = useState(false);
// const trocaCafe =() => {
//     setCafePrincipal1(!CafePrincipal1);
// };
    



export default function Home(){
    return(
        <>
            <main>
                <StyledSection className="primeira-sessao">
                <Title>
                    <span>Mais que Café</span>
                    <span>Isso é <strong>Starbucks</strong></span>
                </Title>

                    <StyleParagrafo>A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</StyleParagrafo>

                    <StyleButton>SAIBA MAIS</StyleButton>

                </StyledSection>

                <StyleSegundaSessao className="segunda-sessao">
                    <figure>
                        <StyledImagem  src={CafePrincipal1} alt="" />
                        <StyleEllipse src={Ellipse} alt="" />
                    </figure>
                </StyleSegundaSessao>

                <section>
                    <Stylecafes className="terceira-sessao">
                        <li><img src={miniaturaCafe3} alt="" /></li>
                        <li><img src={miniaturaCafe2} alt="" /></li>
                        <li><img src={miniaturaCafe1} alt="" /></li>
                    </Stylecafes>

                </section>


            </main>
        </>
        
    );
}