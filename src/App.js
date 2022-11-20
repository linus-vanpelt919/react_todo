import "./App.css";
import { BiTrash } from "react-icons/bi";
import { useState } from "react";
import { useTodo } from "./hooks/useTodo";//カスタムフック化

/* TODO
追加と削除時のアニメーションをつける
isDoneなどのチェック機能をつける
ドラッグして並び替えたい
編集機能を追加したい
*/
function App() {
  const [
    { title, searchKey },
    { handleTodo, handleKeyDown, deleteItem, handleSearch, showTodoList },
  ] = useTodo();

  return (
    <div className="App">
      <div className="todo">
        <h1>Todo List</h1>
        <p>ADD TODO</p>
        <label htmlFor="todo">
          <input
            type="text"
            value={title}
            onChange={handleTodo}
            onKeyDown={handleKeyDown}
            placeholder="New Todo"
          />
        </label>
        <label htmlFor="searchKey">
          <input
            type="text"
            value={searchKey}
            onChange={handleSearch}
            placeholder="Search Keyword"
          />
        </label>
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
      </div>
    </div>
  );
}

export default App;
