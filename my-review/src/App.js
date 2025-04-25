import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Timer from './components/Timer';
import CountLetters from './components/CountLetters';


function App() {

    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" ></Route>
                <Route path="/timer" element={<Timer />}></Route>
                <Route path="/count/letters" element={<CountLetters />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
