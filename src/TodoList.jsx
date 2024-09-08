import { useState } from "react";
import TodoItem from "./TodoItem";
function TodoList({ todos }) {
  //   const TodoListdata = todos.map((todo) => (
  //     <li key={todo.data}>{todo.data}</li>
  //   ));
  /* 
  const todoListArr = todos.map((todo) => (
    <TodoItem item={todo.data} key={todo.id} />
  )); */

  const [todoItems, setTodoItems] = useState(todos);
  const [todoInputText, setTodoInputText] = useState("");

  const handleTodoText = (e) => {
    setTodoInputText(e.target.value);
  };
  const handleTodoList = () => {
    setTodoItems([
      ...todoItems,
      { data: todoInputText, id: Math.random() * 10 },
    ]);
    setTodoInputText("");
  };
  /* implement filtered todo item */
  const handleDeleteTodoItem = (id) => {
    const filteredTodo = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(filteredTodo);
  };
  /* Implement edit function */
  function handleEditTodoItem(id, newTodo) {
    const updatedTodoItem = todoItems.map((todo) => {
      if (todo.id === id) todo.data = newTodo;
      return todo;
    });
    setTodoItems(updatedTodoItem);
  }
  return (
    <>
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

      {/* {todoListArr} */}
      <input type="text" value={todoInputText} onChange={handleTodoText} />
      <button onClick={handleTodoList}>add todo Item</button>
      <ul>
        {todoItems.map((todo) => (
          <TodoItem
            item={todo.data}
            key={todo.id}
            deleteTodoItem={() => handleDeleteTodoItem(todo.id)}
            editTodoItem={(newtodoData) =>
              handleEditTodoItem(todo.id, newtodoData)
            }
          />
        ))}
      </ul>
    </>
  );
}
export default TodoList;
