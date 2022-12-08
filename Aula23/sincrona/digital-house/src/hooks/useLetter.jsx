import { createContext, useContext, useState } from "react";

// Context generation
const LetterContext = createContext();

// Generate Context Provider
export function LetterProvider(props) {
    /** REACT HOOKS **/
    // (1) useState
    const letterLocalStorage = localStorage.getItem("letter");
    const [letter, setLetter] = useState(letterLocalStorage === null || letterLocalStorage === false ? "default" : letterLocalStorage);

    /** FUNCTION **/
    function changeLetter(letterReceived) {
        if (letterReceived !== letter) {
            setTheme("bigLetter");
        } else {
            setLetter("default");
        }
        localStorage.setItem("letter", letterReceived);
    }

    return (
        <LetterContext.Provider value={{ letter, changeLetter }}>
            {props.children}
        </LetterContext.Provider>
    );
}

/** CUSTOM HOOK */
export function useLetter() {
    const context = useContext(LetterContext);
    return context;
}