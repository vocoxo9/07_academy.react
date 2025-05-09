import { useContext } from "react";
import Input from "../input/Input";
import { TodoContext } from "../../contexts/TodoContext";

export default function TodoItem(data) {
    const { todos, changeTodos } = useContext(TodoContext);
    const completionHandler = () => {
        
        const updateData = {...data, isCompleted: true};
        reassembleTodos(updateData);
    }

    const deletionHandler = () => {
        const updateData = {...data, isDeleted: true};
        reassembleTodos(updateData);
    }

    const reassembleTodos = (updateData) => {
        const copyList = [...todos];

        delete updateData.index;
        copyList[data.index] = updateData;

        changeTodos(copyList);
    }


    return (
        <div className="todo-list">
            <span>{data.content}</span>
            <div className="todo-btns">
                <Input type="button" value="v" className="todo-btn todo-btn-sm btn-green" onClick={completionHandler} />
                <Input type="button" value="x" className="todo-btn todo-btn-sm btn-red" onClick={deletionHandler} />
            </div>
        </div>
    )
}