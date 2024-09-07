function TodoList({ todos }) {
  //   const TodoListdata = todos.map((todo) => (
  //     <li key={todo.data}>{todo.data}</li>
  //   ));
  return (
    <ul>
      {/* method1 to render array list data */}
      {/* {todos.map((todo) => (
        <li key={todo.id}>{todo.data}</li>
      ))} */}

      {/* method 2 to render array list data */}
      {/* {TodoListdata} */}

      {todos.map((todo, i) => (
        <li key={i}>{todo}</li>
      ))}
    </ul>
  );
}
export default TodoList;
