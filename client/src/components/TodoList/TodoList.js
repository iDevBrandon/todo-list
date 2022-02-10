import React from "react";
import { useSelector } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);
  return <div>list</div>;
};

export default TodoList;
