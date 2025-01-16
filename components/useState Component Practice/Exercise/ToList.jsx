import React, { useState } from 'react'
import { Lia500Px } from 'react-icons/lia';

const ToList = () => {

    const [ todo , setTodo ] = useState(["idsfd ", "dfj"]);
    const [ inputValue , setInputValue ] = useState("");
    
    const changeHandler = (event) =>{
        setInputValue(event.target.value);
    }

    const clickHandler = ()=>{
       if(inputValue.trim()){
          const newTodo = [...todo, inputValue]
          
          setTodo(newTodo);
           setInputValue("");

           
       }
    }

    return (

    <div>
       <input type="text" value={inputValue} onChange={changeHandler} placeholder='Enter your todo' />
       <button onClick={clickHandler}>Add todo</button>

       <h1> Your Todo List</h1>
       {
        todo.map((value) => 
        <li key={Math.random()}> {value}</li>
        )
       }

    </div>
  )
}

export default ToList