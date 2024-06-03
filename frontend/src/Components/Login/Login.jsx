import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login-style.css';
import { useAuthContext } from '../../Hooks/auth';


const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuthContext();

    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const body = JSON.stringify({
          username: formData.get("username"),
          email: formData.get("email"),
          password: formData.get("password")
      });
      const success = await login(body);
      if (success) {
          navigate("/");
      }
  }

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <form onSubmit={handleSubmit}>
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
        </form>
      </div>
    </div>
  );
}

export default Login;