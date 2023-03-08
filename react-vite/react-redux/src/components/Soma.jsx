import "./Intervalo.css";
import Card from "./Card";

export default (props) => {
  return (
    <Card title='Soma dos números' blue>
      <div className='Intervalo'>
        <span>
          <span>Resultado:</span>
          <strong>10</strong>
        </span>
      </div>
    </Card>
  );
};
