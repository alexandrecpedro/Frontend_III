import { Link, Outlet, useMatch } from "react-router-dom";
import { classesRouteDatabase } from "../../database/classesDatabase";
import { useTheme } from "../../hooks/useTheme";

import "./style.scss";

export function MainLayout(props) {
    /** REACT HOOKS **/
    // (1) useTheme
    // Importação do Tema utilização o Hook customizado "useTheme"
    const { theme } = useTheme();

    

    return (
        <div className={`main-layout-component ${theme}`}>
            {/* <header className="main-layout-component-header">
                <h1>Front-end Classes</h1>

                <ul>
                    {classesRouteDatabase.map((classroom, path) => (
                        <li>
                            <Link to={path}>{classroom}</Link>
                        </li>
                    ))}
                </ul>
            </header> */}
            <header className='main-layout-component-header'>
                <h1>Front-end Third Bimester - React</h1>
            </header>
            <aside className='main-layout-component-aside'>
                {/* <section>
                    <h1>Componentes</h1>
                    <ul>
                        <li>
                            <Link to="decima-quarta-aula">Decima Quarta Aula</Link>
                        </li>
                        <li>
                            <Link to="decima-quinta-aula">Decima Quinta Aula</Link>
                        </li>
                    </ul>
                </section> */}
                <section>
                    <h1>Classrooms</h1>
                    <ul>
                        {
                            classesRouteDatabase.map(classItem => (
                                <li>
                                    <Link to={classItem.path}>{classItem.classroom}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </section>
                <section>
                    <h1>Screens</h1>
                    <ul>
                        <li>
                            <Link to="to-do">To Do</Link>
                        </li>
                        <li>
                            <Link to="configurations">Settings</Link>
                        </li>
                    </ul>
                </section>
            </aside>
            <main className='main-layout-component-main'>
                {/* <p>The content will be loaded here:</p> */}
                <Outlet />
            </main>
        </div>
    )

}