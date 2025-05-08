import { checkId } from "../../services/apiService";
import { errorAlert, successAlert } from "../../services/toastUtils";
import Input from "../input/Input";

export default function IdCheckField({ style, id, setId }) {

    const checkHandler = async () => {
        // alert("중복체크 버튼이 클릭됨!");
        // alert(`입력된 값: ${id}`);

        const result = await checkId(id);
        if (result === 'NNNNY') successAlert("사용 가능한 아이디입니다.");
        else errorAlert('이미 사용중인 아이디입니다.');
    }

    return (
        <>
            <Input type="text" placeholder="아이디" style={style}
                onChange={(e) => setId(e.target.value)} />

            <Input type="button" value="중복체크" className="btn-white btn-sm"
                onClick={checkHandler} />
        </>
    )
}