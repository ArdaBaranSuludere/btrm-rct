import React, { useState } from 'react';
import './login-style.css';

const Login = () => {
  const [loginResult, setLoginResult] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');

    // Send login data to the backend for authentication
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setLoginResult('Login successful!');
        window.location.href = '/'; // Redirect to home page after successful login
      } else {
        setLoginResult(data.message || 'Login failed!');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginResult('An error occurred during login.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <form onSubmit={handleLogin}>
          <h1>Login</h1>
          <div className="login-input-box">
            <input type="email" name="email" placeholder="Email" required />
            <i className='bx bx-envelope'></i>
          </div>
          <div className="login-input-box">
            <input type="text" name="username" placeholder="Username" required />
            <i className='bx bxs-user'></i>
          </div>
          <div className="login-input-box">
            <input type="password" name="password" placeholder="Password" required />
            <i className='bx bxs-lock-alt'></i>
          </div>
          <button type="submit" className="login-btn">Login</button>
          <div className="login-register-link">
            <p>Don't have an account? <a href="/register.html"> Register</a></p>
          </div>
          {loginResult && <p>{loginResult}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
