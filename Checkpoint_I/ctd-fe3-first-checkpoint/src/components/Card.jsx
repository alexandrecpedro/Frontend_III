//Este componente deverá receber dados por Props e mostrar as Informações em Tela
import "./style.scss";

export function Card(props) {
  return (
    <div className="card-cor" style={{ backgroundColor: props.corData.corHexadecimal }}>
      <div className="card-body">
        <span>{props.corData.nomeCor}</span>
        <h1>{props.corData.corHexadecimal}</h1>
      </div>
    </div>
  );
}
