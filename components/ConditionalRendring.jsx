import React from 'react'

const ValidPassword = () => <h1>Valid Password</h1>;
const InValidPassword = () => <h1>InValid Credentials</h1>;

const Password = ({isValid}) => {
    // return isValid && <ValidPassword/>
  
    // if (isValid) {
    //     return <ValidPassword/>
    // }
    // return <InValidPassword/>

    return isValid ? <ValidPassword/> : <InValidPassword/>;

}

export default Password;