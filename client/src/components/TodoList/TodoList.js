import React from "react";
import { useSelector } from "react-redux";
import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);
  return (
    <div>
      {todos.map((todo, _id) => (
        <TodoListItem key={_id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
