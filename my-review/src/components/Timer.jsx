import { useEffect, useState } from "react";


function Timer() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date());
        }, 1 * 1000);

        return() => {
            clearInterval(timer);
        }
    }, []);
    
    return (
        <div style={{textAlign : 'center', marginTop : '18rem'}}>
            <h1>현재 시간</h1>
            <p>날짜{now.toLocaleDateString()}</p>
            <p>시간{now.toLocaleTimeString()}</p>
        </div>
    );
}

export default Timer;