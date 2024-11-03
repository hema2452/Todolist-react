import './App.css'
import { useState,useEffect} from 'react'
import ToDo from './ToDo'
import List from './List'


function App() {
  //todo use state hook to store new items and deleted it 
  
  const [todo,setToDo]  = useState(
    () => {
      const storedItems = localStorage.getItem("ITEMS")
      if(storedItems == null) return []
      return JSON.parse(storedItems)
      
    })
    useEffect(() => {
      localStorage.setItem("ITEMS", JSON.stringify(todo)) 
    }, [todo]); // This will update/ save the items in local storage whenever todo changes
  

  function addTodo(title){
        setToDo((currenttodo) => {
          return[
            ...currenttodo,
            {id:crypto.randomUUID(),title:title,completed:false},
          ]
        })
  }
   
  function toggleToDo(id,completed){
    console.log(completed);
    setToDo(currenttodo => {
      return  currenttodo.map(todo => {
        if(todo.id === id){
          return  { ...todo, completed }
          // state is immutable  todo.completed = completed. changeing one property
        }
        return todo
      })
    })
  }

  function deleteToDo(id){
    setToDo(currentTodos => {
      return currentTodos.filter( todo => todo.id !== id)})
  
  }

  return (
     <>     
      <ToDo onSumbit ={addTodo}/>
      <h1 className="list-heading">To Do tasks</h1>
     
      <List todo = {todo} toggleToDo={toggleToDo} 
               deleteToDo={deleteToDo}/>
    </>
  )
}

export default App
