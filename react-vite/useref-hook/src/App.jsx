import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  const [textInput, setTextInput] = useState(0);
  const countRef = useRef();

  const timeToCallSomething = useRef(null);

  const FetchSomething = () => {
    fetch(`https:rickandmortyapi.com/api/character/?name=${textInput}`)
      .then((res) => res.json())
      .then((data) => setData(data.results));
  };

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  useEffect(() => {
    if (timeToCallSomething.current) {
      clearInterval(timeToCallSomething.current);
    }
    timeToCallSomething.current = setTimeout(FetchSomething, 1000);

    return () => clearInterval(timeToCallSomething.current);
  }, [textInput]);

  return (
    <div className='App'>
      <h1>Front Beginners</h1>
      <p>Contador Original: {count}</p>
      <p>Contador Referencia:{countRef.current}</p>
      <form>
        <input
          name='name'
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
