import React, {useState} from 'react'

const FormValidation = () => {

  const [userid, setUserid]=useState('');
  const [password, setPassword] = useState('');
  const [userErr,setUserErr] = useState(false);
  const [passwordErr,setPasswordErr] = useState(false);

  const handleLogin =(e) =>{
    e.preventDefault();
    console.log(`Hey ${userid} your password is ${password}`)
  }
  const handleUser = (event) =>{
    const item = event.target.value;
    if(item.length < 3){
      setUserErr(true);
    }
    else{
      setUserErr(false);
    }

    setUserid(item);

  }
  const handlePassword = (event) =>{
    const item = event.target.value;
    if(item.length < 5){
      setPasswordErr(true);
    }
    else{
      setPasswordErr(false);
    }
    setPassword(item);
  }
  return (
    <div>
      <h1>Form Validation</h1>
      <h3>Login Form</h3>
      <form onSubmit={handleLogin}> 
        <input type="text" 
        placeholder='Enter User ID' 
        onChange={handleUser}
        />
        <br />
        {userErr?<span>User not Valid!</span>:""}
        <br />
        <input type="text"
         placeholder='Enter Password'
         onChange={handlePassword}
       />
        <br />
        {passwordErr?<span>Password not Valid!</span>:""}
        <br />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default FormValidation
