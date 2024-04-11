import React,{useState} from 'react';
import axios from 'axios';
function Login() {
    const [values,setValues]= useState({
        name:'',
        email:'',
        password:''

    })
const handleChange = (event) =>{
  setValues({...values,[event.target.name]:[event.target.value]})
}
const handleSubmit =(event) => {
  event.preventDefault();
  axios.post('http://localhost:8081/login',values)
  .then(res=> console.log("Registered Successfully!!"))
  .catch(err=> console.log(err));
}
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align items-center'>
     <div className='p-3 rounded w-25'>
        <h1>Login Page</h1>
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor='name'><strong>Name</strong></label>
                <input type='text' placeholder='Enter Name' name='name' className='form-control rounded-0' onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                <label htmlFor='email'><strong>Email</strong></label>
                <input type='email' placeholder='Enter email' name='email' className='form-control rounded-0' onChange={handleChange}/>
                </div>
                <div className='mb-3'>
                <label htmlFor='password'><strong>Password</strong></label>
                <input type='password' placeholder='Enter Password' name='password' className='form-control rounded-0' onChange={handleChange}/>
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Sign up </button>

        </form>
     </div>
    </div>  
  );
}

export default Login;
