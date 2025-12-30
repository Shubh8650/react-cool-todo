import React from "react";
import "../styles/TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({ filteredTodoList, handleDelete, handleUpdate }) => {
  return (
    <>
      {filteredTodoList.length > 0 && (
        <div className="list-container">
          {filteredTodoList.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default React.memo(TodoList);
