import { BiTrash } from "react-icons/bi";

export const TodoList = (props) => {
  const { showTodoList, deleteItem } = props;
  return (
    <ul className="list">
      {showTodoList().map((item) => (
        <li key={item.id} className="list_item">
          {item.title}
          <button onClick={() => deleteItem(item.id)}>
            <BiTrash />
          </button>
        </li>
      ))}
    </ul>
  );
};
