import React, { Component } from 'react'
export default class Pokedex extends Component {

    render() {
        const {updateParent} = this.props
        return (
            <div className="pokeContainer">
                <h3>POKEDEX</h3>
                <div className="pokeList">
                    {this.props.pokemons.map(pokemon => (
                        <p onClick={() => updateParent(pokemon)} className="pokeOption">{pokemon.name}</p>
                    ))}
                </div>
            </div>
        )
    }
}


