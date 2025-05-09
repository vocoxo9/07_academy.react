import { useState } from "react";
import { Link } from "react-router-dom";

import Card from "../../components/card/Card";
import Input from "../../components/input/Input";
import Logo from "../../components/logo/Logo";

import './login.css';
import { loginUser } from "../../services/apiService";
import { errorAlert, successAlert } from "../../services/toastUtils";

export default function Login({ setIsLogin }) {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');

    const loginHandler = async () => {
        // alert(id + ", " + pwd);
        const result = await loginUser({ userId: id, userPwd: pwd });
        if (result === "success") {
            successAlert("로그인 성공");
            setIsLogin(true);
            // 브라우저 저장공간에 로그인 여부 저장
            localStorage.setItem("logined", true);
        } else errorAlert("로그인 실패");
    }

    return (
        <Card>
            <Logo className={"f-blue"} multiple big />
            
            <Input type="text" placeholder="아이디" onChange={e=>{setId(e.target.value);}} />
            <Input type="password" placeholder="비밀번호" onChange={e=>{setPwd(e.target.value);}} />
            <Input type="button" value="로그인" className="btn btn-blue" onClick={loginHandler} />

            <Link to={"/signup"} className="btn btn-white">회원가입</Link> 
        </Card>
    )
}