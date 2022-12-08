import { useReducer, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import { FifteenthClassItem } from "../../components/FifteenthClassItem";
import { useTheme } from "../../hooks/useTheme";

import "./style.scss";

export function FifteenthClass() {
    /** REACT HOOKS **/
    // (1) useState
    const [locations, setLocations] = useState([]);
    const [cep, setCep] = useState("");

    // (2) useTheme
    const { theme } = useTheme();

    // (3) useNavigate
    const navigate = useNavigate();
    
    // (4) useReducer
    const [counter, dispatchCounter] = useReducer(counterReducer, 0);

    // (5) useParams
    // const { id } = useParams()

    /** FUNCTIONS **/
    function searchCep(cepReceived) {

        if (cepReceived.length === 8) {
            fetch(`https://viacep.com.br/ws/${cepReceived}/json`)
            .then(response => response.json()
                .then(address => {
                    if (address.erro !== undefined) {
                        console.log("Error!");
                    } else {
                        // console.log("Success!");
                        registerAddress(address);
                    }
                })
            )
        }
    }

    function registerAddress(address) {
        setLocations([...locations, address]);
    }

    function deleteLocation(currentLocation) {
        const locationList = locations.filter(location => location.cep != currentLocation.cep);
        setLocations(locationList);
    }

    function redirectUser() {
        navigate("/to-do");
    }

    function counterReducer(state, action) {
        switch (action.type) {
            case "add":
                return state + 1;
            case "remove":
                return state - 1;
            default:
                throw new Error("Action not found");
        }
    }

    return (
        <div className={`fouteenth-class-component ${theme}`}>

            <p>The current number of counter is: {counter}</p>

            <button onClick={() => dispatchCounter({ type: "add" })}>Add</button>
            <button onClick={() => dispatchCounter({ type: "remove" })}>Remove</button>

            {/* <form onSubmit={(cep) => searchCep(cep)}>
                <h1>Register addresses</h1>

                <div>
                    <label htmlFor="">CEP</label>
                    <input
                        type="number"
                        value={cep}
                        aria-label="cep"
                        onChange={event => setCep(event.target.value)}
                    />
                </div>

                <button aria-label="submit-button">Register</button>
            </form> */}

            <section className="locations">
                {
                    locations.map(
                        (location, index) => (
                            <FifteenthClassItem
                                key={index}
                                data={location}
                                onDeleteLocation={currentLocation => deleteLocation(currentLocation)}
                            />
                        )
                    )
                }
            </section>
        </div>
    );
}