import { useState } from "react";
import Card from "../../components/card/Card";
import Input from "../../components/input/Input";
import Logo from "../../components/logo/Logo";
import EmailAuthField from "../../components/join/EmailAuthField";
import { registUser } from "../../services/apiService";
import { errorAlert, successAlert } from "../../services/toastUtils";
import IdCheckField from "../../components/join/IdCheckField";

const shortInputStyle = { width: '290px', marginRight: '10px' };
export default function Join() {
    const initUser = {
        userId: '',
        userPwd: '',
        nickname: '',
        email: ''
    };
    const [user, setUser] = useState(initUser);

    const [code, setCode] = useState("");

    const setEmail = ( email ) => {
        setUser({...user, email: email });
    }
    const setId = ( id ) => {
        setUser({...user, userId : id });
    }
    const setPwd = ( pwd ) => {
        setUser({...user, userPwd : pwd });
    }
    const setNickname = (nickname) => {
        setUser({...user, nickname: nickname });
    }

    const registHandler = async () => {
        // 입력된 정보를 담아 회원 가입 요청
        const result = await registUser(user);
        if (result === 'success') {
            successAlert("회원가입에 성공했습니다.");
            // 로그인 페이지로 이동!
        } else {
            errorAlert("회원가입에 실패했습니다.");
        }
    }

    return (
        <Card>
            <Logo className={"f-blue"} />
            {/* 아이디 입력/중복체크 버튼을 컴포넌트로 분리 */}
            <IdCheckField style={shortInputStyle} id={user.userId} setId={setId} />

            <Input type="password" placeholder="비밀번호" onChange={e => setPwd(e.target.value)} />
            <Input type="text" placeholder="닉네임" onChange={e => setNickname(e.target.value)} />
            
            {/* 이메일 입력/인증버튼/인증코드 입력/확인버튼을 컴포넌트로 분리 */}
            <EmailAuthField email={user.email} setEmail={setEmail} code={code} setCode={setCode} style={shortInputStyle} />

            <Input type="button" value="회원가입" className="btn btn-blue" onClick={registHandler} />
        </Card>
    )
}