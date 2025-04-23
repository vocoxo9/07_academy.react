import { Routes, Route, useParams } from "react-router-dom";
import Menu from "./Menu";


function MenuTemplate() {
    const { no } = useParams();
    // useParams라는 훅을 통해서 변수를 받음
  
    return (
      <p>
        Menu {no} 페이지
      </p>
    );
  }

function Layout() {

    return (
        <>
            <Routes>
                <Route index element={<p>메인페이지</p>} />
                {/*     <Route path="/" element={<p>메인페이지</p>} /> 
                        <Route path="/menu/1" element={<p>Menu1 페이지</p>} />
                        <Route path="/menu/2" element={<p>Menu2 페이지</p>} />
                */}
                <Route path="/menu/:no" element={<MenuTemplate />} />
            </Routes>
        </>
    );
}

export default Layout;