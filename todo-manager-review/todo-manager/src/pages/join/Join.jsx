import Card from "../../components/card/Card";
import Input from "../../components/input/Input";
import Logo from "../../components/logo/Logo";

const shortInputStyle = { width: '290px', marginRight: '10px' };
export default function Join() {

    return (
        <Card>
            <Logo className={"f-blue"} />
            <Input type="text" placeholder="아이디" style={shortInputStyle} />
            <Input type="button" value="중복체크" className="btn-white btn-sm" />
            <Input type="password" placeholder="비밀번호" />
            <Input type="text" placeholder="닉네임" />
            <Input type="mail" placeholder="이메일" style={shortInputStyle} />
            <Input type="button" value="인증" className="btn-white btn-sm" />
            <Input type="button" value="회원가입" className="btn btn-blue" />
        </Card>
    )
}