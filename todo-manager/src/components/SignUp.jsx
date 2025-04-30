import { useState } from 'react';
import '../assets/signup.css';
import { sendEmail, verifyEmail } from '../services/apiService';

function SignUp() {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");


    const sendHandeler = async () => {
        // alert(`입력된 이메일 : ${email}`);
        const result = await sendEmail(email);
        console.log(result);
        alert("인증코드가 발송되었습니다.");
    }

    const verifyHandler = async() => {
        const result = await verifyEmail(email, code);
        console.log(result);
        alert("이메일 인증이 완료되었습니다.");
    }

    return (
        <div className="signupForm">
            <h2>TODO MANAGER</h2>
            <input type="text" placeholder="아이디" className="short" />
            <button className="check">중복체크</button><br />

            <input type="text" placeholder="비밀번호" /> <br />
            <input type="text" id="nickname" placeholder="닉네임" /> <br />

            <input type="mail" placeholder="이메일" className="short" onChange={e => setEmail(e.target.value)} />
            <button className="check" onClick={sendHandeler}>인증</button>

            <input type="text" className="short" placeholder='인증코드' onChange={e=>setCode(e.target.value)}/>
            <button className="check" onClick={verifyHandler}>확인</button>

            <hr />
            <button>회원가입</button> <br />
        </div>
    );

}

export default SignUp;