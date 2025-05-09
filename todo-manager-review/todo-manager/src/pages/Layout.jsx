
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './login/Login';
import MainPage from './MainPage';
import Join from './join/Join';

export default function Layout() {
    const isLogin = false;
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={isLogin ? <MainPage /> : <Login />} />
                <Route path='/signup' element={<Join />} />
            </Routes>
        </BrowserRouter>
    )
}