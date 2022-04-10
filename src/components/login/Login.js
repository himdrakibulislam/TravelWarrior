import React, { useState } from 'react';
import './login.css';
import { Form, Placeholder } from 'react-bootstrap';
import useAuth from '../../hook/useAuth';
import google from './google.png'
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const Login = () => {
  const {signInUsingGoogle,signInUser,signUpUser,setUserName} = useAuth()
  const [check,setCheck] = useState();
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/shop';
  const handleName = (e) =>{
    setName(e.target.value)
  }
  const handleEmail  = (e) =>{
    setEmail(e.target.value)
  }
  const handlePassword = (e) =>{
    setPassword(e.target.value)
  }
  const handleCheck = (e) =>{
    setCheck(e.target.checked)
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    check ? signInUser(email,password)
    .then((userCredential) => {
      // Signed in 
      history.push(redirect_uri)
     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    })
    :signUpUser(email,password) 
    .then((userCredential) => {
      // Signed in 
      history.push(redirect_uri)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    })
    ;setUserName(name)
    
  }
  const signInWithGoogle = () =>{
    signInUsingGoogle()
    .then((result) => {
      history.push(redirect_uri)
    }).catch((error) => {
      const errorMessage = error.message;
      
    });
  }
    return (
        
        <div className="login-style fw-bolder text-white">
          <div>
          <h2>{check ? 'Login Now':'Resister Now'}</h2>
          <Form onSubmit={handleSubmit}>
  {
    check ? '':<Form.Group className="mb-3"  controlId="formBasicName">
    <Form.Label>Name </Form.Label>
    <Form.Control type="text" onChange={handleName} placeholder="Enter Name" />
  </Form.Group>
  }
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email"  onChange={handleEmail} placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" onChange={handlePassword} placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check onClick={handleCheck} type="checkbox" label="Already have An Account" />
  </Form.Group>
 <button className='btn btn-primary' type='submit'>
     Submit
 </button>
 
</Form>
<br />
<p onClick={signInWithGoogle}><img src={google} className="text-center mb-5" width="40" height="40" alt="" /></p>
          </div>
        </div>
    );
};

export default Login;

/*
please enter this command
 npm install firebase
 npm install -g firebase-tools
 firebase login
 firebase init
 npm run build
 firebase init
*/