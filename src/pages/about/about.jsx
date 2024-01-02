import React from 'react';
import './UserProfileCard.css';
import logooo from '../Assets/logo.png';
import profile_icon from '../Assets/dfde9aaa87d84facb2e604d3add0bded.webp'; // Replace with the actual path

export const UserProfileCard = () => {
  return (
    <div className='user-pro-card'>
      <div className="logo">
        <img src={logooo} alt="" width={200} /> {/* Change 'logo' to 'profile_icon' */}
      </div>
      <div className="nav">
        <div className="nav-items">
          <a href="#about">About</a>
          <a href='/services'>Services</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact Us</a>
          <a href="#gallery">Gallery</a>
        </div>
      </div>
      <h1>About GatherEase</h1>
     
      <div className="profile-down">
        <img src={profile_icon} alt="" />
        <div className="profile title">SHANEGS007</div>
        <div className="profile-descrption">
          At GatherEase, we are passionate about making your event dreams come true.
          Our team is comprised of experienced professionals who are dedicated to ensuring every detail of your event is perfect.
          From catering to transportation, accommodation to lighting, music systems to decorations, and security, we handle it all with precision and care to make your event a success.
        </div>
        <div className="profile button"><a href="mailto:shane@mail.com">contact me</a> </div>
      </div>
     
    </div>
  );
};