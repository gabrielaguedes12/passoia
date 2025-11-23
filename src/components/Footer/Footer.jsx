import "../Footer/footer.scss";

//images
import boleto from "../../assets/footer/pagamento/boleto.png";
import mastercard from "../../assets/footer/pagamento/mastercard.png";
import pix from "../../assets/footer/pagamento/pix.png";
import visa from "../../assets/footer/pagamento/visa.png";
import instagram from "../../assets/footer/redesSociais/instagram.png";
import facebook from "../../assets/footer/redesSociais/facebook.png";
import youtube from "../../assets/footer/redesSociais/youtube.png";
import twitter from "../../assets/footer/redesSociais/twitter.png";

export default function Footer(){
    return(
        <>
        <section className="footer-container">
        <div className="cardFooter">
        <h2 className="tituloFooter">ATENDIMENTO</h2>
        <p>Fale Conosco</p>
        <p>Perguntas Frequentes</p>
        <p>Meus Pedidos</p>
        <p>Nossas Lojas</p>
        </div>

        <div className="cardFooter">
        <h2 className="tituloFooter">FORMAS DE PAGAMENTO</h2>
        <img className="boleto" src={boleto} alt="boleto" />      
      <img className="mastercard" src={mastercard} alt="mastercard" />      
      <img className="pix" src={pix} alt="pix" />      
      <img className="visa" src={visa} alt="visa" />  
        </div>
        
        <div className="cardFooter">
        <h2 className="tituloFooter">SIGA-NOS NAS REDES SOCIAIS</h2>
        <img className="instagram" src={instagram} alt="instagram" />      
        <img className="facebook" src={facebook} alt="facebook" />      
        <img className="youtube" src={youtube} alt="youtube" />      
        <img className="twitter" src={twitter} alt="twitter" />  
             </div>
     </section>
        </>
    )
}