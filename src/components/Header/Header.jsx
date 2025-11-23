import "../Header/header.scss";
import logo from "../../assets/header/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Header() {

  return (
    <header>
      <img className="logoImg" src={logo} alt="logo" />

      <ul>
        <li>LOOKS</li>
        <li>LANÇAMENTOS</li>
        <li>NOVIDADES</li>
        <li className="icon-cart">
            <FontAwesomeIcon icon={faCartShopping} className="cartIcon" />
        </li>
      </ul>
    </header>
  );
}
