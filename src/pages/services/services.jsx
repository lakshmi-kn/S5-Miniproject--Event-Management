import React from 'react';
import './services.css'; // Make sure to create a CSS file for styling

import logo from "../../assets/logo.png"
import profileIcon from "../../assets/profile.svg"
import { Link } from 'react-router-dom';

export default function Services() {

    let events = [{
        eventName: "Weddings",
        Decription: "At GatherEase, we understand that your wedding day is one of the most important days of your life. That's why we offer a full event planning package that includes everything you need to make your day unforgettable.From venue selection to decor, catering to entertainment, we take care of everything so that you can focus on enjoying your special day."
        // package_1: "Full Event Planning Package - 1,60,000 for 4 hours",
        // package_2: "Partial Event Planning Package - 75,000 for four hours",
        // package_3: "Day-of Coordination - 1,20,000 for 4 hours",
    },
    {
        eventName: "Private Parties",
        Decription: "If you're planning a private event, whether it's a family gathering, a reunion, or a dinner party, GatherEase can help you make it special. We offer a range of services including venue selection, catering, decor, and entertainment, so that you can relax and enjoy your event with your guests."
        // package_1: "Birthday Celebrations - 1,60,000 for 4 hours",
        // package_2: "Anniversaries - 75,000 for four hours",
        // package_3: "Private Events - 1,20,000 for 4 hours",
    },
    {
        eventName: "Corporate Events",
        Decription: "GatherEase is your all-in-one partner for successful events. Whether you're launching a product, organizing team-building activities, or planning a corporate conference, we've got you covered. For product launches, we offer services like venue selection, catering, decor, and entertainment to ensure your product gets the attention it deserves. Boost team morale and productivity with our tailored team-building events. When it comes to corporate conferences, we handle everything from venue logistics to catering and entertainment, making sure your brand shines and relationships thrive."
        // package_1: "Conferences - 75,000 for four hours",
        // package_2: "Product Launches - 1,20,000 for 4 hours",
        // package_3: "Team Building Events - 1,60,000 for 4 hours",
    }
    {
        eventName: "Birthday Celebrations",
        Decription: "Whether you're celebrating a milestone birthday or just want to throw a party for your friends and family, GatherEase can help. We offer a range of services including venue selection, catering, decor, and entertainment, so that you can focus on having fun with your guests."
        // package_1: "Conferences - 75,000 for four hours",
        // package_2: "Product Launches - 1,20,000 for 4 hours",
        // package_3: "Team Building Events - 1,60,000 for 4 hours",
    }


    ]

    return (
        <div className="service">

            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" width={200} />
                </div>
                <div className="nav">
                    <div className="nav-items">
                        <a href="#about">About</a>
                        <a href="">Services</a>
                        <a href="#contact">Contact Us</a>
                        <a href="#gallery">Gallery</a>
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
                                        <p>{event.package_1}</p>
                                        <p>{event.package_2}</p>
                                        <p>{event.package_3}</p>
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
