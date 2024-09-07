import TodoList from "./TodoList";
const Todo = () => {
  const todos = [
    { id: 1, data: "todo 1" },
    { id: 2, data: "todo 2" },
    { id: 3, data: "todo 3" },
  ];
  return (
    <>
      <input type="text" placeholder="new todo ..." />
      <br />
      <button>Add todo</button>
      <TodoList todos={todos} />
    </>
  );
};

export default Todo;
