import { Link } from "react-router-dom";
import Card from "../../components/card/Card";
import Input from "../../components/input/Input";
import Logo from "../../components/logo/Logo";

import './login.css';

export default function Login() {
    return (
        <Card>
            <Logo className={"f-blue"} multiple big />
            
            <Input type="text" placeholder="아이디" />
            <Input type="password" placeholder="비밀번호" />
            <Input type="button" value="로그인" className="btn btn-blue" />

            <Link to={"/signup"} className="btn btn-white">회원가입</Link> 
        </Card>
    )
}