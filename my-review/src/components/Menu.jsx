import { Link } from "react-router-dom";


function Menu(){

    const linkStyle = {border : '1px solid black', backgroundColor : 'black', 
        color : 'white', fontSize : '1.5rem', margin : '3rem', textDecoration : 'none'};

    return(
        <div className="menu" style={{ textAlign : 'center', marginTop : '2rem', marginBottom : '3rem'}}>
            <Link to="/" style={linkStyle}>HOME</Link> 
            <Link to="/timer" style={linkStyle}>타이머</Link>
            <Link to="/count/letters" style={linkStyle}>글자수세기</Link>
        </div>
    );
}

export default Menu;