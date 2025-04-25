import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const MenuStyle = styled(Link)`
    background: transparent;
    border-radius: 3px;
    border: 2px solid #BF4F74;
    color: #BF4F74;
    margin: 0 1em;
    padding: 0.25em 1em;
`;

export default function MenuBar({ menuInfo }) {

    return (
        <>
            {menuInfo.map((menu) => {
                return (
                    <Link to={menu.pathname} > {menu.text}</Link>
                )
            })}
        </>
    );


}