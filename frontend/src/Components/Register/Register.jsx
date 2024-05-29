import React, { useState } from 'react';
import './register-style.css'

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); // Password state'i düzeltildi
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email,
      username,
      password
    };

    const url = 'http://127.0.0.1:5000/register';
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const responseData = await response.json();
        throw new Error(responseData.message);
      }
      // Başarılı
      window.location.href = '/login.html';
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="register-container">
      <div className="register-wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="register-input-box">
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="bx bx-envelope"></i>
          </div>
          <div className="register-input-box">
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <i className="bx bxs-user"></i>
          </div>
          <div className="register-input-box">
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="bx bxs-lock-alt"></i>
          </div>
          <button type="submit" className="register-btn">
            Register
          </button>
          <div className="register-register-link">
            <p>
              Already have an account? <a href="/login.html">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
