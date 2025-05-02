
import { BrowserRouter, Routes } from 'react-router-dom';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import TodoList from './components/TodoList'
import { ToastContainer } from 'react-toastify';
function App() {

  return (
    <>
      <BrowserRouter>
        <SignUp />
        {/* <SignIn /> */}
        {/* <TodoList /> */}
        <Routes>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
