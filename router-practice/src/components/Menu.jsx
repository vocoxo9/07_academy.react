import { Link } from "react-router-dom";


function Menu(){

    return(
        <div style={{padding : '2rem', textAlign : 'center'}}>
            <Link to="/">홈</Link> <br/>
            <Link to="/menu/1">메뉴1</Link> <br/>
            <Link to="/menu/2">메뉴2</Link>
        </div>
    );
}

export default Menu;