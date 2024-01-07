import React from 'react';
import './about.css';
import image1 from '../../assets/images/about/1.webp';
import image2 from '../../assets/images/about/2.webp';
import image3 from '../../assets/images/about/3.webp';

import logo from '../../assets/logo.png'
import profileIcon from "../../assets/profile.svg"

import { Link } from 'react-router-dom';

import Header from '../../shared/navbar/navbar';


const About = () => {
  return (
    
    <section id='About'>
        <div className="header">
                <div className="logo">
                    <Link to= "/"><img src={logo} alt="" width={200} /></Link>
                </div>
                <div className="nav">
                    <div className="nav-items">
                        <Link to="">About</Link>
                        <Link to="/services">Services</Link>
                        <Link to="/#contact">Contact Us</Link>
                        <Link to="/gallery">Gallery</Link>
                    </div>
                    <div className="login">
                        <img src={profileIcon} width={30} />
                    </div>
                </div>
            </div>
        <span className="title">About GatherEase</span>
        <div className="employees">
            <div className="employee">
                <img src={image1} alt="image1" className="employeeimage" />
                <div className="etext">
                   <h2>Sarah Jones</h2>
                   <p>A seasoned event planner with a calm demeanor and a killer poker face. Sarah thrives under pressure, effortlessly navigating last-minute hiccups and unexpected emergencies. She has a vast network of contacts and can seemingly conjure up anything from a missing wedding cake to a last-minute marching band. Her motto: "There's no problem that can't be solved with a smile, a phone call, and a strategic application of bribery.</p> 
                </div>
            </div>
            <div className="employee">
                <img src={image2} alt="image2" className="employeeimage" />
                <div className="etext">
                   <h2>Jesscia Hyder</h2>
                   <p>A logistical maestro with a mind like a steel trap and an eye for detail that would make a hawk jealous. Jessica thrives on spreadsheets, timelines, and to-do lists. She meticulously tracks every budget, vendor, and RSVP, ensuring everything stays on schedule and within budget. While not prone to theatrics, she's the silent hero behind every event's smooth execution. Her quiet efficiency allows the others to shine, while her unflappable composure keeps the team grounded during even the most chaotic moments.</p> 
                </div>
            </div>
            <div className="employee">
                <img src={image3} alt="image3" className="employeeimage" />
                <div className="etext">
                   <h2>Luna Alvarez</h2>
                   <p>A master of public relations and networking, Luna has a magnetic personality and a gift for building relationships. She turns every client meeting into a collaborative conversation, making even the most difficult personalities feel heard and valued. Her charisma and diplomatic skills are invaluable in securing deals, navigating client anxieties, and keeping the team's spirits high even under pressure.</p> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default About