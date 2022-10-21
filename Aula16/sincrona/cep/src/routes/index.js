import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ViaCEP from '../pages/ViaCEP';
import BrazilCEPAPI from '../pages/BrazilCEPAPI';
import NotFound from '../pages/Error404';

const RouteList = () => {
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<ViaCEP />} />
            <Route path="/:cep" element={<ViaCEP />} />
            <Route path="/brasilapi/" element={<BrazilCEPAPI />} />
            <Route path="/brasilapi/:cep" element={<BrazilCEPAPI />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
}

export default RouteList;