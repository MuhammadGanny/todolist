import React, { useContext ,useState} from "react";
import { TodoContext } from "../TodoContext";


const TodoItem = ({ todo }) => {
    const { deleteTodo, updateTodo } = useContext(TodoContext);
    const [editMode, setEditMode] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);
  
    const handleDeleteTodo = () => {
      deleteTodo(todo.id);
    };
  
    const handleUpdateTodo = () => {
      updateTodo(todo.id, editedText);
      setEditMode(false);
    };
  
    return (
      <li>
        {editMode ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        ) : (
          <span>{todo.text}</span>
        )}
  
        {editMode ? (
          <button onClick={handleUpdateTodo}>Save</button>
        ) : (
          <button onClick={() => setEditMode(true)}>Edit</button>
        )}
  
        <button onClick={handleDeleteTodo}>Delete</button>
      </li>
    );
  };
  
  export default TodoItem;
