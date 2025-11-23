import banner from "../../assets/banner/banner.jpg";
import "./banner.scss";


export default function Banner() {
  return (
    <header>
      <img src={banner} alt="banner" />      
    </header>
  );
}
