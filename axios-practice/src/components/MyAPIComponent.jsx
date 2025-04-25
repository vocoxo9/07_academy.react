import { useState } from 'react';
import { getServerInfo, getUserList } from '../services/apiTest';
import MyButton from './MyButton';
import Table from './Table';


const types = ["이름", "나이", "연락처"];

export default function MyAPIComponent() {
    const [data, setData] = useState({list: []});

    const showServerInfo = async () => {
        const result = await getServerInfo();
        setData({...data, r1: result});
    }

    const showUserList = async () => {
        const result = await getUserList();
        setData({...data, list: result});
    }

    return (
        <>
            {/*<button style={{color: 'plum', backgroundColor: 'white'}} onClick={showServerInfo}>서버 정보 조회</button>*/}
            <MyButton clickHandler={showServerInfo} text={"서버 정보 조회"} />
            <p>{data.r1}</p> {/* {r1:result} */}
            <MyButton clickHandler={showUserList} text={"사용자 목록 조회"} />
            <Table typeList={types} dataList={data.list} keyName={"user_"} />
        </>
    )
}