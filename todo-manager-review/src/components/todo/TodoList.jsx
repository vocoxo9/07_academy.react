import { useContext, useEffect } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import TodoItem from "./TodoItem";
import { getTodoList } from "../../services/apiService";

export default function TodoList() {
    const { todos, changeTodos } = useContext(TodoContext);
    
    const initialTodos = async () => {
        const list = await getTodoList();
        console.log(list);
        // 조회된 데이터로 상태 업데이트
        changeTodos(list);
    }

    // 현재 컴포넌트가 최초 렌더링되었을 때 목록 조회 요청
    useEffect(()=>{        
        initialTodos();
    }, []);


    return (
        <>
            {
                todos.map((data, index) => {
                    return (
                        (!data.isCompleted && !data.isDeleted) &&
                        <TodoItem key={"todo_"+index} index={index} {...data} />                        
                    )
                })
            }
        </>
    )
}