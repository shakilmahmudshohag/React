import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoIteam1 from "./TodoItem1"
import TodoIteam2 from "./TodoItem2"
import "./App.css";
function App() {
 

  return <center className='todo-container'>
<AppName></AppName>
<AddTodo></AddTodo>
<div className="items-container">
<TodoIteam1></TodoIteam1>
<TodoIteam2></TodoIteam2>
</div>

  </center>
}

export default App
