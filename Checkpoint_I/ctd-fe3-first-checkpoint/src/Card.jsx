export function Card(props) {
  return (
    <div className="card-component">
      <img src={props.playerData.picture} />
      <div className="card-body">
        <h1>{props.playerData.name}</h1>
        <span>{props.playerData.position}</span>
      </div>
    </div>
  )
}