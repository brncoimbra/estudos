import React from "react";

export default (props) => {
  const { min, max } = props;
  const aleatorio = Math.floor(Math.random() * (max - min) + min);
  return (
    <>
      <h2>Valor mínimo: {min}</h2>
      <h2>Valor máximo: {max}</h2>
      <h2>Valor escolhido: {aleatorio}</h2>
    </>
  )
}