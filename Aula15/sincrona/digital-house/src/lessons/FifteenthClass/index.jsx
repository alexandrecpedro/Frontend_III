import { useState } from "react";
import { FifteenthClassItem } from "../../components/FifteenthClassItem";
import "./style.scss";

export function FifteenthClass() {
    /** REACT HOOKS **/
    // useState
    const [locations, setLocations] = useState([]);
    const [cep, setCep] = useState("");

    // useEffect

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

    return (
        <div className="fouteenth-class-component">

            <form onSubmit={(cep) => searchCep(cep)}>
                <h1>Register addresses</h1>

                <div>
                    <label htmlFor="">CEP</label>
                    <input
                        type="number"
                        value={cep}
                        onChange={event => setCep(event.target.value)}
                    />
                </div>

                <button>Register</button>
            </form>

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