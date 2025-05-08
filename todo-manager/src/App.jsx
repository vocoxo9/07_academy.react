
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import TodoList from './components/TodoList'
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';

function App() {
  const [isLogin, setIsLogin] = useState(()=>{
    return !!localStorage.getItem("logined");
  });

  return (
    <>
      <BrowserRouter>
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        <TodoList />

        <Routes>
          <Route index element={isLogin? <TodoList/> : <SignIn setIsLogin={setIsLogin}/>} />
          <Route path='/signup' element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
