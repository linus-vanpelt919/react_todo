import { useState } from "react";

export const useTodo = () => {
  const Todos = [
    {
      id: 1,
      title: "Todo1",
      completed: false,
    },
    {
      id: 2,
      title: "Todo2",
      completed: false,
    },
    {
      id: 3,
      title: "Todo3",
      completed: false,
    },
  ];
  const [title, setTitle] = useState("");
  const [todo, setTodo] = useState(Todos);
  const [searchKey, setSearchKey] = useState("");
  const getKey = () => Math.random().toString(32).substring(2);

  const handleTodo = (e) => {
    setTitle(() => e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (!e.target.value.match(/\S/g)) return;
      setTodo([
        ...todo,
        { id: getKey(), title: e.target.value, completed: false },
      ]);
      setTitle("");
    }
  };
  const deleteItem = (id) => {
    /* TODO 削除時のアニメーションをつける */
    const newTodo = todo.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
    });
    setTodo(newTodo);
  };
  const handleSearch = (e) => {
    setSearchKey(() => e.target.value);
  };
  const showTodoList = () => {
    if (searchKey) {
      return todo.filter((todo) => {
        // 検索キーワードに部分一致したTodoだけを一覧表示する
        const regexp = new RegExp("^" + searchKey, "i");
        return todo.title.match(regexp);
      });
    } else {
      return todo;
    }
  };

  const states = {
    title,
    todo,
    searchKey,
  };

  const actions = {
    handleTodo,
    handleKeyDown,
    showTodoList,
    handleSearch,
    deleteItem,
  };

  return [states, actions];
};
