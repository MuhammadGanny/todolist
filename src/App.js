import React from "react"
import Todoadd from "./components/Todoadd"
import { TodoProvider } from "./TodoContext";
import TodoList from "./components/TodoList";
import "./index.css";

function App() {
  return (
    <TodoProvider>
    <div className="container">
        <div className="todo-container">
          <h1 className="heading">To Do list</h1>
          <Todoadd />
          <TodoList />
        </div>
    </div>
  </TodoProvider>
  );
}

export default App;
