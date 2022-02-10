import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { fetchTodos } from "./features/todos/todosSlice";

function App() {
  const dispatch = useDispatch();
  const [todoItem, setTodoItem] = useState({
    todo: "",
    isComplete: false,
  });

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>My Task</h1>
      <TodoForm todoItem={todoItem} setTodoItem={setTodoItem} />
      <TodoList setTodoItem={setTodoItem} />
    </div>
  );
}

export default App;
