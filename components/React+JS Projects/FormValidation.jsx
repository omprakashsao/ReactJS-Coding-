import React from 'react'
import { useState } from 'react'

const FormValidation = () => {

    const [ userName , setUserName ] = useState('')
    const [ eamil , setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')

    const [ errorUserName , setErrorUserName ] = useState('')
    const [ errorEmail, setErrorEmail ] = useState('')
    const [ errorPassword , setErrorPassword ] = useState('')
    const [ errorConfirmPassword , setErrorConfirmPassword ] = useState('')

    const [ userColor, setUserColor ] = useState('')
    const [ emailColor, setEmailColor] = useState('')
    const [ passwordColor, setPasswordColor] = useState('')
    const [confirmPasswordColor, setConfirmPasswordColor ] = useState('')

    const formvalidate = (e) =>{

            e.preventDefault();

            if (userName.length >8 ) {
                setErrorUserName('')
                setUserColor('green')
            } else  {
                setErrorUserName('username must be 8 length')
                setUserColor('red')
            }

            if (eamil.includes('@gmail.com')) {
                setErrorEmail('')
                setEmailColor('green')
            } else {
                setErrorEmail('email should be contain @gmail.com')
                setEmailColor('red')
            }

            if (password.length > 8) {
                setErrorPassword('')
                setPasswordColor('green')
            } else {
                setErrorPassword('password must be 8 character')
                setPasswordColor('red')
            }

            if (confirmPassword !== '' && password == confirmPassword) {
                setErrorConfirmPassword('')
                setConfirmPasswordColor('green')
            } else {
                setErrorConfirmPassword('Password may not be match or empty')
                setConfirmPasswordColor('red')
            }

    }


  return (
    <div>
        <form onSubmit={formvalidate} >
            <div>
            <label>
                user: <input type="text" value={userName} onChange={e=> setUserName(e.target.value)} />
            </label>

            <p style={{color: userColor}}>{errorUserName}</p>

            </div>

            <div>
            <label>
                email: <input type="text" value={eamil} onChange={e=> setEmail(e.target.value)} />
            </label>

            <p style={{color: emailColor}}>{errorEmail}</p>

            </div>

            <div>
            <label >
                password: <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
            </label> 

            <p style={{color: passwordColor}}>{errorPassword}</p>

            </div>

            <div>
            <label>
                confirm password : <input type="password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} />
            </label>

            <p style={{color: confirmPasswordColor}}>{errorConfirmPassword}</p>

            </div>

            <button type='submit'>submit</button>

        </form>
    </div>
  )
}

export default FormValidation