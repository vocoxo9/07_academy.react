
import { useState, useEffect } from 'react';


function App() {

    const [now, setNow] = useState(new Date());
  // 1초마다 now 상태를 현재 날짜시간으로 변경 -> setInterval(함수, 시간) => 시간마다 함수내용을 실행시켜줌
  // setTimeout(함수, 시간) : 일정 시간 뒤에 함수를 실행
    useEffect(()=> {
        const timer = setInterval(()=>{
            setNow(new Date());
        },1*1000);
        
        return () => {
          // 컴포넌트가 소멸될 때 타이머를 정리 --> clearInterval(대상타이머)
          clearInterval(timer);
        }

    }, []);
    // => 처음 렌더링 되었을 때만 실행(Mounting 시에만)
    return (
        <div>
            <h1>현재 시간</h1>
            <p>날짜{now.toLocaleDateString()}</p>
            <p>시간{now.toLocaleTimeString()}</p>
        </div>
    );
}

export default App;
