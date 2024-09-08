// const handleClick = ({ item }) => {
//   alert(item);

import { useState } from "react";
import "./TodoItem.css";
// };
const TodoItem = ({ item, deleteTodoItem, editTodoItem }) => {
  //   const [isFinished, setIsFinished] = useState(false);
  const [isEditting, setIsEditting] = useState(false);
  const [newTodoData, setNewTodoData] = useState(item);
  return (
    /* adding parenthesis {} in callback function of onClick to wite multiple
    code in it. */

    /*  <li
      key={id}
      onClick={(e) => {
        console.log(e);
        handleClick({ item });
      }}
    >
      {item}
    </li> */

    // no need to use parenthesis if we write single line code in callback function.
    // <li key={id} onClick={(e) => handleClick({ item })}>
    //   {item}
    // </li>
    <div className="todoItem-wrapper">
      <li>
        {/* <span className={isFinished ? "todo_done" : "todo_not_done"}>
          {item}{" "}
        </span> */}
        {isEditting ? (
          <input
            type="text"
            value={newTodoData}
            onChange={(e) => setNewTodoData(e.target.value)}
          />
        ) : (
          <span>{newTodoData}</span>
        )}
      </li>
      {/* <button onClick={() => setIsFinished(!isFinished)}>
        {isFinished ? "Redo" : "done"}
      </button> */}
      <button onClick={() => deleteTodoItem()}>Done</button>
      <button
        onClick={() => {
          setIsEditting(!isEditting);
          editTodoItem(newTodoData);
        }}
      >
        {isEditting ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default TodoItem;
