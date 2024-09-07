const handleClick = ({ item }) => {
  alert(item);
};
const TodoItem = ({ item, id }) => {
  return (
    <li
      key={id}
      onClick={(e) => {
        console.log(e);
        handleClick({ item });
      }}
    >
      {item}
    </li>
  );
};

export default TodoItem;
