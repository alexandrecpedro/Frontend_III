import { createContext, useContext, useState } from "react";

// Criação do Contexto
const ThemeContext = createContext();

// Criação do Provedor para o Contexto
export function ThemeProvider(props) {
    /** REACT HOOKS **/
    // (1) useState
    // State que irá controlar qual Tema a aplicação está usando
    const themeLocalStorage = localStorage.getItem("theme");
    const [theme, setTheme] = useState(themeLocalStorage === null ? "dark" : themeLocalStorage);

    /** FUNCTION **/
    // Função responsável por Trocar o Tema
    function changeTheme(themeReceived) {
        if (themeReceived !== theme) {
            setTheme(themeReceived);
            localStorage.setItem("theme", themeReceived);
        }
    }

    return (
        // Contrução dos Elementos para utilizarmos o Contexto em nossa Aplicação, tudo o que for contido no "value" será exportado e poderá ser utilizado em Componentes que utilizarem o Hook Customizado "useTheme"
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            { props.children }
        </ThemeContext.Provider>
    );
}

/** CUSTOM HOOK */
// Hook Personalizado que irá ser utilizado quando quisermos utilizar alguma das Funcionalidades contidas em nosso Contexto
export function useTheme() {
    const context = useContext(ThemeContext);
    return context;
}