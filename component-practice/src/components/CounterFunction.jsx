import { useState } from 'react';
import { useEffect } from 'react';

// 함수형 컴포넌트
// => 상태, 생명주기를 훅을 통해서 관리한다
function CounterFunction(){
    // * 상태 훅 : useState
    const [count, setCount] = useState(0);
    // => 컴포넌트의 상태(state)를 변경하자 할 때
    //      무조건 setState를 통해서 업데이트 해야한다
    // =>   업데이트를 하는 과정에서 상태값을 직접 수정할 수 없음

    // * 생명주기 : useEffect
    // - 처음 렌더링 된 시점
    useEffect(()=>{
        console.log("componentDidMount###");
    },[])

    // - 상태가 변경될 때마다
    useEffect(()=> {
        console.log("componentDidUpdate###");
    },[count])
    const addCount = () => setCount(count + 1);
    
    return (
        <div>
            <h2>함수형 컴포넌트</h2>
            <p>Count : {count}</p>
            <button onClick={addCount}>+</button>
        </div>
    );
};

export default CounterFunction;