import { useContext, useState } from "react";
import { UserContext } from "./UserProvider";
import React from 'react'


const UserProfile = () => {
    
    const {user} = useContext(UserContext)

  return (
    <div>
        <h1>Profile Information</h1>
        <h1>Name : {user.name}</h1>
    </div>
  )
}

export default UserProfile
