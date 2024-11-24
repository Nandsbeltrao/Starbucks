import {} from "./Style";
import Grao from "/grao.png";



export default function Home(){
    return(
       <>
         <main>
                <section>
                    <h2>PREPARAÇÃO</h2>
                    <h1>Níveis de torra</h1>
                    <p>Qual a torra que prefere? Starbucks®Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>

                    <button>SAIBA MAIS</button>
                </section>

                <section>
                    <figure>
                        <img src={Grao} alt="" />
                    </figure>
                </section>
            </main>
       </>
    );
}