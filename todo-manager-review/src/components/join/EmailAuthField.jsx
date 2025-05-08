import { useState } from "react";
import { sendEmail, verifyEmail } from "../../services/apiService";
import Input from "../input/Input";
import { errorAlert, successAlert } from "../../services/toastUtils";

export default function EmailAuthField({ email, code, setEmail, setCode, style }) {
    const [isEmailDisabled, setIsEmailDisabled] = useState(false);
    const [isCodeDisabled, setIsCodeDisabled] = useState(true);

    const sendHandler = async () => {
        // alert(`입력된 이메일 : ${email} `);
        try {
            const result = await sendEmail(email);
            console.log(result);
            if (result === "ok") {
                successAlert("인증 코드가 발송되었습니다. 확인 후 입력해주세요.");
                setIsCodeDisabled(false);
            }
        } catch (e) {
            errorAlert(e);
        }
    }

    const verifyHandler = async () => {
        try {
            const result = await verifyEmail(email, code);
            console.log(result);
            if (result === "success") {
                successAlert("인증되었습니다.");
                setIsEmailDisabled(true);
                setIsCodeDisabled(true);
            } else {
                errorAlert("잘못된 인증코드입니다. 다시 확인해주세요.");
            }
        } catch (e) {
            errorAlert(e);
        }
    }
    return (
        <>
            <Input type="mail" placeholder="이메일" style={style}
                onChange={e => setEmail(e.target.value)} disabled={isEmailDisabled} />
            <Input type="button" value="인증" className="btn-white btn-sm" onClick={sendHandler} disabled={isEmailDisabled} />

            <Input type="text" placeholder="인증코드" style={style}
                onChange={e => setCode(e.target.value)} disabled={isCodeDisabled} />
            <Input type="button" value="확인" className="btn-white btn-sm"
                onClick={verifyHandler} disabled={isCodeDisabled} />
        </>
    )
}