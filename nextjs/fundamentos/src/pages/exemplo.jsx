import Cabecalho from "./../components/Cabecalho";
import Layout from "@/components/Layout";

export default function Exemplo() {
  return (
    <Layout titulo='Usando componentes'>
      <Cabecalho titulo='teste' nome='xyz' idade='123' />
      <Cabecalho titulo='aprenda next.js na pratica' />
    </Layout>
  );
}
