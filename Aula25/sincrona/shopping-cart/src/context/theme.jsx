import { createContext } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");
    const handleTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
      };

    return (
        <ThemeContext.Provider value ={{ theme: light, handleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}