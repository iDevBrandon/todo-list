import React from "react";
import { RiDeleteBin2Fill, RiEdit2Fill } from "react-icons/ri";
import { deleteTodos } from "../../features/todos/todosSlice";
import "./TodoListItem.css";
import { useDispatch } from "react-redux";

const TodoListItem = ({ todo, setTodoItem }) => {
  const dispatch = useDispatch();

  const handleUpdate = () => {
    setTodoItem({ ...todo });
  };

  const handleDelete = (_id) => {
    dispatch(deleteTodos(_id));
    // refresh the page
    window.location.reload();
  };

  return (
    <div className="todo-item">
      <h2 className="todo-text">{todo.todo}</h2>
      <button className="remove" onClick={() => handleDelete(todo._id)}>
        <RiDeleteBin2Fill />
      </button>
      <button className="edit" onClick={handleUpdate}>
        <RiEdit2Fill />
      </button>
    </div>
  );
};

export default TodoListItem;
