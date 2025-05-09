import { useContext, useEffect, useState } from 'react';
import '../assets/todo.css';
// import List from './common/List';
import { getTodoList, insertTodo } from '../services/apiService';

function TodoList() {
    // const {todos, changeTodos} = useContext(TodoContext);
    const [content, setContent] = useState("");

    const initailTodos = async() => {
        const list = await getTodoList();
        console.log(list);

    }

    // 현재 컴포넌트가 최초 렌더링 되었을 때 목록 조회 요청
    useEffect(()=>{
        initailTodos();
    }, []);

    const clickHandler = async () =>{
        const result = await insertTodo(content);
        console.log(result);
    }

    return (
        <>
            <div className="todo-left">
                <h1>TODO MANAGER</h1>
                <div className="buttons">
                    <button>진행 중</button> <br />
                    <button>완료</button> <br />
                    <button>삭제</button> <br />
                </div>
            </div>
            <div className="todo-right">
                <div className="todo-right-top">
                    <input type="text" name="todo" id="todo" placeholder='할 일 입력...' onChange={(e)=>setContent(e.target.value)} /> <button id="addTodo" onClick={clickHandler}>+</button>
                    <hr />
                </div>
                {/* <List />
                <List />
                <List />
                <List />
                <List />
                <List />
                <List /> */}
            </div>
        </>
    );

}

export default TodoList;