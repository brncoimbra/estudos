import React from "react";

export default (props) => {
  const cb = props.quandoClicar;
  const nomeLista = ["Bruno", "Ygo", "Renato", "Thiago"];
  const gerarNome = () => nomeLista[Math.floor(Math.random() * nomeLista.length)];
  const gerarIdade = () => parseInt(Math.random() * 21) + 50;
  const gerarIsNerd = () => Math.random() > 0.5;
  
  return (
    <div>
      <div>Botão vem do filho</div>
      <button onClick={(_) => cb(gerarNome(), gerarIdade(), gerarIsNerd)}>
        Fornecer Informações
      </button>
    </div>
  );
}