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
                        <input type="radio" name="theme" id="light" checked={theme === 'light'} onChange={() => changeTheme('light')} />
                        <label htmlFor="light">{contents.configurationComponent.sectionThemeOption.lightOptionLabel[currentLanguage]}</label>
                    </div>

                    <div>
                        <input type="radio" name="theme" id="dark" checked={theme === 'dark'} onChange={() => changeTheme('dark')} />
                        <label htmlFor="dark">{contents.configurationComponent.sectionThemeOption.darkOptionLabel[currentLanguage]}</label>
                    </div>

                    <div>
                        <input type="radio" name="theme" id="contrast" checked={theme === 'contrast'} onChange={() => changeTheme('contrast')} />
                        <label htmlFor="contrast">{contents.configurationComponent.sectionThemeOption.contrastOptionLabel[currentLanguage]}</label>
                    </div>
                </section>

                <section>
                    <h1>{contents.configurationComponent.sectionAccessibility.title[currentLanguage]}</h1>

                    <div>
                        <input type="checkbox" name="accessibility" id="accessibility" onChange={() => console.log()} />
                        <label htmlFor="accessibility">{contents.configurationComponent.sectionAccessibility.accessibilityOptions[currentLanguage]}</label>
                    </div>
                </section>

                <section>
                    <h1>{contents.configurationComponent.sectionTitleLanguage[currentLanguage]}</h1>

                    <div>
                        <label htmlFor="language">{contents.configurationComponent.sectionLanguage.title[currentLanguage]}</label>
                        <select 
                            name="language" 
                            id="language"
                            onChange={event => changeCurrentLanguage(event.target.value)}
                            value={currentLanguage}
                        >
                            <option value="portuguese">
                                {contents.configurationComponent.sectionLanguage.languageOption.portuguese[currentLanguage]}
                            </option>
                            <option value="english">
                                {contents.configurationComponent.sectionLanguage.languageOption.english[currentLanguage]}
                            </option>
                            {/* <option value="russian">Russian</option> */}
                        </select>
                    </div>
                </section>
            </form>
        </div>
    );
}