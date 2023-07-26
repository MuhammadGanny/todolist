import Raect, {useContext} from "react"
import { TodoContext } from "./TodoContext";


const Button = () =>{

    const {addTodo} = useContext(TodoContext);

    const handleAddTodo = ()=>{
        const text = prompt("Enter your todo:")
        if(text){
            addTodo(text)
        }//bad me add the else function to if the string is empty 
    }
    return <button onClick={handleAddTodo} className="addbutton" >Add Todo</button>;
}

export default Button;