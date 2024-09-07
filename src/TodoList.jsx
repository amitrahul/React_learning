import TodoItem from "./TodoItem";
function TodoList({ todos }) {
  //   const TodoListdata = todos.map((todo) => (
  //     <li key={todo.data}>{todo.data}</li>
  //   ));

  const todoListArr = todos.map((todo) => (
    <TodoItem item={todo.data} id={todo.id} />
  ));
  return (
    <ul>
      {/* method1 to render array list data */}
      {/* {todos.map((todo) => (
        <li key={todo.id}>{todo.data}</li>
      ))} */}

      {/* method 2 to render array list data */}
      {/* {TodoListdata} */}

      {/* {todos.map((todo, i) => (
        <li key={i}>{todo}</li>
      ))} */}

      {/* render list of array item by direclty calling the array
      through this way also we can display the all array item on dom.
      */}
      {todoListArr}
    </ul>
  );
}
export default TodoList;
