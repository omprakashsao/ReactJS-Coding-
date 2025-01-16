import { useContext } from "react";
import { useState } from "react";
import { UserContext } from "./UserProvider";

import React from 'react'

const UpdateUser = () => {

    const {updateUser} = useContext(UserContext)
    const [ input , setInput ] = useState('')


  return (
    <div>
            <form onSubmit={(e)=>{
                e.preventDefault();

                updateUser(input)
                setInput('')
            }}>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Enter your new name" />
                <button type="submit">update user</button>
            </form>
    </div>
  )
}

export default UpdateUser