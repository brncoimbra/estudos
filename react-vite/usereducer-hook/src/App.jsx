import { useReducer, useState } from "react";
import "./App.css";

const initialState = {
  count: 0,
  showMessage: true,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "IncrementAndShowMessage":
      return { count: state.count + 1, showMessage: !state.showMessage };
    case "resetValue":
      return { count: 0, showMessage: true };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    dispatch({ type: "IncrementAndShowMessage" });
  };

  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button onClick={handleClick}>Click</button>
      <button onClick={() => dispatch({ type: "resetValue" })}>Reset</button>
      {state.showMessage && (
        <p>Bem-vindo, está é apenas uma mensagem de teste.</p>
      )}
    </div>
  );
}

export default App;
