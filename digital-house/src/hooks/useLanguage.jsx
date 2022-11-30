import { createContext, useContext, useState } from "react";

// Context generation
const LanguageContext = createContext();

// Generate Context Provider
export function LanguageProvider(props) {
    /** REACT HOOKS **/
    // (1) useState
    const [currentLanguage, setCurrentLanguage] = useState("english");

    const languagesAllowed = ["portuguese", "english"];

    /** FUNCTION **/
    function changeCurrentLanguage(language) {
        const languageIsAllowed = languagesAllowed.includes(language);

        if (language !== currentLanguage && languageIsAllowed) {
            setCurrentLanguage(language);
        }
    }

    return (
        <LanguageContext.Provider value={{ currentLanguage, changeCurrentLanguage }}>
            {props.children}
        </LanguageContext.Provider>
    );
}

/** CUSTOM HOOK */
export function useLanguage() {
    const context = useContext(LanguageContext);
    return context;
}