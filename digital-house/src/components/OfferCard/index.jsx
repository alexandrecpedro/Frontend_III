import "./style.scss";

export function OfferCard({ name, categories, oldPrice, newPrice, picture }) {
  return (
    <div className="offer-card">
      <img className="offer-offer-image" src={picture} />
      <section className="offer-card-text">
        <article className="description">
            <h3 className="offer-card-title">{name}</h3>
            <h4 className="offer-card-categories">{categories}</h4>
        </article>
        <article className="offer-card-prices">
          <p className="old-price">{oldPrice}</p>
          <p className="new-price">{newPrice}</p>
        </article>
      </section>
    </div>
  );
}
