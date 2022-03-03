import React, { useState, useEffect } from 'react'
 import { Link, Redirect } from 'react-router-dom'
import 'firebase/database'
import firebase from 'firebase/app'
import 'firebase/auth'

function Login(props){
     
    const auth = firebase.auth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSignin, setIsSignin] = useState(false);

    const getEmail = auth.currentUser ? auth.currentUser.email : '' ;

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setEmail('');
            setPassword('');
            setError('');
        }).catch(err => setError(err.message));
    }

    const userState = ()=>{
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setIsSignin(true);
            } else {
                setIsSignin(false);
            }
        });
    }

    useEffect(()=>{
        userState()
    },[])

    if(isSignin){
        return <Redirect to="/account" />
    }else{
        return (
            <div className='container' style={{width:'40%'}} >
                <br />
                <h2>Login {getEmail} </h2>
                <br />
                <form autoComplete="off" className='form-group' onSubmit={login}>
                    <label htmlFor="email">Email</label>
                    <input type="email" className='form-control' required
                        onChange={(e) => setEmail(e.target.value)} value={email} />
                    <br />
                    <label htmlFor="password">Password</label>
                    <input type="password" className='form-control' required
                        onChange={(e) => setPassword(e.target.value)} value={password} />
                    <br />
                    <button type="submit" className='btn btn-success btn-md mybtn'>LOGIN</button>
                </form>
                {error && <span className='error-msg text-danger'>{error}</span>}
                <br/>
                <span>Don't have an account? Register
                    <Link to="signup"> Here</Link>
                </span>
            </div>
        )
    }

}
export default Login;