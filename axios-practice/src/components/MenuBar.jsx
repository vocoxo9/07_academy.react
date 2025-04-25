import { Link } from 'react-router-dom';
/*
const menuInfo = [
    {pathname: "/", text: "HOME"},
    {pathname: "/basic", text: "BASIC"}
];
*/

function MenuBar({ menuInfo }) {
    return (
        <div className="menu-bar">
            {menuInfo.map((menu, idx)=>{
                return (
                    <Link key={"Link_"+idx} to={menu.pathname}>{menu.text}</Link>
                )
            })}
        </div>
    );
}

export default MenuBar;