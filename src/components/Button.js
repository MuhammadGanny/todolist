import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";

const Button = () => {
  const { addTodo } = useContext(TodoContext);
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    if (todoText.trim() !== "") {
      addTodo(todoText);
      setTodoText(""); 
    } else {
      alert("Todo text cannot be empty.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter your todo"
        className="bttext"
      />
      <button onClick={handleAddTodo} className="addbutton">
        Add Todo
      </button>
    </div>
  );
};

export default Button;