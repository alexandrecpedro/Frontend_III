import { useEffect, useState } from "react"

export function FourteenthClassItem(props) {
    /** REACT HOOKS **/
    // useState
    const [deletedRegister, setDeletedRegister] = useState(false);
    // const [formInvalid, setFormInvalid] = useState(false);

    // useEffect
    useEffect(() => {
        console.log("Component was mounted");
        return () => console.log("Component was destroyed");
    }, []);

    // useEffect(() => {
    //     formInvalid ? console.log("Invalid form") : console.log("Valid form");
    // }, [formInvalid]);

    /** FUNCTIONS **/
    // function formValidation() {
    //     setFormInvalid(!formInvalid);
    // }

    function excludeRegister() {
        props.deleteRegister(props.registerData);
    }

    return (
        <li>
            <h1>{props.registerData.title}</h1>
            <button onClick={() => excludeRegister()}>Delete</button>
        </li>
        // <>
        //     <button onClick={() => formValidation()}>Change form state</button>
        //     <p>{formInvalid ? "Invalid form" : "Valid form"}</p>
        // </>
    )
}