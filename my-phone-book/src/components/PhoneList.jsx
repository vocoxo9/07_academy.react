import { useContext } from "react";
import PhoneContext from "../contexts/PhoneContext";

// function PhoneList({ list }) {
function PhoneList() {
    // const [list, setList] = useState([]);
    // 3. 전역 상태 사용 선언
    const { list } = useContext(PhoneContext);

    return (
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>연락처</th>
                </tr>
            </thead>
            <tbody>
                { list.length === 0 && 
                    <tr>
                        <td colSpan={2}>저장된 연락처가 없습니다.</td>
                    </tr>
                }

                { list.map((phone, index)=>(
                    <tr key={'phone_'+index}>
                        <td>{phone.name}</td>
                        <td>{phone.number}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default PhoneList;