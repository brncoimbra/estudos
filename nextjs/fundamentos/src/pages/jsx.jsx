import Layout from "@/components/Layout";

const obj = {
  nome: "João",
  idade: 30,
};

export default function Jsx() {
  function subtitulo() {
    return <h2>MUITO LEGAL</h2>;
  }

  return (
    <Layout titulo='Entendendo o JSX'>
      <h1>JSX é um Conceito Central</h1>
      {subtitulo()}
      {`Nome: ${obj.nome}, idade: ${obj.idade}`}
    </Layout>
  );
}
