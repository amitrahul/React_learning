// const handleClick = ({ item }) => {
//   alert(item);

import { useState } from "react";
import "./TodoItem.css";
// };
const TodoItem = ({ item }) => {
  const [isFinished, setIsFinished] = useState(false);
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
        <span className={isFinished ? "todo_done" : "todo_not_done"}>
          {item}{" "}
        </span>
      </li>
      <button onClick={() => setIsFinished(!isFinished)}>
        {isFinished ? "Redo" : "done"}
      </button>
    </div>
  );
};

export default TodoItem;
