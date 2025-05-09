import { useContext } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
    const { todos } = useContext(TodoContext);

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