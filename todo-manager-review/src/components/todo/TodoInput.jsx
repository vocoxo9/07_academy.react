import { useContext, useState } from "react";
import Input from "../input/Input";
import { TodoContext } from "../../contexts/TodoContext";

export default function TodoInput() {
    const { addTodo } = useContext(TodoContext);

    const [inputTodo, setInputTodo] = useState('');

    const changeHandler = e => setInputTodo(e.target.value);
    const clickHandler = () => {
        addTodo({ content: inputTodo });
        setInputTodo('');
    }

    return (
        <>
            <Input type="text" className="todo-input" value={inputTodo} onChange={changeHandler} placeholder="할 일 입력" />
            <Input type="button" className="todo-btn todo-btn-plus" value="+" onClick={clickHandler} />
        </>
    )
}