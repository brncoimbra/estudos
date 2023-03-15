import "./Intervalo.css";
import Card from "./Card";
import { connect } from "react-redux";
import { alterarNumeroMinimo } from "../store/actions/numeros";

function Intervalo(props) {
  const { min, max } = props;

  return (
    <Card title='Intervalo de Números' red>
      <div className='Intervalo'>
        <span>
          <strong>Mínimo:</strong>
          <input type='number' value={min} onChange={e => props.alterarMinimo(+e.target.value)} />
        </span>

        <span>
          <strong>Máximo:</strong>
          <input type='number' value={max} onChange={e => props.alterarMinimo(+e.target.value)} />
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    alterarMinimo(novoNumero) {
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
