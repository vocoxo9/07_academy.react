import TodoInput from "../../components/todo/TodoInput";
import TodoList from "../../components/todo/TodoList";
import { TodoProvider } from "../../contexts/TodoContext";

import './todoPage.css';

export default function TodoPage() {
    return (
        <TodoProvider>
            <div className="todo-page">
                <TodoInput />

                <hr />

                <TodoList />
            </div>
        </TodoProvider>
    )
}