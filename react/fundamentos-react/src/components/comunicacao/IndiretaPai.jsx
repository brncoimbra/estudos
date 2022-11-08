import React from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
  let nome = "?";
  let idade = 0;
  let isNerd = false;

  function fornecerInformacoes(nomeParam, idadeParam, isNerdParam) {
    nome = nomeParam;
    idade = idadeParam;
    isNerd = isNerdParam;

    console.log(nomeParam, idadeParam, isNerdParam);
  }
  return (
    <div>
      <div>
        <span>{nome} </span>
        <span>
          <strong>{idade}</strong>
        </span>
        <span> {isNerd ? "Verdadeiro" : "Falso"}</span>
      </div>
      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  );
};
