import React, { useEffect, useRef, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import "../styles/TodoItems.css";

const TodoItem = ({ todo, handleDelete, handleUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const inputRef = useRef("");

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleEdit = (todo) => {
    setIsEditing(true);
    setCurrentText(todo.text);
  };

  const handleSave = (e) => {
    if (e.key === "Enter") {
      handleUpdate(todo.id, currentText )
      setIsEditing(false);
    }
  };
  return (
    <div className="list" style={{ background: todo.colour }}>
      {isEditing ? (
        <input
          ref={inputRef}
          type="text"
          value={currentText}
          onChange={(e) => setCurrentText(e.target.value)}
          onKeyDown={(e) => handleSave(e)}
        />
      ) : (
        <p>{todo.text}</p>
      )}

      <div className="action-btn">
        <button onClick={() => handleEdit(todo)} className="edit-list">
          <MdEdit size={26} color="white" />
        </button>
        <button onClick={() => handleDelete(todo.id)} className="delete-list">
          <MdDeleteOutline size={26} color="white" />
        </button>
      </div>
    </div>
  );
};

export default React.memo(TodoItem);
