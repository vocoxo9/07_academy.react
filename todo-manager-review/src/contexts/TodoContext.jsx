import { createContext, useEffect, useState } from "react"

export const TodoContext = createContext();

const sample = [
    { id: 1, content: '스프링과 친해지기', isCompleted: false, isDeleted: false },
    { id: 2, content: '스프링과 친해지기', isCompleted: false, isDeleted: false },
    { id: 3, content: '스프링과 친해지기', isCompleted: false, isDeleted: false },
    { id: 4, content: '스프링과 친해지기', isCompleted: false, isDeleted: false },
];

export function TodoProvider({ children }) {
    const [todos, setTodos] = useState(sample);

    const addTodo = (todo) => {
        const addData = todo;

        // 추후 통신 후 제거될 수 있음
        addData.id = todos.length;     
        addData.isCompleted = false;
        addData.isDeleted = false;
        setTodos([...todos, addData]);
    }

    const changeTodos = (todos) => {
        setTodos(todos);
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo, changeTodos }}>
            {children}
        </TodoContext.Provider>
    )
}