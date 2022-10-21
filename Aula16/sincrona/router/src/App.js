import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Details from './pages/Details';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Initial from './pages/Initial';

export default function App() {
  return (
    <BrowserRouter>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/details">Details</Link>
          </li>
        </ul>
        <Routes>
          {/* Import Home screen */}
          <Route path="/" element={<Initial />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <footer>
          <span>© All rights reserved</span>
        </footer>
      </BrowserRouter>
  );
}