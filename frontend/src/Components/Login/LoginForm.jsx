import React, { useState } from 'react'
import './login-style.css'


const LoginForm = () =>{
    
    return (

        <div className="login-container">
          <div className="login-wrapper">
              <form action="">
                  <h1>Login</h1>
                  <div className="login-input-box">
                      <input type="email" placeholder="Email" required />
                      <i className='bx bx-envelope'></i>
                  </div>
                  <div className="login-input-box">
                      <input type="text" placeholder="Username" required />
                      <i className='bx bxs-user'></i>
                  </div>
                  <div className="login-input-box">
                      <input type="password" placeholder="Password" required />
                      <i className='bx bxs-lock-alt'></i>
                  </div>
                  <button type="submit" className="login-btn">Register</button>
                  <div className="login-register-link">
                      <p>Don't have an account? <a href="/register.html"> Register</a></p>
                  </div>
              </form>
          </div>
        </div>
        
      );
}
    
  export default LoginForm;