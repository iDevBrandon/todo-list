import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { fetchTodos } from "./features/todos/todosSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>My Task</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
