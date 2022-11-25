import { Link, Outlet, useMatch } from "react-router-dom";
import "./style.scss";

export function MainLayout(props) {
    return (
        <div className="main-layout-component">
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
            <div className="main-layout-lateral-menu">
                {
                    props.lateralMenu.map(singleClass =>
                        <Link to={`/${singleClass.path}`}>
                            <li className={Boolean(useMatch(`/${singleClass.path}`)) ? "active" : ""}>
                                {singleClass.classroom}
                            </li>
                        </Link>
                    )
                }
            </div>
            <main className="main-layout-component-main">
                {/* <p>Frontend III Classes</p> */}
                <Outlet />
            </main>
        </div>
    )
}