import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Header/navbar';
import HomePage from './Components/HomePage/home_page';
import MyProfilePage from './Components/MyProfile/my-profile';



const App = () => {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true); // varsayılan olarak kullanıcı giriş yapmış
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='myProfile.html' element={<MyProfilePage />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/tickets" element={<Tickets />} /> */}
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/logout" element={<Logout setIsUserLoggedIn={setIsUserLoggedIn} />} /> */}
      </Routes>
    </div>
  );
};

export default App;