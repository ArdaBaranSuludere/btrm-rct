import React from 'react';
import { Link } from 'react-router-dom';
;

const Navbar = () => {
    return (
        <header className="main-header">
            <h1 className="site-name">MarBlogs</h1>
            <hr />
            <nav className="nav main-nav">
                <ul>
                    <li><Link to="/">Ana Sayfa</Link></li>
                    <li><Link to="/">Kaydedilenler</Link></li>
                    <li><Link to="/myProfile.html">Profilim</Link></li>
                    <li><Link to="/">Blog Yaz</Link></li>
                    {/* <li><Link to="/">Admin Panel</Link></li> */}
                    {/* <li><Link to="/logout.html">Logout</Link></li> */}
                    <li><Link to="/login.html">Login</Link></li>
                    <li><Link to="/register.html">Register</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;