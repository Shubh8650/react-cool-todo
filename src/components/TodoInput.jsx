import React from "react";
import { useState } from "react";
import "../styles/TodoInput.css";
import { MdAdd } from "react-icons/md";
// import { IoSearch } from "react-icons/io5";

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");

  console.log("todo-input rerendered");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    if (text.trim().length > 0) {
      addTodo(text);
      setText("");
    } else {
      alert("Please enter the text to the Todo..!");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <>
      <div className="todo-input">
        <input
          onChange={handleChange}
          placeholder="Add your task.."
          type="text"
          value={text}
          onKeyDown={handleKeyDown}
        />
        <button className="add" onClick={handleAdd}>
          <MdAdd size={24} color="white" />
        </button>
        {/* <button className="search" onClick={handleSearch}>
          <IoSearch size={24} color="white" />
        </button> */}
      </div>
    </>
  );
};

export default React.memo(TodoInput);
