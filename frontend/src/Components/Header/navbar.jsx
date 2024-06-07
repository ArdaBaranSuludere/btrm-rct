import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../Hooks/auth';

const Navbar = () => {

    const { isAuthenticated } = useAuthContext();

    return (
        <header className="main-header">
            <h1 className="site-name">MarBlogs</h1>
            <hr />
            <nav className="nav main-nav">
                <ul>
                    <li><Link to="/">Ana Sayfa</Link></li>
                    <li><Link to="/myProfile">Profilim</Link></li>
                    {/* {isAdmin && (
                        <>
                            <li><Link to="/">Admin Panel</Link></li>
                            <li><Link to="/logout.html">Logout</Link></li>
                        </>
                    )} */}
                    {!isAuthenticated && (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                        </>
                    )}
                    {isAuthenticated && (
                        <>
                            <li><Link to="/Write">Blog Yaz</Link></li>
                            <li><Link to="/logout">Logout</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
}

 export default Navbar;