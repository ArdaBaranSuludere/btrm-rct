import React, { useState } from 'react'
import './Register.css'

const RegisterForm = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [passwordHash, setPasswordHash] = useState(""); // "password_hash" yerine "passwordHash" kullandık
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const data = {
        email,
        username,
        password_hash: passwordHash // "password_hash" yerine "passwordHash" kullandık
      };
  
      const url = 'http://127.0.0.1:5000/create_user';
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
        window.location.href = '/login';
      } catch (error) {
        alert(error.message);
      }
    };
  
    return (
      <div className="register-container"> {/* className kullanarak sınıf ekledik */}
        <div className="login-header">
              <h2>Register</h2>
              <p className="lead">Sign up</p>
            </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email' className="form-label">Email:</label> {/* className kullanarak sınıf ekledik */}
            <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" /> {/* className kullanarak sınıf ekledik */}
          </div>
          <div>
            <label htmlFor='username' className="form-label">Username:</label> {/* className kullanarak sınıf ekledik */}
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" /> {/* className kullanarak sınıf ekledik */}
          </div>
          <div>
            <label htmlFor='password_hash' className="form-label">Password:</label> {/* className kullanarak sınıf ekledik */}
            <input type="password" id="password_hash" value={passwordHash} onChange={(e) => setPasswordHash(e.target.value)} className="form-control" /> {/* className kullanarak sınıf ekledik */}
          </div>
          <button type="submit" className="btn-primary">Register</button>
        </form>
      </div>
    );
  };
  
  export default RegisterForm;