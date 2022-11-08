import React from "react";
import produtos from "../../data/produtos";

import './TabelaProdutos.scss'

export default (props) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Produto</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((produtos, i) => (
          <tr className={ i % 2 === 0 ? 'Par' : ''} key={produtos.id}>
            <td>{produtos.id}</td>
            <td>{produtos.nomeProduto}</td>
            <td>R$ {produtos.precoProduto.toFixed(2).replace('.', ',')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};