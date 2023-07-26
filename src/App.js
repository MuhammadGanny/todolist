import React from "react"
import Button from "./components/Button"
import { TodoProvider } from "./TodoContext";
import TodoList from "./components/TodoList";

function App() {
  return (
    <TodoProvider>
    <div className="App">
      <Button />
      <TodoList />
    </div>
  </TodoProvider>
  );
}

export default App;
