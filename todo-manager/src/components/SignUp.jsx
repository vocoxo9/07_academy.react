import { useState } from 'react';
import '../assets/signup.css';
import { checkId, sendEmail, signupUser, verifyEmail } from '../services/apiService';
import { toast } from 'react-toastify';
import { errorAlert, errorSweetAlert, successAlert, successSweetAlert } from '../services/toastUtils';
import SignIn from './SignIn';
import { Route } from 'react-router-dom';

function SignUp() {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const [nickname, setNickname] = useState("");


    const sendHandeler = async () => {
        // alert(`입력된 이메일 : ${email}`);
        const result = await sendEmail(email);
        console.log(result);
        alert("인증코드가 발송되었습니다.");
    }

    const verifyHandler = async () => {
        const result = await verifyEmail(email, code);
        console.log(result);
        alert("이메일 인증이 완료되었습니다.");
    }

    const checkHandler = async () => {
        const result = await checkId(id);
        console.log(result);
        if (result == 'NNNNN') {
            //alert("이미 사용 중인 아이디입니다.");
            // toast("이미 사용 중인 아이디입니다.", {position : 'top-center'});    => 공통적으로 사용하는 부분 묶기
            errorAlert("이미 사용 중인 아이디입니다.");
            // errorSweetAlert("이미 사용 중인 아이디입니다.");
        } else {
            //alert("사용 가능한 아이디입니다!");
            successAlert("사용 가능한 아이디입니다.");
            // successSweetAlert("사용 가능한 아이디입니다.");
        }
    }

    const signupHandler = async() => {
        // 입력된 정보를 객체로 담아 회원 가입 요청
        const user = {
            // 필드명 : state변수명
            id : id,
            pwd : pwd,
            nickname : nickname,
            email : email
        }
        const result = await signupUser(user);
        console.log(result);
        if(result == 'success') {
            successAlert("회원가입이 완료되었습니다!");
            
            <Route path="/signin" element={<SignIn/>} />
        } else { errorAlert("회원가입에 실패했습니다."); }

        setId('');
        setPwd('');
        setNickname('');
        setEmail('');
        // setCode('');
    }

    return (
        <div className="signupForm">
            <h2>TODO MANAGER</h2>
            <input type="text" placeholder="아이디" className="short" onChange={(e) => setId(e.target.value)} />
            <button className="check" onClick={checkHandler}>중복체크</button><br />

            <input type="password" placeholder="비밀번호" onChange={(e) => setPwd(e.target.value)}/> <br />
            <input type="text" id="nickname" placeholder="닉네임" onChange={(e) => setNickname(e.target.value)}/> <br />

            <input type="mail" placeholder="이메일" className="short" onChange={e => setEmail(e.target.value)} />
            <button className="check" onClick={sendHandeler}>인증</button>

            <input type="text" className="short" placeholder='인증코드' onChange={e => setCode(e.target.value)} />
            <button className="check" onClick={verifyHandler}>확인</button>

            <hr />
            <button onClick={signupHandler}>회원가입</button> <br />
        </div>
    );

}

export default SignUp;