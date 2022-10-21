import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './pages/Details';
import Error from './pages/Error';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}