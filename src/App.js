import React, {useState, useEffect} from "react"
import './App.css';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {db} from "./firebase_config";
import firebase from "firebase";
import TodoListItem from "./Todo";


function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");


  useEffect(() => {
   getTodos();
  }, []);
  
const getTodos = () => {
 db.collection("todos").onSnapshot((querySnapshot) => {
     setTodos(
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        todo: doc.data().todo,
        inprogress: doc.data().inprogress,
       }))
       );
       console.log(todos);
 });
}

  const addToDo = (e) => {
    e.preventDefault();

    console.log("everything is working");
    
    db.collection("todos").add({
    inprogress: true,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    todo: todoInput,
  });
  }


  return (
    <>
    <div className="App"
     style={{
       display: "flex", 
       alignItems: "center", 
       height: "100vh", 
       justifyContent: "center", 
       flexDirection: "column"}}>
      
      <div>
        <h1>Damn, Is this a todo list?</h1>
        <form style={{marginTop: "20px"}}>

        <TextField 
        id="outlined-basic" 
        label="Outlined" 
        value={todoInput} 
        onChange={e => setTodoInput(e.target.value)}/>

        <Button
        type="submit"
         variant="contained"
         onClick={addToDo}
         style={{display: "none"}}
         >
          SUBMIT
        </Button>

        </form>

        {
          todos.map((todo) => (
           <TodoListItem 
           todo={todo.todo}
           inprogress={todo.inprogress}
           id={todo.id}/>
          ))
        }
      </div>
    </div>
    </>
  );
}

export default App;
