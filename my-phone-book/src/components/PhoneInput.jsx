import { useContext, useState } from 'react';
import PhoneContext from '../contexts/PhoneContext';

// function PhoneInput({ addPhone }) {
function PhoneInput() {
    // 3. 전역 상태 사용 선언
    const { addPhone } = useContext(PhoneContext);

    // 상태 관리 훅 : useState
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const clickAddButton = () => {
        // 이름, 연락처 출력
        // alert(`${name} : ${phone}`);
        addPhone({name: name, number: phone});

        // 이름, 연락처 초기화 --> 각 상태를 빈값으로 업데이트
        setName('');
        setPhone('');
    }

    return (
        <div>
            {/* for -> htmlFor */}
            <label htmlFor="name">이름</label>
            <input type="text" id="name" value={name} 
                   onChange={(e)=>{ setName(e.target.value) }} />

            <label htmlFor="phone">연락처</label>
            <input type="tel" id="phone" value={phone}
                   onChange={(e)=>{ setPhone(e.target.value) }} />

            <input type="button" value="추가" onClick={clickAddButton} />
        </div>
    )
}

export default PhoneInput;