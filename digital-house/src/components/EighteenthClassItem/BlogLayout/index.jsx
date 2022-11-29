import { Link, Outlet } from "react-router-dom";

import "./style.scss";

export const BlogLayout = () => {
    return (
        <div className="blog-layout-main">
            <header>
                <h1>MY BLOG</h1>
            </header>

            <nav className="blog-layout-nav">
                <ul>
                    <Link to=''><li>HOME</li></Link>
                    <Link><li>ABOUT</li></Link>
                    <Link><li>CONTACT</li></Link>
                </ul>
            </nav>

            <div className='main-content'>
                <Outlet />
            </div>

            <footer>
                <p>Developed by Thomas Breno Bertelli Mendes</p>
                <p>2022</p>
            </footer>
        </div>
    );
}