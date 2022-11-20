import "./App.css";
import { BiTrash } from "react-icons/bi";
import { useTodo } from "./hooks/useTodo";//カスタムフック化
import { InputForm } from "./components/atoms/InputForm";
import { AddTodo } from "./components/organisms/AddTodo";
import { TodoList } from "./components/organisms/TodoList";
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
        {/* todo入力エリア */}
        <AddTodo title={title} handleTodo={handleTodo} handleKeyDown={handleKeyDown} />
        {/* todo検索エリア */}
        <InputForm searchKey={searchKey} handleSearch={handleSearch} />
        {/* todoリスト表示エリア */}
        <TodoList showTodoList={showTodoList} deleteItem={deleteItem}  />
      </div>
    </div>
  );
}

export default App;
