import { useEffect, useState } from "react";

export default function BasicPractice() {

    const [complexResult, setComplexResult] = useState();

    const result1 = () => {
        return "HIIIII";
    }

    // async : 비동기 함수를 정의
    const result2 = async() => {
        let total = 0;

        // await : async 함수 내에서 사용
        //          해당 함수 작업을 기다린 후 결과를 반환 -> 코드가 순차적으로 실행됨
        await new Promise(resolve =>
            setTimeout(() => {
                console.log("setTimeout 동작 @@ 5초 경과");
                resolve();
            }, 5 * 1000)
        );
        // resolve : Promise가 성공적으로 완료되었을 때 호출되는 함수
        //           완료 후 then() 또는 await 작업이 실행됨

        for (let i = 0; i <= 10000; i++) {
            total += i;
        }
        return total;
    }

    // 컴포넌트가 렌더링 되었을 때 (Mounting)
    useEffect(()=>{
        const result = result2();
        setComplexResult(result);
    },[]);
    return (
        <>
            <h1>Basic Practice</h1>
            <h3>함수 결과 확인</h3>
            <p>{result1()}</p>
            <p>{complexResult}</p>
        </>
    );
}