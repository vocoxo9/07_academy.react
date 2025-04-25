import { Routes, Route, useParams, Outlet } from "react-router-dom";


function MenuTemplate() {
  const { no } = useParams();
  // useParams라는 훅을 통해서 변수를 받음

  return (
    <p>
      Menu {no} 페이지
    </p>
  );
}


function Child1() {
  return (
    <h2>Child1</h2>
  );
}

function Child2() {
  return (
    <h2>Child2</h2>
  );
}

function ParentComponent() {
  return (
    <div>
      <h1>Parent Component</h1>
      <Outlet />
    </div>
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

        <Route path="/parent" element={<ParentComponent/>} >
          <Route path="child1" element={<Child1/>} /> 
          <Route path="child2" element={<Child2/>} />
        </Route>
      </Routes>
    </>
  );
}

export default Layout;