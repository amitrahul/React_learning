const TodoItem = ({ item, id }) => {
  return <li key={id}>{item}</li>;
};

export default TodoItem;
