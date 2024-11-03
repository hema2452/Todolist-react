import React from 'react'
import ToDoItem from './ToDoItem'

const List = ({todo,toggleToDo,deleteToDo}) => {  

  return (
    <ul className="list">  
        {todo.length == 0 && "No Todos"}
        {todo.map(todo => {
            return(              
               <ToDoItem 
               {...todo}                       
               key={todo.id} 
               toggleToDo={toggleToDo} 
               deleteTodo={deleteToDo}
                //    id={todo.id} 
                //    title = {todo.title}
                //    completed ={todo.completed}
               />
            )
        })}        
    </ul>
    )
}


export default List