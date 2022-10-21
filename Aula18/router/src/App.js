import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './screens/Details';
import Home from './screens/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:cep' element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}