import { useState } from "react";
import React from 'react'


const ToDo = (props) => {
    const [setItem, setSetItem] = useState("") 
    function handleSubmit(e){
      e.preventDefault();
      if(setItem === "") return
      props.onSumbit(setItem)        
      setSetItem("")
    }

 
    return(
        
        <form onSubmit={handleSubmit}>
        <div className = "form-input">
          <label htmlFor="item-input">Please Enter New Item</label> 
          <br />
          <input 
            type="text" 
            id="item-input" 
            className='form-item' 
            value = {setItem} 
            onChange={(e)=> setSetItem(e.target.value) }/>
        </div>
        <button className="button form-item">ADD</button>
      </form>

    )
 
}




export default ToDo