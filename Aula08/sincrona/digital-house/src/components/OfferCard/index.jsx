import "./style.scss";

export function OfferCard({ name, categories, oldPrice, newPrice, picture }) {
  return (
    <li className="offer-card">
      <img className="offer-offer-image" src={picture} />
      <section className="offer-card-text">
        <article className="offer-card-lines">
          <h3 className="offer-card-title">{name}</h3>
          <p className="old-price">{oldPrice}</p>
        </article>
        <article className="offer-card-prices">
          <h4 className="offer-card-categories">{categories}</h4>
          <p className="new-price">{newPrice}</p>
        </article>
      </section>
    </li>
  );
}
