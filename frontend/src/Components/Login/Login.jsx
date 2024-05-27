import React, { useState } from 'react';
import './login-style.css'
import LoginForm from './LoginForm';

const Login = () => {
  // const [loginResult, setLoginResult] = useState('');

  // const handleLogin = async (event) => {
  //   event.preventDefault();

  //   const formData = new FormData(event.target);
  //   const username = formData.get('username');
  //   const email = formData.get('email');
  //   const password = formData.get('password');

  //   const response = await fetch('http://localhost:5000/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ username, email, password }),
  //   });

  //   const data = await response.json();

  //   if (response.ok) {
  //     setLoginResult('Login successful!');
  //     window.location.href = '/';
  //     return <Navbar isLoggedIn={true} />;
  //   } else {
  //     setLoginResult(data.message || 'Login failed!');
  //   }
  // };

  return (
    <LoginForm />
  )
}

export default Login;