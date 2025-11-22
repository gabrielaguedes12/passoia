import "./carrossel.scss";
import logo from "../../assets/header/logo.png";

function Banner() {
  return (
    <header>
      <img src={logo} alt="logo" />

      <ul>
        <li>LOOKS</li>
        <li>LANÇAMENTOS</li>
        <li>NOVIDADES</li>
      </ul>
    </header>
  );
}
export default Banner;
