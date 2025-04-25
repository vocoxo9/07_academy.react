import {Routes, Route} from 'react-router-dom';
import BasicPractice from '../pages/BasicPractice';
import APIPractice from '../pages/APIPractice';
import DogComponent from './DogComponent';
import CatComponent from './CatComponent';
import MyAPIComponent from './MyAPIComponent';

export default function Layout(){
    return (
        <Routes>
            <Route index element={<h1>Main</h1>}></Route>
            <Route path="/basic" element={<BasicPractice></BasicPractice>}></Route>

            {/* Outlet 설정 -> 부모(상위) 컴포넌트에 가서 outlet 지정하기 */}
            <Route path="/api" element={<APIPractice/>}>
                <Route index element={<CatComponent/>} />
                <Route path="dog" element={<DogComponent/>} />
                <Route path="my" element={<MyAPIComponent />} />
            </Route>

            <Route path="*" element={<h1>404 NotFound</h1>}></Route>
            {/* pathname이 일치하지 않는 경우도 컴포넌트 설정 가능 */}
        </Routes>
    );
}