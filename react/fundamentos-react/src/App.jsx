import "./App.css";

import React from "react";

import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import NumeroAleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";

/* cores cards
  azul: #00C8F8
  verde: #38B71A
  rosa: #E94C6F
  amarelo: #EBC618
  roxo: #9900FA
*/

export default () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="#13 Mega" color="#E94C6F">
          <Mega></Mega>
        </Card>

        <Card titulo="#12 Contador" color="#38B71A">
          <Contador numeroInicial={0}></Contador>
        </Card>

        <Card titulo="#11 Componente controlado" color="#00C8F8">
          <Input></Input>
        </Card>

        <Card titulo="#10 Comunicação indireta" color="#9900FA">
          <IndiretaPai></IndiretaPai>
        </Card>

        <Card titulo="#09 Comunicação direta" color="#EBC618">
          <DiretaPai></DiretaPai>
        </Card>

        <Card titulo="#08 Renderização Condicional" color="#E94C6F">
          <ParOuImpar numero={20}></ParOuImpar>
          <UsuarioInfo usuario={{ nome: "Fernando" }}></UsuarioInfo>
          <UsuarioInfo></UsuarioInfo>
        </Card>

        <Card titulo="#07 Desafio Repetição" color="#38B71A">
          <TabelaProdutos></TabelaProdutos>
        </Card>

        <Card titulo="#06 Repetição" color="#00C8F8">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#05 Componente com Filhos" color="#9900FA">
          <Familia sobrenome="Araujo">
            <FamiliaMembro nome="Bruno"></FamiliaMembro>
            <FamiliaMembro nome="Clara"></FamiliaMembro>
            <FamiliaMembro nome="Izabella"></FamiliaMembro>
            <FamiliaMembro nome="Cezar"></FamiliaMembro>
          </Familia>
        </Card>

        <Card titulo="#04 Exemplo de card e números aleatórios" color="#EBC618">
          <NumeroAleatorio min={1} max={60} />
        </Card>

        <Card titulo="#03 Fragmento" color="#E94C6F">
          <Fragmento />
        </Card>

        <Card titulo="#02 Com Parâmetro" color="#38B71A">
          <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro Silva"
            nota={9.3}
          />
        </Card>

        <Card titulo="#01 Primeiro Componente" color="#00C8F8">
          <Primeiro></Primeiro>
        </Card>
      </div>
    </div>
  );
};
