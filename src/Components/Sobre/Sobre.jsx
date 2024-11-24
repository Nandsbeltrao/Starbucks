import {
    StyleImagem,
    StylePrimeiraSessao
} from "./Style";
import AntigoStarbucks from "/StarbucksAntigo.png";



export default function Home(){
    return(
        <main>
            <StyleImagem>
                <img src={AntigoStarbucks} alt="" />
            </StyleImagem>

            <StylePrimeiraSessao>
                <h2>PREPARAÇÃO</h2>
                <h1>Níveis de torra</h1>
                    <p>
                        Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas são as torras que fazem parte dos níveis de torra Starbucks®.
                    </p>

                    <button>Saiba mais</button>
            </StylePrimeiraSessao>
        </main>
    );
}