
function PhoneInput(){
    return (
        <div>
            <label>이름</label>
            <input type="text" />
            <label>연락처</label>
            <input type="tel" />
            <input type="button" value="추가"/>
        </div>
    );
}

export default PhoneInput;