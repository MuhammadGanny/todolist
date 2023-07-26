import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";

const TodoItem = ({ todo }) => {
  const { deleteTodo } = useContext(TodoContext);

  const handleDeleteTodo = () => {
    deleteTodo(todo.id);
  };

  return (
    <li>
      <span>{todo.text}</span>
      <button onClick={handleDeleteTodo}>Delete</button>
    </li>
  );
};

export default TodoItem;
