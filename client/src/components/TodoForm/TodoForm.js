import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../../features/todos/todosSlice";
import "./TodoForm.css";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    dispatch(createTodo());
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="할 일을 추가해 주세요"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="create-button" type="submit" onClick={handleSubmit}>
          추가
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
