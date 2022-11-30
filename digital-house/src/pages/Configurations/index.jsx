import { contents } from "../../assets/translate/contents";
import { useLanguage } from "../../hooks/useLanguage";
import { useTheme } from "../../hooks/useTheme";
import "./style.scss";

export function Configurations() {
    /** REACT HOOKS **/
    // (1) useTheme
    // Utilização do Hook useTheme
    const { theme, changeTheme } = useTheme();
    const { currentLanguage, changeCurrentLanguage } = useLanguage();

    return (
        <div className="configurations-component">
            <h1>{contents.configurationComponent.title[currentLanguage]}</h1>

            <form>
                <section>
                    <h1>{contents.configurationComponent.sectionTitleTheme[currentLanguage]}</h1>

                    <div>
                        <label htmlFor="light">{contents.configurationComponent.sectionThemeOption.lightOptionLabel[currentLanguage]}</label>
                        <input type="radio" name="theme" id="light" checked={theme === 'light'} onChange={() => changeTheme('light')} />
                    </div>

                    <div>
                        <label htmlFor="dark">{contents.configurationComponent.sectionThemeOption.darkOptionLabel[currentLanguage]}</label>
                        <input type="radio" name="theme" id="dark" checked={theme === 'dark'} onChange={() => changeTheme('dark')} />
                    </div>
                </section>

                <section>
                    <h1>{contents.configurationComponent.sectionTitleLanguage[currentLanguage]}</h1>

                    <div>
                        <label htmlFor="language">{contents.configurationComponent.sectionTitleLanguage[currentLanguage]}</label>
                        <select 
                            name="language" 
                            id="language"
                            onChange={event => changeCurrentLanguage(event.target.value)}
                            value={currentLanguage}
                        >
                            <option value="portuguese">
                                {contents.configurationComponent.sectionLanguageOption.portugueseOption[currentLanguage]}
                            </option>
                            <option value="english">
                                {contents.configurationComponent.sectionLanguageOption.englishOption[currentLanguage]}
                            </option>
                            {/* <option value="russian">Russian</option> */}
                        </select>
                    </div>
                </section>
            </form>
        </div>
    );
}