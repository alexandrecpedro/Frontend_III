import { useEffect, useState } from "react";
import "./style.scss";

export function ThirteenthClass() {
    /** REACT HOOKS **/
    // useState
    const [counter, setCounter] = useState(0);
    const [userName, setUserName] = useState("");
    const [userNameError, setUserNameError] = useState(false);
    const [errorForm, setErrorForm] = useState(false);

    // useEffect
    useEffect(() => {
        console.log(userName);
        userName.length > 10 ? setUserNameError(true) : setUserNameError(false);
    }, [userName]);

    useEffect(() => {
        errorForm ? "There is an error": "There isn't errors";
    }, [errorForm]);

    /** FUNCTIONS **/
    function addCounter() {
        setCounter(counter + 1);
    }

    function validate() {
        setErrorForm(!errorForm);
    }

    return (
        <>
            <label>Seu pedido:</label>
            <input type="text" value={userName} onChange={event => setUserName(event.target.value)} />
            {userNameError && (<small>Field name contains more than 10 characters</small>)}
            <p>Counter value: {counter}</p>
            <button onClick={() => addCounter()}>Update counter</button>
            <button onClick={() => validate()}>Validate</button>
        </>
    );
}