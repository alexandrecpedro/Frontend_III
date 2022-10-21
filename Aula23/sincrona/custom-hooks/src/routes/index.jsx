import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Repository from "../pages/Repository";
import UserDetails from "../pages/UserDetails";
import NotFound from "../pages/NotFound";

export const RouteList = () => (
  <BrowserRouter>
    <nav>
      <Link to="/">Go to Home</Link>
      <br />
      <Link to="/alexandrecpedro/Front-End_III">
        Link for an existent repository
      </Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":repositoryOwner/:repositoryName" element={<Repository />} />
      <Route path="user" element={<UserDetails />} />
      <Route path="user/:userName" element={<UserDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
