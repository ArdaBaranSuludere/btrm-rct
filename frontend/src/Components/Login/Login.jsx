import React, { useState } from 'react';
import '../Login/Login.css';

const Login = () => {
  const [loginResult, setLoginResult] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');

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
      window.location.href = '/';
      return <Navbar isLoggedIn={true} />;
    } else {
      setLoginResult(data.message || 'Login failed!');
    }
  };

  return (
    <>
      <div className="container ">
        <div className="login-row">
          <div className="col-md-6 offset-md-3 login-container">
            <div className="login-header">
              <h2>Login</h2>
              <p className="lead">Sign in to your account</p>
            </div>

            <form onSubmit={handleLogin} noValidate>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" name="username" id="username" className="form-control" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" id="email" className="form-control" />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label d-block">Password</label>
                <div className="d-flex">
                  <input type="password" name="password" id="password" className="form-control" />
                </div>
              </div>

              <div className="mb-3 text-center">
                <button type="submit" className="btn btn-primary btn-lg">Login</button>
              </div>
            </form>

            <p>{loginResult}</p> {/* Giriş sonucunu göstermek için */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;