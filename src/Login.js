import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './FirebaseConfig';
import { useNavigate } from 'react-router-dom';
import './login.css'; // Import CSS file

function Login() {
    const [isSignUp, setIsSignUp] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (isSignUp) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(data => {
                    console.log(data, "authData");
                    // Redirect to home or any other page after sign up
                    navigate('/home');
                })
                .catch(err => {
                    alert(err.code);
                    console.log('ERROR');
                });
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then(data => {
                    console.log(data, "authData");
                    // Redirect to home or any other page after sign in
                    navigate('/home');
                })
                .catch(err => {
                    alert(err.code);
                    console.log('ERROR');
                });
        }
    };

    return (
        <div className='background-container'>
            <div className='container ss'>
                <h1>{isSignUp ? 'Register' : 'Sign In'}</h1>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3 mail'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email' placeholder='Enter email' name='email' className='form-control rounded-0' />
                    </div>
                    <div className='mb-3 pw'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password' placeholder='Enter Password' name='password' className='form-control rounded-0' />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </button>
                </form>
                <div className="mt-3 text-center">
                    <button className="btn btn-link" onClick={() => setIsSignUp(!isSignUp)}>
                        {isSignUp ? 'Already have an account? Sign In' : 'Don\'t have an account? Register'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
