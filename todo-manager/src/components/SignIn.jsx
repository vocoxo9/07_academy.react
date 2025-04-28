import '../assets/signin.css';

function SignIn() {

    return (
        <>
            <div className="signinForm">
                <form action="">
                    <h2 id="title">TODO<br />MANAGER</h2>
                    <input type="text" name="id" id="id" placeholder="아이디" /> <br />
                    <input type="text" name="pwd" id="pwd" placeholder="비밀번호" /> <br />
                    <button>로그인</button> <br />
                    <a href="">회원가입</a>
                </form>
            </div>
        </>
    );

}

export default SignIn;