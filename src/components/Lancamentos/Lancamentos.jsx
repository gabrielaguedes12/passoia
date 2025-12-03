import { useState } from "react";
import "./Lancamentos.scss";

// Import das imagens
import rosa from "../../assets/lancamentos/rosa.png";
import vermelho from "../../assets/lancamentos/vermelho.png";
import vinho from "../../assets/lancamentos/vinho.png";
import marrom from "../../assets/lancamentos/marrom.png";
import estrelas from "../../assets/lancamentos/estrelas.png"
export default function Lancamentos() {
  const cores = [
    { nome: "rosa", img: rosa, hex: "#e86a88" },
    { nome: "vermelho", img: vermelho, hex: "#b12e3d" },
    { nome: "vinho", img: vinho, hex: "#7a2e46" },
    { nome: "marrom", img: marrom, hex: "#4a342b" },
  ];

  const [corSelecionada, setCorSelecionada] = useState(cores[0]);

  return (
    <div className="lancamentos">
      <h1>APROVEITE OS LANÇAMENTOS</h1>

      <div className="container">
        <div className="miniaturas">
          {cores.map((c, i) => (
            <img
              key={i}
              src={c.img}
              alt={c.nome}
              className={c.nome === corSelecionada.nome ? "active" : ""}
              onClick={() => setCorSelecionada(c)}
            />
          ))}
        </div>

        <div className="imagem-principal">
          <img src={corSelecionada.img} alt="Batom" />
        </div>

        <div className="info">
          <div className="estrelas">
          <img src={estrelas} alt="avaliação" />
          </div>

          <h2>Matte Premium</h2>
          <span className="estoque">Cores disponíveis</span>

          <div className="cores">
            {cores.map((c, i) => (
              <div
                key={i}
                className={`cor ${c.nome === corSelecionada.nome ? "selecionada" : ""}`}
                style={{ backgroundColor: c.hex }}
                onClick={() => setCorSelecionada(c)}
              ></div>
            ))}
          </div>
            <p className="tituloDescricao">Descrição</p>
          <p className="descricao">
            O Batom Matte possui uma fórmula inovadora desenvolvida para entregar o
            máximo de cor na primeira aplicação com um deslize suave e macio.
            Tem acabamento matte aveludado e manteiga de manga que ajuda a hidratar
            e a proteger os lábios contra ressecamento. Ajuda na hidratação dos lábios,
            textura fina e macia que não pesa nos lábios.
          </p>
        </div>
      </div>
    </div>
  );
}
