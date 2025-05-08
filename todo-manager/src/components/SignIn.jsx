import { useState } from 'react';

import '../assets/signin.css';
import { loginUser } from '../services/apiService';
import { errorAlert, successAlert } from '../services/toastUtils';

function SignIn({ setIsLogin }) {
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");

    const loginHandler = async () => {
        const user = {
            id: id,
            pwd: pwd
        };

        const result = await loginUser(user);

        if (result == 'success') {
            successAlert("로그인에 성공하였습니다.");
            // 로그인 성공 시 투두리스트 페이지로 이동
            setIsLogin(true);
            // 브라우저 저장 공간에 로그인 여부 저장
            localStorage.setItem("logined", true);
        }
        else errorAlert("로그인에 실패하였습니다.");
    }

    return (
        <>
            <div className="signinForm">
                <div className="form">
                    <h2 id="title">TODO<br />MANAGER</h2>
                    <input type="text" placeholder="아이디" onChange={(e) => setId(e.target.value)} /> <br />
                    <input type="password" placeholder="비밀번호" onChange={(e) => setPwd(e.target.value)} /> <br />
                    <button onClick={loginHandler}>로그인</button> <br />
                    <a href="">회원가입</a>
                </div>
            </div>
        </>
    );

}

export default SignIn;