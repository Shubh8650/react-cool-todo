import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";
import { useCallback, useMemo, useState } from "react";
import SearchTodo from "./components/SearchTodo";

const colors = ["#ACDDDE", "#F7D8BA", " #FAD2D9", "#534C73", "#557979"];

function App() {
  const [todoList, setTodoList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const addTodo = useCallback(
    (text) => {
      const textMatched = todoList.some(
        (item) => item.text.toLowerCase() === text.toLowerCase()
      );

      if (textMatched) {
        alert("Item already exists!");
        return;
      }

      let col = Math.floor(Math.random() * colors.length);
      setTodoList((prev) => [
        ...prev,
        { id: Date.now(), text, colour: colors[col] },
      ]);
    },
    [todoList]
  );

  const handleDelete = useCallback(
    (id) => {
      const filteredList = todoList.filter((item) => item.id !== id);
      setTodoList(filteredList);
    },
    [todoList]
  );

  const handleUpdate = (id, text) => {
    setTodoList(
      todoList.map((item) => (item.id === id ? { ...item, text } : item))
    );
  };

  // wrapped under use meno as it shpuld not unnessary re-rendered
  const filteredTodoList = useMemo(() => {
    const query = searchText.trim().toLowerCase();
    if (!query) return todoList;
    return todoList.filter((item) => item.text?.toLowerCase().includes(query));
  }, [searchText, todoList]);

  const handleDeleteAll = () => {
    setTodoList([]);
  };

  return (
    <div className="wrapper">
      <div className="heading">
        <h1>Todo List</h1>
      </div>
      <div className="container">
        <TodoInput addTodo={addTodo} />
        <SearchTodo setSearchText={setSearchText} />
        <TodoList
          filteredTodoList={filteredTodoList}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </div>
      {todoList.length > 0 && (
        <button onClick={handleDeleteAll} className="delete-all">
          Delete All
        </button>
      )}
    </div>
  );
}

export default App;
