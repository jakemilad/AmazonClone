import React from 'react'
import "./Login.css"
import {Link, useNavigate} from "react-router-dom"
import { useState } from 'react';
import { auth } from './firebase';

function Login() {
    <Link></Link>
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
                // if(auth){
                //     navigate('/')
                // }
            })
            .catch(error => alert(error.message))
    }
    
    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }

  return (
    <div className='login'>
        <Link to='/'>
        <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1206px-Amazon_logo.svg.png?20220213013322" alt=""></img>
        </Link>

        <div className='login__container'>
            <h1>Sign in</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                <button onClick={signIn} className="login__signInButton" type="submit">Sign In</button>
            </form>

            <p>
                By signing-in, you agree to this Amazon Clone's terms of use. Please See
                github.com/jakemilad/ for more information.
            </p>

            <button onClick={register} className="login__registerButton">Create Your Amazon Account</button>

        </div>
    </div>
  )
}

export default Login