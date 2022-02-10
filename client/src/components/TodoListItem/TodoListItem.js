import React from "react";
import { RiDeleteBin2Fill, RiEdit2Fill } from "react-icons/ri";
import "./TodoListItem.css";

const TodoListItem = ({ todo }) => {
  return (
    <div className="todo-item">
      <h2 className="todo-text">{todo.todo}</h2>
      <button className="remove">
        <RiDeleteBin2Fill />
      </button>
      <button className="edit">
        <RiEdit2Fill />
      </button>
    </div>
  );
};

export default TodoListItem;
