import { useTheme } from "../../hooks/useTheme";

export function Configurations() {
    /** REACT HOOKS **/
    // (1) useTheme
    // Utilização do Hook useTheme
    const { theme, changeTheme } = useTheme();

    return (
        <div>
            <h1>Settings</h1>

            <form>
                <section>
                    <h1>Theme</h1>

                    <div>
                        <label htmlFor="light">Light</label>
                        <input type="radio" name="theme" id="light" checked={theme === 'light'} onChange={() => changeTheme('light')} />
                    </div>

                    <div>
                        <label htmlFor="dark">Dark</label>
                        <input type="radio" name="theme" id="dark" checked={theme === 'dark'} onChange={() => changeTheme('dark')} />
                    </div>
                </section>
            </form>
        </div>
    );
}