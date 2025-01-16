import React, { useState } from 'react'
import { PiPlaceholder } from 'react-icons/pi'

const TodoList = () => {

    const [todos , setTodos ] = useState([])
    const [input , setInput ] = useState("")

    const handleSubmit = ()=>{
        setTodos([ ...todos, { text: input , id: Math.floor(Math.random()*100)}])

        setInput("")
    }

    const removeTodo = (id)=>{
         setTodos(todos.filter(t=>t.id !== id))
    }
    

  return (
    <div>
        <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} placeholder='new Todo' />
        <button onClick={handleSubmit}>submit</button>

        <ul>

        {
            todos.map(({id, text})=>(
                <li key={id}>
                    <span>{text}</span>
                    <button onClick={()=>removeTodo(id)}>x</button>
                </li>
            ))
        }
        </ul>


    </div>
  )
}

export default TodoList