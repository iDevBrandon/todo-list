import React from "react";
import { useDispatch } from "react-redux";
import { createTodo, updateTodos } from "../../features/todos/todosSlice";
import "./TodoForm.css";

const TodoForm = ({ todoItem, setTodoItem }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoItem.todo.trim() === "") {
      alert("Please enter a todo item");
      return;
    }

    if (todoItem._id) {
      dispatch(updateTodos(todoItem));
    } else {
      dispatch(createTodo(todoItem));
    }

    setTodoItem({
      todo: "",
      isComplete: false,
    });
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Please add a todo item"
          value={todoItem.todo}
          onChange={(e) => setTodoItem({ ...todoItem, todo: e.target.value })}
        />
        <button className="create-button" type="submit" onClick={handleSubmit}>
          {todoItem._id ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
