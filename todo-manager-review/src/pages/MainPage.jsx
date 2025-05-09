import SideMenu from '../components/SideMenu';
import TodoPage from './todoPage/TodoPage';

import './mainPage.css';

export default function MainPage() {
    return (
        <div className="main-layout">
            <SideMenu />
            <TodoPage />
        </div>
    )
}