import { GameCard } from "../../components/GameCard";
import { OfferCard } from "../../components/OfferCard";
import {
  newGames,
  halloweenGames,
  earlyAccessGames,
  cheapGames,
} from "./database/games";
import "./style.scss";

export function DHGames() {
  return (
    <main>
      <section className="new-games">
        <h2>New Games</h2>
        {newGames.map(({ id, name, platforms, categories, picture, price }) => (
          <GameCard
            key={id}
            name={name}
            platforms={platforms}
            categories={categories}
            picture={picture}
            price={price}
          />
        ))}
      </section>
      <section className="halloween-offers">
        <h2>Halloween Offers</h2>
        {halloweenGames.map(
          ({ id, name, categories, oldPrice, newPrice, picture }) => (
            <OfferCard
              key={id}
              name={name}
              categories={categories}
              oldPrice={oldPrice}
              newPrice={newPrice}
              picture={picture}
            />
          )
        )}
      </section>
      <section className="early-access-games">
        <h2>Early Access Games</h2>
        {earlyAccessGames.map(
          ({ id, name, platforms, categories, picture, price }) => (
            <GameCard
              key={id}
              name={name}
              platforms={platforms}
              categories={categories}
              picture={picture}
              price={price}
            />
          )
        )}
      </section>

      <section className="cheap-games">
        <h2>Cheap Games</h2>
        {cheapGames.map(
          ({ id, name, categories, oldPrice, newPrice, picture }) => (
            <OfferCard
              key={id}
              name={name}
              categories={categories}
              oldPrice={oldPrice}
              newPrice={newPrice}
              picture={picture}
            />
          )
        )}
      </section>
    </main>
  );
}
