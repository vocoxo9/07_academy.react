import '../assets/todo.css';
import List from './common/List';

function TodoList() {

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
                    <input type="text" name="todo" id="todo" placeholder='할 일 입력...'/> <button id="addTodo">+</button>
                    <hr />
                </div>
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
                <List />
            </div>
        </>
    );

}

export default TodoList;