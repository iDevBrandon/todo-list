import React from "react";
import { useSelector } from "react-redux";
import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList = ({ setTodoItem }) => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div>
      <h1>Total number of your todos: {todos.length}</h1>
      {todos.map((todo, _id) => (
        <TodoListItem key={_id} todo={todo} setTodoItem={setTodoItem} />
      ))}
    </div>
  );
};

export default TodoList;
