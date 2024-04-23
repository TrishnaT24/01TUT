import React,{useState} from 'react';
import { auth } from './FirebaseConfig';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import './login.css';
function Login() {
    const [values,setValues]= useState({
        name:'',
        email:'',
        password:''

    })
const handleSubmit =(e) => {
  e.preventDefault();
 const email= e.target.email.value;
 const password= e.target.password.value;
 
 createUserWithEmailAndPassword(auth,email,password).then(data=>{
  console.log(data,"authData")
 })
}
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align items-center'>
     <div className='p-3 rounded w-25'>
        <h1>Login Page</h1>
        <form onSubmit={(e)=>handleSubmit(e)}  >
          
                <div className='mb-3'>
                <label htmlFor='email'><strong>Email</strong></label>
                <input type='email' placeholder='Enter email' name='email' className='form-control rounded-0' />
                </div>
                <div className='mb-3'>
                <label htmlFor='password'><strong>Password</strong></label>
                <input type='password' placeholder='Enter Password' name='password' className='form-control rounded-0' />
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Sign up </button>

        </form>
     </div>
    </div>  
  );
}

export default Login;