import { useEffect, useState } from "react";
import "./style.scss";

export function FifteenthClassItem(props) {
    /** REACT HOOKS **/
    // useState

    // useEffect
    // useEffect(() => {
    //     console.log("Component was mounted");
    //     return () => console.log("Component was destroyed");
    // }, []);

    /** FUNCTIONS **/
    function removeLocation() {
        props.onDeleteLocation(props.data);
    }

    return (
        <div className="fifteenth-class-item">
            <h1>Address name</h1>
            <address>{props.data.logradouro}, {props.data.bairro} - {props.data.localidade}({props.data.uf})</address>
            <small>{props.data.cep}</small>
            <button onClick={() => removeLocation()}>Delete</button>
        </div>
    );
}