import "./App.css";
import Intervalo from "./components/Intervalo";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";

function App() {
  return (
    <div className='App'>
      <h1>Exercício React-Redux (Simples)</h1>
      <div className='linha'>
        <Intervalo>X</Intervalo>
      </div>
      <div className='linha'>
        <Media title='Card 2' green>
          X
        </Media>
        <Soma title='Card 3' blue>
          Y
        </Soma>
        <Sorteio title='Card 4' purple>
          Y
        </Sorteio>
      </div>
    </div>
  );
}

export default App;
