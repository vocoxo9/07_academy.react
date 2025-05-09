import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Login from './pages/login/Login';
import MainPage from './pages/MainPage';
import Join from './pages/join/Join';

import './App.css'
import { useState } from 'react';

function App() {
    const [isLogin, setIsLogin] = useState(()=>{
        /*
        const logined = localStorage.getItem("logined");
        return logined != null && logined != undefined && logined == true;
        */
        return !!localStorage.getItem("logined");
    });

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={isLogin ? <MainPage /> : <Login setIsLogin={setIsLogin} />} />
                    <Route path='/signup' element={<Join />} />
                </Routes>
            </BrowserRouter>
            {/* 
                react-toastify 라이브러리 활용
                 -> 사용할 컴포넌트의 최상위 위치에 ToastContainer 컴포넌트 추가
            */}
            <ToastContainer />
        </>
    )
}

export default App
