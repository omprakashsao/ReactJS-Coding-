import React, { useState } from 'react'
import { Lia500Px } from 'react-icons/lia';

const LecTodoList = () => {

    const [todos, setTodos] = useState(["fdjf", "dfj"]);
    const [inputValue, setinputValue] = useState("")

    const changeHandler = (e)=>{
        setinputValue(e.target.value);
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        if(inputValue.trim()){
            setTodos([...todos, inputValue])
            setinputValue("");
          

        }
    }


  return (
    <div>
        <form onSubmit={submitHandler} >
          <input type="text" value={inputValue} onChange={changeHandler} placeholder='Enter your todo' />
          <button type='submit'>Add todo by just one click</button>
        </form>

       <h1>Your Todo</h1>
        {
            todos.map((value)=> 
            <li key={Math.random()}>{value}</li>
            )
        }
    </div>
  )
}

export default LecTodoList