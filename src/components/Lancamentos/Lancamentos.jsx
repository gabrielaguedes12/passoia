import { useState } from "react";

// Import das imagens
import rosa from "../../assets/lancamentos/rosa.png";
import vermelho from "../../assets/lancamentos/vermelho.png";
import vinho from "../../assets/lancamentos/vinho.png";
import marrom from "../../assets/lancamentos/marrom.png";

export default function Lancamentos() {
  // Estado que guarda a cor (imagem) atual
  // O valor inicial é a imagem "vermelho"
  const [cor, setCor] = useState(rosa);

  return (
    <>
      <h1>APROVEITE OS LANÇAMENTOS</h1>

      {/* A imagem exibida será sempre a do estado "cor" */}
      <img src={cor} alt="Batom" />

      {/* Cada botão altera o estado "cor", trocando a imagem exibida */}
      <button onClick={() => setCor(rosa)}>Rosa</button>
      <button onClick={() => setCor(vermelho)}>Vermelho</button>
      <button onClick={() => setCor(vinho)}>Vinho</button>
      <button onClick={() => setCor(marrom)}>Marrom</button>
    </>
  );
}

