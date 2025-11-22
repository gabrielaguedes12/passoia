import banner from "../../assets/banner.jpj";
import "./banner.scss";


function Banner() {
  return (
    <header>
      <img src={banner} alt="banner" />

      <ul>
        <li>LOOKS</li>
        <li>LANÇAMENTOS</li>
        <li>NOVIDADES</li>
      </ul>
    </header>
  );
}
export default Banner;
