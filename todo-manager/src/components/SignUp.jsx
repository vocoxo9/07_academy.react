import '../assets/signup.css';

function SignUp() {

    return (
            <div className="signupForm">
                <form action="">
                    <h2>TODO MANAGER</h2>
                    <input type="text" name="id" id="id" placeholder="아이디" className="short" /> <button className="check">중복체크</button><br />
                    <input type="text" name="pwd" id="pwd" placeholder="비밀번호" /> <br />
                    <input type="text" name="pwd" id="pwd" placeholder="닉네임" /> <br />
                    <input type="text" name="pwd" id="pwd" placeholder="이메일" className="short" /> <button className="check">인증</button>
                    <hr />
                    <button>회원가입</button> <br />
                </form>
            </div>
    );

}

export default SignUp;