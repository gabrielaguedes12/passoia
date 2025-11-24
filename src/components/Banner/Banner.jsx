import banner from "../../assets/banner/banner.jpg";
import "./banner.scss";

export default function Banner() {
  return (
    <div className="banner-container">
      <img src={banner} alt="banner" />
    </div>
  );
}
