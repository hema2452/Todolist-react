import React from 'react'

const ToDoItem = ({id,completed,title,toggleToDo,deleteTodo}) => {
 
  return (
    <li className="list-item">
    <label htmlFor="">
    <input 
        type="checkbox" 
        className="checkbox-input"
        checked = {completed}
        onChange={e => toggleToDo(id,e.target.checked)}
        /> 
    {title}
    </label>
    <button 
    className="delete-button"
    onClick={ () => deleteTodo(id)}
    > Delete</button>
</li>  
  )
}

export default ToDoItem