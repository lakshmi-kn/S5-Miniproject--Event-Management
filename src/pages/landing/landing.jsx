import React, { useState, useEffect } from 'react';

import "./landing.css"
import logo from "../../assets/logo.png"
import profileIcon from "../../assets/profile.svg"
import heroImage from "../../assets/hero.webp"
import servicesImage from "../../assets/services.webp"
import flower from "../../assets/flower.svg"
import { Link } from 'react-router-dom';
import logo2 from "../../assets/logo2.png";

export default function Landing({ user }) {
    const [showDropdown, setShowDropdown] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        howHeard: '',
        eventDescription: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here (e.g., send email)
        setIsSubmitted(true);
    };

    return (
        <div className="landing">

            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" width={200} />
                </div>
                <div className="nav">
                    <div className="nav-items">
                        <a href="#about">About</a>
                        <Link to='/services' >Services</Link>
                        <a href="#contact">Contact Us</a>
                        <a href="#gallery">Gallery</a>
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


            <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="title">Unforgettable Events Made Easy</div>
            </div>

            <div className="service_details">
                <div className="details_container">
                    <h1 className='heading_1'>OUR SERVICES</h1>
                    <img src={flower} width={50} />
                    <h3 className='heading_2'>Leave the Details to us</h3>
                    <button className='learn_more'>LEARN MORE</button>
                </div>
                <div className="service_image" style={{ backgroundImage: `url(${servicesImage})` }}></div>
            </div>

            <div className="features"></div>

            <div className="testimonials">
                <p className='test'>
                    The team at GatherEase made our event stress-free and unforgettable. <br />
                    They went above and beyond to ensure everything was perfect. Highly recommend!<br />
                    John & Kelly
                </p>
                <p className='test'>
                    GatherEase is the best in the business! Their team is professional, organized,<br />
                    and truly cares about making your event unforgettable.<br />
                    Katie & Ryan
                </p>
                <p className='test'>
                    GatherEase exceeded our expectations in every way. Their attention to detail and<br />
                    professionalism are unmatched. Thank you for making our event unforgettable!<br />
                    Adam & Sarah
                </p>
                <p className='test'>
                    Thank you GatherEase for making our event unforgettable! Your team's creativity <br />
                    and attention to detail made all the difference.<br />
                    Haley & Nick
                </p>

            </div>


            <div className="gallery"></div>

            <div className="contact">
                <div className='contact-info'>
                    <form onSubmit={handleSubmit}>
                        <h2 className='contact-us'><i>CONTACT US</i></h2>
                        <p>Fill out the form below and we will be in contact shortly.</p>
                        {isSubmitted && <p className="success-message">Your message has been sent!</p>}
                        <div className='inputfield'>
                            <label
                                htmlFor="name">Name:
                            </label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                        </div>

                        <div className='inputfield'>
                            <label
                                htmlFor="email">Email:
                            </label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                        </div>

                        <div className='inputfield'>
                            <label
                                htmlFor="phone">Phone:
                            </label>
                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                        </div>

                        <div className='inputfield'>
                            <label htmlFor="howHeard">How did you hear about us?</label>
                            <input type="text" id="howHeard" name="howHeard" value={formData.howHeard} onChange={handleChange} />
                        </div>

                        <button className='submit' type="submit">SEND</button>
                    </form>
                </div>



                <div className="location">
                    <p className='add'>GatherEase, LLC <br />
                        SmartCity Area, <br />
                        Kakkanad, Ernakulam,<br />
                        Kerala, India</p>

                    <div className='number'>
                        <p>Tel. No. (1): +91 123456789</p>
                        <p>Tel. No. (2): +91 987654321</p>
                        <p>Email : gatherease@gmail.com </p>
                    </div>

                    <div className="logo2">
                        <img src={logo2} alt="" width={200} />
                    </div>

                </div>



            </div>
            <div className="footer">@2023 GatherEase Events, LLC. ALL RIGHTS RESERVED.</div>
        </div>
    )
}



