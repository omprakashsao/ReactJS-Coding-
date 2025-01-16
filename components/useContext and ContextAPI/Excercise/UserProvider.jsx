import React from 'react'
import {  useState } from 'react'
import { createContext } from 'react';

export const UserContext = createContext();

const UserProvider = ({children}) => {

    const [user , setUser ] = useState({name: "Om Prakash"})

    const updateUser = (newName) =>{
        setUser({name: newName})
    }
  return (
    <div>
         <UserContext.Provider value={ {user, updateUser}}>
            {children}
         </UserContext.Provider>
    </div>
  )
}

export default UserProvider