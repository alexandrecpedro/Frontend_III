import React, { Component } from 'react'
import "../styles/App.css"
import Pokedex from './Pokedex';
import pokemons from '../pokedex.json';

export default class App extends Component {

  state = {
    pokemons,
    pokemon: pokemons[0]
  }

  update = (pokemon) => {
    this.setState({ pokemon });
  }

  getPokemon = () => {
    const { id } = this.state.pokemon;
    console.log(id.lenght)
    if (id.toString().length === 1) return `00${id}`
    if (id.toString().length === 2) return `0${id}`
    if (id.toString().length === 3) return `${id}`
  }

  getTypes = () => {
    let phrase;
    const { type } = this.state.pokemon;
    if (type.length === 1) return type[0]
    if (type.length > 1) {
      for (let index = 0; index < type.length; index++) {
        if (index === 0) phrase = type[index]
        if (index !== 0) phrase = `${phrase} and ${type[index]}`
      }
      return phrase
    }
  }

  render() {
    const { pokemons, pokemon } = this.state; 
    const { name } = pokemon;
    return (
      <div className='app'>
        <div className="container">
          <img id="pokemonImg" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${this.getPokemon()}.png`} alt={name} />
          <p id="name">{`${name} is a pokemon type ${this.getTypes()}`}</p>
        </div>
        <Pokedex updateParent={this.update} pokemons={pokemons} />
      </div>
    )
  }
}
