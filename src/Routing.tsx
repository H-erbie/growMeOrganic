import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import InfoPage from './pages/InfoPage';
const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Auth />}></Route>
                <Route path="/info" element={<InfoPage />}></Route>
               
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;
