import React from "react";
import "../styles/TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({ filteredTodoList, handleDelete }) => {
  console.log("todo-list rerendered");
  return (
    <>
      {filteredTodoList.length > 0 && (
        <div className="list-container">
          {filteredTodoList.map((todo) => (
            <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} />
          ))}
        </div>
      )}
    </>
  );
};

export default React.memo(TodoList);
