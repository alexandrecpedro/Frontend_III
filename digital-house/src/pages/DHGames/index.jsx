import { GameCard } from "../../components/GameCard";
import { OfferCard } from "../../components/OfferCard";
import {
  newGames,
  halloweenGames,
  earlyAccessGames,
  cheapGames,
} from "./database/games";
import image from "../../assets/images/image1.png";
import "./style.scss";

export function DHGames() {
  return (
    <main className="dh-games">
      <section className="banner">
        <img src={image} alt="DHGames"/>
      </section>
      <section className="new-games">
        <h2 className="section-title">New Games</h2>
        <ul className="game-cards-list new-games-list">
          {newGames.map(
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
        </ul>
      </section>
      <section className="halloween-offers">
        <h2 className="section-title">Halloween Offers</h2>
        <ul lassName="square-cards-list halloween-games-list">
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
        </ul>
      </section>
      <section className="early-access-games">
        <h2 className="section-title">Early Access Games</h2>
        <ul className="wide-cards-list early-access-games-list">
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
        </ul>
      </section>
      <section className="cheap-games">
        <h2 className="section-title">Cheap Games</h2>
        <ul className="offer-cards-list cheap-games-list">
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
        </ul>
      </section>
    </main>
  );
}
