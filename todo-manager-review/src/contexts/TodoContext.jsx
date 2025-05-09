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

        setTodos([...todos, todo]);
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