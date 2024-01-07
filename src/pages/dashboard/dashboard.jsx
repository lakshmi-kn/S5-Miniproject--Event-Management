
import React, { useState, useEffect } from 'react';
import './dashboard.css';

import logo from '../../assets/logo.png'
import profileIcon from "../../assets/profile.svg"

import { Link } from 'react-router-dom';

function Dashboard() {
    const [bookedEvents, setBookedEvents] = useState([]);
    const [bills, setBills] = useEffect([]); // Assuming bills are also fetched

    useEffect(() => {
        // Fetch booked events and bills data
        fetchBookedEvents();
        fetchBills(); // Implement your logic to fetch bills
    }, []);

    const fetchBookedEvents = async () => {
        try {
            const response = await fetch('/api/booked-events'); // Replace with your API endpoint
            const data = await response.json();
            setBookedEvents(data);
        } catch (error) {
            console.error('Error fetching booked events:', error);
            // Handle errors gracefully, e.g., display an error message to the user
        }
    };

    // ... implement fetchBills function similarly

    return (
        <><div className="dashboard-container">
            <div className="header">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="" width={200} /></Link>
                </div>
                <div className="nav">
                    <div className="nav-items">
                        <Link to="/about">About</Link>
                        <Link to="">Services</Link>
                        <Link to="/#contact">Contact Us</Link>
                        <Link to="/gallery">Gallery</Link>
                    </div>
                    <div className="login">
                        <img src={profileIcon} width={30} />
                    </div>
                </div>
            </div>
        </div>
            <main className="dashboard-content"></main><section className="booked-events">
                <h2>Booked Events</h2>
                <ul>
                    {bookedEvents.map((event) => (
                        <li key={event.id}>
                            {/* Display relevant event details here, e.g., */}
                            <h3>{event.name}</h3>
                            <p>Date: {event.date}</p>
                            <p>Venue: {event.venue}</p>
                            {/* ...other details as needed */}
                        </li>
                    ))}
                </ul>
            </section><section className="bills">
                <h2>Bills</h2>
                {/* Display bills data using a similar approach */}
            </section></>
    );
}

export default Dashboard;
