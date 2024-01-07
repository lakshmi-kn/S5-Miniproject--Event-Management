import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import profileIcon from "../../assets/profile.svg"

import "./navbar.css"

function Header() {
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="header">
            <div className="logo">
                <Link to='/'><img src={logo} alt="" width={200} /></Link>
            </div>
            <div className="nav">
                <div className="nav-items">
                    <Link to='/about' >About</Link>
                    <Link to='/services' >Services</Link>
                    <a href="#contact">Contact Us</a>
                    <Link to="/gallery">Gallery</Link>
                </div>
                <div className="login">
                    <img src={profileIcon} width={30} onClick={() => setShowDropdown(!showDropdown)} />
                    {showDropdown && (
                        user ?
                            <div className="dropdown">
                                <Link to={'/login'} className="dropdown-item">My Bookings</Link>
                                <Link to={'/register'} className="dropdown-item">Log out</Link>
                            </div>
                            :
                            <div className="dropdown">
                                <Link to={'/login'} className="dropdown-item">Login</Link>
                                <Link to={'/register'} className="dropdown-item">Sign Up</Link>
                            </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header;