import React from "react";
import "../styles/TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, handleDelete }) => {
  console.log("todo-list rerendered");
  return (
    <>
      {todoList.length > 0 && (
        <div className="list-container">
          {todoList.map((todo) => (
            <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} />
          ))}
        </div>
      )}
    </>
  );
};

export default React.memo(TodoList);
