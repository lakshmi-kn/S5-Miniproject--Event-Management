
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleSignOut } from '../landing/landing';

import { BookingTable } from './bookingTable';
import { Services } from './services';


import './dashboard.css';

import logo from '../../assets/logo.png'
import profileIcon from "../../assets/profile.svg"


function Dashboard() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedSection, setSelectedSection] = useState('booking-details');
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user')) ?? null

    if (!user) {
        navigate('/login')
    }

    const handleSectionClick = (section) => {
        setSelectedSection(section);
    };

    return (
        <div className="main_dashboard">

            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" width={200} />
                </div>
                <div className="nav">
                    <div className="nav-items">
                        <Link to="/about">About</Link>
                        <Link to='/services' >Services</Link>
                        <a href="#contact">Contact Us</a>
                        <Link to="/gallery">Gallery</Link>
                    </div>
                    <div className="login">
                        <img src={profileIcon} width={30} onClick={() => setShowDropdown(!showDropdown)} />
                        {
                            showDropdown && (
                                <div className="dropdown">
                                    <Link onClick={handleSignOut} className="dropdown-item">Sign out</Link>
                                </div>
                            )}
                    </div>
                </div>
            </div>

            <div className="dashboard_content">
                <aside className="sidenav">
                    <nav>
                        <ul>
                            <li className={selectedSection === 'booking-details' ? 'selected' : ''}>
                                <a onClick={() => handleSectionClick('booking-details')}>Booking Details</a>
                            </li>
                            <li className={selectedSection === 'services' ? 'selected' : ''}>
                                <a onClick={() => handleSectionClick('services')}>Services</a>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <main className="content">
                    {selectedSection === 'booking-details' && <BookingTable />}
                    {selectedSection === 'services' && <Services />}
                </main>
            </div>
        </div>
    );
}

export default Dashboard;
