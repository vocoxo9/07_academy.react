
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import TodoList from './components/TodoList'
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(() => {
    return !!localStorage.getItem("logined");
  });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={isLogin ? <TodoList /> : <SignIn setIsLogin={setIsLogin} />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      {/* 
        react-toastify 라이브러리 활용
        -> 사용할 컴포넌트의 최상위 위치에 ToastContainer 컴포넌트 추가
      */}
      <ToastContainer />

      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <TodoList /> */}
    </>
  )
}

export default App
