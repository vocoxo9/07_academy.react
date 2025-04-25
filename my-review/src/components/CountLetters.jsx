import { useState } from "react";



function CountLetters(){
    const textStyle = {resize : 'none', width : '40rem', height : '30rem'};
    const [countSpace, setCountSpace] = useState(0);
    const [unCountSpace, setunCountSpace] = useState(0);

    const onInputHandler = (e) => {
        setCountSpace(e.target.value);
    };
    
    return (
        <>
            <div style={{margin : 'auto', textAlign : 'center' }}>
                <textarea style={textStyle} onChange={onInputHandler}>
                </textarea>
                <hr/>
                <h2>공백 포함 {countSpace.length}자</h2>
                <h2>공백 제외 {countSpace.replace(/ /gi, '').length}자</h2>
                <hr/>
                <button type="reset" onClick={()=>{setCountSpace(0)}}>초기화</button>
            </div>
        </>

    );
}

export default CountLetters;