import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
  const [nome, setNome] = useState("?");
  const [idade, setIdade] = useState(0);
  const [isNerd, setIsNerd] = useState(false);

  function fornecerInformacoes(nome, idade, isNerd) {
    setNome(nome);
    setIdade(idade);
    setIsNerd(isNerd);
  }

  return (
    <div>
      <div>
        <div>Nome: {nome} </div>
        <div>
          Idade: <strong>{idade}</strong>
        </div>
        <div> Nerd: {isNerd ? "Verdadeiro" : "Falso"}</div>
      </div>
      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  );
};
