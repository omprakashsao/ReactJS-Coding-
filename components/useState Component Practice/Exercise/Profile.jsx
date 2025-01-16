import React, { useState } from 'react'

const Profile = () => {

    const [profile, setProfile] = useState({
        name: "",
        age: 0,
    })



    const changeHandler = (e)=>{
     const  {name , value} = e.target;

       setProfile({...profile, [name]: value})

    }
   
  

  return (
    <div>
        <div>
        <label > 
            Age : <input type="text"  value={profile.age} name='age' onChange={changeHandler} placeholder='Enter you age' />
            
        </label>
        </div>
        <div>
        <label > 
            Name : <input type="text"  value={profile.name} name='name' onChange={changeHandler} placeholder='Enter you name' />
           
        </label>
        </div>

        <h2>Profile Information</h2>

        {
           Object.entries(profile).map(([key , value]) => (
            <li key={key}> {key} : {value}</li>
        ))
        }

    </div>
  )
}

export default Profile