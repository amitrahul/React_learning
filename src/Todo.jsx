import { useState } from "react";
import TodoList from "./TodoList";
const Todo = () => {
  const todos = [
    { id: 1, data: "todo 1" },
    { id: 2, data: "todo 2" },
    { id: 3, data: "todo 3" },
  ];
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <>
      <TodoList todos={todos} />
      <h4>todo working area</h4>
      <input
        type="text"
        placeholder="new todo ..."
        onChange={(e) => setTodoText(e.target.value)}
      />
      <br />
      <button onClick={() => setTodoList([...todoList, todoText])}>
        Add todo
      </button>
      <br />
      {/* <TodoList todos={todoList} /> */}
    </>
  );
};

export default Todo;
