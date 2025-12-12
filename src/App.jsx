import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";
import { useCallback, useState } from "react";

const colors = ["#ACDDDE", "#F7D8BA", " #FAD2D9", "#534C73", "#557979"];

function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = useCallback((text) => {
    let col = Math.floor(Math.random() * colors.length);
    setTodoList((prev) => [
      ...prev,
      { id: Date.now(), text, colour: colors[col] },
    ]);
  }, []);

  const handleDelete = useCallback(
    (id) => {
      const filteredList = todoList.filter((item) => item.id !== id);
      setTodoList(filteredList);
    },
    [todoList]
  );

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
        <TodoList todoList={todoList} handleDelete={handleDelete} />
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
