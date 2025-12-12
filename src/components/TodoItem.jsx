import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import "../styles/TodoItems.css";

const TodoItem = ({ todo, handleDelete }) => {
  console.log("todo-item rerendered");
  return (
    <div className="list" style={{ background: todo.colour }}>
      <p>{todo.text}</p>
      <button onClick={() => handleDelete(todo.id)} className="delete-list">
        <MdDeleteOutline size={26} color="white" />
      </button>
    </div>
  );
};

export default React.memo(TodoItem);
