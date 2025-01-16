import React, { useState } from 'react'

const AddNewFriend = () => {

    const [friend, setFriend] = useState(["Shiv Baba", "Mummy"])

    const addFriendHandler = () => {
       
      
       setFriend([...friend, "Brahama Baba"] );
    }
    
    const removeFriendHandler = () => {
        setFriend(friend.filter(f=> f !== "Mummy"))
    }

    const updateFriendHandler = () =>{
        setFriend(friend.map((f)=> f=="Shiv Baba" ? "BapDada" : f ))
    }


  return (
    <div>
        {friend.map((f)=>(

            <li key = {Math.random()}> {f} </li>
        )
         )}
    <button onClick={addFriendHandler}>Add New Friend</button>
    <button onClick={removeFriendHandler}>Remove Friend</button>
    <button onClick={updateFriendHandler}>Update Friend</button>
    </div>
  )
}

export default AddNewFriend