import banner from "../../assets/banner/banner.jpg";
import "./banner.scss";


export default function Banner() {
  return (
    <header>
      <img className="bannerImg" src={banner} alt="banner" />      
    </header>
  );
}
