import { Outlet } from "react-router-dom";
import { classesRouteDatabase } from "../../database/classesDatabase";
import "./style.scss";

export function MainLayout() {
    return (
        <div className="main-layout-component">
            <header className="main-layout-component-header">
                <h1>Front-end Classes</h1>

                <ul>
                    {classesRouteDatabase.map((classroom, path) => (
                        <li>
                            <Link to={path}>{classroom}</Link>
                        </li>
                    ))}
                </ul>
            </header>

            <main className="main-layout-component-main">
                <p>Frontend III Classes</p>
                <Outlet />
            </main>
        </div>
    )
}