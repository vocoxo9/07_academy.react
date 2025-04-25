
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import MenuBar from './components/MenuBar';
import Layout from './components/Layout';

// 배열로 메뉴 표시
const mainMenu = [
  { pathname : "/", text : "HOME" },
  { pathname : "/basic", text : "BASIC" },
  { pathname : "/api", text : "API"}
]


function App() {
  return (
      <BrowserRouter>
      <MenuBar menuInfo={mainMenu}/>
      {/* 속성명 = 하위 컴포넌트에서 props로 전달받을 키값 작성, 속성값은 내가 전달할 값 */}

      <hr/>

      <Layout />
      </BrowserRouter>
  );
}

export default App;
