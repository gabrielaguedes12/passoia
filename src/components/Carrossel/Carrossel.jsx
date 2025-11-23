import "./carrossel.scss";
import blush from "../../assets/carrossel/blush.png";
import gloss from "../../assets/carrossel/gloss.png";
import paleta from "../../assets/carrossel/paleta.png";
import sombra from "../../assets/carrossel/sombra.jpg";

export default function Carrossel() {
  return (
    <>
      <img src={blush} alt="blush" />
      <img src={gloss} alt="gloss" />
      <img src={paleta} alt="paleta" />
      <img src={sombra} alt="sombra" />
    </>
  );
}

 
