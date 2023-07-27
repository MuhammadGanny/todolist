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

    const handleToggleComplete = () => {
        setEditMode(false);
        updateTodo(todo.id, editedText, !todo.completed); 
    };
  
    return (
      <li>
        <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggleComplete}
            className="completed"
        />
        {console.log("todo.completed", todo)}
        {editMode ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            className="edittxt"
          />
        ) : (
          <span className={` ${todo.completed && "completed" }`}>{todo.text}</span>
        )}
  
        {editMode ? (
          <button onClick={handleUpdateTodo} className="savebutton">Save</button>
        ) : (
          <button onClick={() => setEditMode(true)} className="editbutton">Edit</button>
        )}
  
        <button onClick={handleDeleteTodo} className="deletebutton">Delete</button>
      </li>
    );
  };
  
  export default TodoItem;
