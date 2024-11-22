import Logo from "../../../public/logo 1.png";
import {StyleHeader, StyleImg, StyleUl, StyleLink} from "./Style";

export default function Header() {
  return (
    <StyleHeader>
        <StyleImg src={Logo} alt="Logo da Starbucks" />
      <nav>
        <StyleUl>
          <li><StyleLink to="/">Home</StyleLink></li>
          <li><StyleLink to="/Novidades">Novidades</StyleLink></li>
          <li><StyleLink to="/Sobre">Sobre</StyleLink></li>
        </StyleUl>
      </nav>
    </StyleHeader>
  );
}
