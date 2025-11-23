import "./carrossel.scss";
import blush from "../../assets/carrossel/blush.png";
import gloss from "../../assets/carrossel/gloss.png";
import paleta from "../../assets/carrossel/paleta.png";
import sombra from "../../assets/carrossel/sombra.jpg";

export default function Carrossel() {
  return (
    <>
    <h2 className="tituloCarrossel">LOOKS E DICAS DE MAQUIAGEM</h2>
      <section className="sessaoCarrossel">
        <div className="card">
      <img src={blush} alt="blush" />
      <span>PELE</span>
      </div>

        <div className="card">
      <img src={gloss} alt="gloss" />
      <span>BOCA</span>
      </div>

        <div className="card">
      <img src={paleta} alt="paleta" />
      <span>TENDÊNCIAS</span>
</div>
        <div className="card">
      <img src={sombra} alt="sombra" />
      <span>OLHOS</span>
    </div>
    </section>
    </>
  );
}

 
