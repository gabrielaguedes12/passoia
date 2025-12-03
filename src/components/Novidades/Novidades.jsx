import make from "../../assets/novidades/make.jpg";
import "../Novidades/novidades.scss";

export default function Novidades(){
    return(
        <div className="containerNovidades">
        <h2 className="tituloNovidades">NOVIDADES PARA VOCÊ</h2>
              <img className="novidades-img" src={make} alt="make" />
        </div>
        
    )
}