import { StyleMain, StyleContainer, StyledSegundaSessao } from "./Style";
import Grao from "/grao.png";

export default function Home() {
    return (
        <StyleMain>
            <StyleContainer>
                <h2>PREPARAÇÃO</h2>
                <h1>Níveis de torra</h1>
                <p>
                    Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas são as torras que fazem parte dos níveis de torra Starbucks®.
                </p>

                <button>Saiba mais</button>
            </StyleContainer>

            <StyledSegundaSessao>
                <figure>
                    <img src={Grao} alt="Imagem de grãos de café representando os níveis de torra" />
                </figure>
            </StyledSegundaSessao>
        </StyleMain>
    );
}
