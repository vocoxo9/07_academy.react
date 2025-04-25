import { useState } from "react";
import { getServerInfo, getUserList } from "../service/apiTest";
import MyButton from "./MyButton";
import Table from "./common/Table";

const types = [
    "이름", "나이", "연락처"
]

export default function MyAPIComponent(){
    const [data, setData] = useState({list : []});
    // const [list, setList] = useState([]);

    const showServerInfo = async() => {
        const result = await getServerInfo();
        setData({...data, r1: result});
        // setData(result);
    }

    const showUserInfo = async() => {
        const result = await getUserList();
        setData({...data, list : result});
    }

    return (
        <>
            <h3>my api</h3>
            <MyButton clickHandler={showServerInfo} text={"서버 정보 조회"}/>
            <p>{data.r1}</p> {/* {r1:result} */}
            <MyButton clickHandler={showUserInfo} text={"유저 정보 조회 "}/>
            <Table typeList={types} dataList={data.list} keyName={"user_"} />
        </>
    );

}