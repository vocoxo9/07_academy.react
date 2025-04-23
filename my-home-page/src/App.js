
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/common.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Join from './pages/Join';
import BoardList from './pages/BoardList';
import NoticeList from './pages/NoticeList';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        {/* <Route path='/' element={<App/>}></Route> */}
        <Route path='/join' element={<Join/>}></Route>
        <Route path='/boards' element={<BoardList/>}></Route>
        <Route path='/notice' element={<NoticeList/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
