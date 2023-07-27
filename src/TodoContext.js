import React, { createContext, useState } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([{ id: Date.now(), text ,completed:false},...todos]);
  };

  const updateTodo = (id, newText,flag) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText,completed:flag } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider value={ {todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };