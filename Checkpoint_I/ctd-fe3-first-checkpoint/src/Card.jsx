//Este componente deverá receber dados por Props e mostrar as Informações em Tela
import "./index.css";

export function Card (props) {
  return (
    <div className="card-cor" style={{ backgroundColor: props.corHexadecimal }}>
      <h2>{props.nomeCor}</h2>
      <h3>{props.corHexadecimal}</h3>
    </div>
  )
}