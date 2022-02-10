import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../features/todos/todosSlice";
import "./TodoForm.css";

const TodoForm = () => {
  const [todoItem, setTodoItem] = useState({
    todo: "",
    isComplete: false,
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoItem.todo.trim() === "") {
      alert("Please enter a todo item");

      return;
    }

    dispatch(createTodo(todoItem));
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
          placeholder="할 일을 추가해 주세요"
          value={todoItem.todo}
          onChange={(e) => setTodoItem({ ...todoItem, todo: e.target.value })}
        />
        <button className="create-button" type="submit" onClick={handleSubmit}>
          추가
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
