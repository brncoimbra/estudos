import Navegador from "@/components/Navegador";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        height: "100vh",
      }}
    >
      <Navegador texto='Estiloso' destino='/estiloso' cor='#9400d3' />
      <Navegador texto='Exemplo' destino='/exemplo' />
      <Navegador texto='JSX' destino='/jsx' cor='crimson' />
      <Navegador texto='Navegação #01' destino='/navegacao' cor='green' />
    </div>
  );
}
