import "./style.scss";

export function GameCard({ name, platforms, categories, picture, price }) {
  return (
    <li className="game-card">
      <img className="game-card-image" src={picture} />
      <section className="game-card-text">
        <article className="game-card-lines">
            <h3 className="game-card-title">{name}</h3>
            <div className="game-card-platforms">{platforms}</div>
            <h4 className="game-card-categories">{categories}</h4>
        </article>
        <article className="game-card-price">{price}</article>
      </section>
    </li>
  );
}
