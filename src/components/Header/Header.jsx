import "../Header/header.scss";
import logo from "../../assets/header/logo.png";

export default function Header() {

  return (
    <header>
      <img className="logoImg" src={logo} alt="logo" />

      <ul>
        <li>LOOKS</li>
        <li>LANÇAMENTOS</li>
        <li>NOVIDADES</li>
      </ul>
    </header>
  );
}
