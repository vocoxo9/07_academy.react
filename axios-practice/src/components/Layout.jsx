import { Routes, Route } from 'react-router-dom';
import BasicPractice from '../pages/BasicPractice';
import APIPractice from '../pages/APIPractice';
import CatComponent from './CatComponent';
import DogComponent from './DogComponent';
import MyAPIComponent from './MyAPIComponent';

function Layout() {
    return (
        <Routes>
            <Route index element={<p> Main </p>} />
        
            <Route path="/basic" element={<BasicPractice />} />
            <Route path="/api" element={<APIPractice />}>
                <Route index element={<CatComponent />}/>
                <Route path="dog" element={<DogComponent />} />
                <Route path="my" element={<MyAPIComponent />} />
            </Route>

            <Route path="*" element={<h1>404 NotFound</h1>} />
            {/* pathname이 일치하지 않는 경우도 컴포넌트 설정 가능 */}
        </Routes>
    )
}

export default Layout;