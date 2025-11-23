import "../Header/header.scss";
import logo from "../../assets/header/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { byPrefixAndName } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Header() {

  return (
    <header>
      <img className="logoImg" src={logo} alt="logo" />

      <ul>
        <li>LOOKS</li>
        <li>LANÇAMENTOS</li>
        <li>NOVIDADES</li>
        <li className="icon-cart">
          <FontAwesomeIcon 
            icon={byPrefixAndName.fas["cart-shopping"]}
            className="cartIcon"
          />
        </li>
      </ul>
    </header>
  );
}
