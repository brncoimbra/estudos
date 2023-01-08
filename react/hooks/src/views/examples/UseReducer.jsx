import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import { initialState, initialStateDesafio, reducer } from "../../store";
import { numberAdd2, login } from "../../store/actions";

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [stateDesafio, exec] = useReducer(reducer, initialStateDesafio);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem Usuário</span>
        )}

        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => login(dispatch, 'Bruno')}
          >
            Login
          </button>

          <button
            className="btn"
            onClick={() => numberAdd2(dispatch)}
          >
            +2
          </button>
        </div>
      </div>

      <SectionTitle title="Exercício #02" />
      <div className="center">
        <span className="text">{stateDesafio.number}</span>

        <div>
          <button
            className="btn"
            onClick={() => exec({ type: "add2ToNumber" })}
          >
            +2
          </button>
          <button className="btn" onClick={() => exec({ type: "multi7" })}>
            x7
          </button>
          <button className="btn" onClick={() => exec({ type: "div25" })}>
            /25
          </button>
          <button className="btn" onClick={() => exec({ type: "numberInt" })}>
            Int
          </button>
          <button
            className="btn"
            onClick={() => exec({ type: "numberAddN", payload: -10 })}
          >
            -10
          </button>
          <button
            className="btn"
            onClick={() => exec({ type: "numberAddN", payload: +10 })}
          >
            +10
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
