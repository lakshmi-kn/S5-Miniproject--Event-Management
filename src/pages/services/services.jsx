import React from 'react';
import './services.css'; // Make sure to create a CSS file for styling

import logo from "../../assets/logo.png"
import profileIcon from "../../assets/profile.svg"
import { Link } from 'react-router-dom';

export default function Services() {

    let events = [{
        eventName: "Weddings",
        Description: "GatherEase knows your wedding day is crucial. Our full event planning package covers everything – from venue selection to decor, catering to entertainment. Let us handle the details while you savor every moment of your unforgettable day."
    },
    {
        eventName: "Private Parties",
        Description: "Plan your private event effortlessly with GatherEase. Whether it's a family gathering, reunion, or dinner party, we specialize in making it special. Our services include venue selection, catering, decor, and entertainment, allowing you to relax and enjoy the event with your guests."
    },
    {
        eventName: "Corporate Events",
        Description: "Covering it all – from product launches to team-building and corporate conferences. For launches, we handle venue selection, catering, decor, and entertainment. Boost team spirit with personalized events. Our corporate conference expertise includes venue logistics, catering, and entertainment, ensuring your brand shines and relationships flourish."
    },
    {
        eventName: "Birthday Celebrations",
        Description: "Celebrate with ease! Whether it's a milestone birthday or a casual gathering, GatherEase has you covered. Enjoy the party while we handle venue selection, catering, decor, and entertainment for you and your guests."
    }
    ]

    return (
        <div className="service">

            <div className="header">
                <div className="logo">
                    <Link to= "/"><img src={logo} alt="" width={200} /></Link>
                </div>
                <div className="nav">
                    <div className="nav-items">
                        <Link to="/about">About</Link>
                        <Link to="">Services</Link>
                        <a href="/#contact">Contact Us</a>
                        <Link to="/gallery">Gallery</Link>
                    </div>
                    <div className="login">
                        <img src={profileIcon} width={30} />
                    </div>
                </div>
            </div>

            <div className="container">
                <main className='main'>
                    <h2 className='heading'>Services</h2>
                    <section className="services">
                        {
                            events.map((event) => {
                                return (
                                    // eslint-disable-next-line react/jsx-key
                                    <div className="event">
                                        <h3>{event.eventName}</h3>
                                        {/* <p>{event.package_1}</p>
                                        <p>{event.package_2}</p>
                                        <p>{event.package_3}</p> */}
                                        <p>{event.Description}</p>
                                        <button className="book-btn">
                                            <Link to={'/new-booking'}> Book Now </Link>
                                        </button>
                                    </div>
                                )
                            })
                        }
                    </section>
                </main>
            </div>
        </div>
    );
}
