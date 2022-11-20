export const AddTodo = (props) => {
  const { title, handleTodo,handleKeyDown } = props;
  return (
    <label htmlFor="todo">
      <input
        type="text"
        value={title}
        onChange={handleTodo}
        onKeyDown={handleKeyDown}
        placeholder="New Todo"
      />
    </label>
  );
};
