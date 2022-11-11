//Este componente deverá receber dados por Props e mostrar as Informações em Tela
// import './stylecard.scss'

export function Card(props) {
  return (
    <div
      className="section-card-horizontal"
      style={{ backgroundColor: props.cardCor.cor }}
    >
      <span className="section-card-horizontal-span">{props.cardCor.nome}</span>
      <h1 className="section-card-horizontal-title">{props.cardCor.cor}</h1>
    </div>
  );
}
