import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Header/navbar';
import HomePage from './Components/HomePage/home_page';
import MyProfilePage from './Components/MyProfile/my-profile';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Logout from './Components/Logout/Logout';
import BlogSubmit from './Components/BlogSubmit/BlogSubmit';
import Write from './Components/Write/Write';


const App = () => {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(); // Varsayılan olarak kullanıcı giriş yapmış
  const [isAdmin, setIsAdmin] = useState(); // isAdmin state'ini ekleyin

  return (
    <div>
      <Navbar isLoggedIn={isUserLoggedIn} isAdmin={isAdmin} /> {/* isAdmin değerini Navbar bileşenine iletiliyor */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/myProfile" element={<MyProfilePage />} />
        <Route path="/Write" element={<Write />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

      </Routes>
    </div>
  );
};

export default App;