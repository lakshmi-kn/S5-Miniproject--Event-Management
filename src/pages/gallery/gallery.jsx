import { useState } from 'react';
import './gallery.css';

import closeicon from '../../assets/images/gallery/closeicon.webp';
import img1 from '../../assets/images/gallery/1.jpeg';
import img2 from '../../assets/images/gallery/2.jpg';
import img3 from '../../assets/images/gallery/3.jpg';
import img4 from '../../assets/images/gallery/4.webp';
import img5 from '../../assets/images/gallery/5.jpg';
import img6 from '../../assets/images/gallery/6.jpg';
import img7 from '../../assets/images/gallery/7.jpg';
import img8 from '../../assets/images/gallery/8.webp';
import img9 from '../../assets/images/gallery/9.jpeg';
import img10 from '../../assets/images/gallery/10.jpg';
import img11 from '../../assets/images/gallery/11.jpg';
import img12 from '../../assets/images/gallery/12.jpg';
import img13 from '../../assets/images/gallery/13.jpg';
import img14 from '../../assets/images/gallery/14.jpg';
import img15 from '../../assets/images/gallery/15.jpg';

import logo from '../../assets/logo.png'
import profileIcon from "../../assets/profile.svg"

import { Link } from 'react-router-dom';

import Header from '../../shared/navbar/navbar';

const Gallery = () => {
    let data = [
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        },
        {
            id: 5,
            imgSrc: img5,
        },
        {
            id: 6,
            imgSrc: img6,
        },
        {
            id: 7,
            imgSrc: img7,
        },
        {
            id: 8,
            imgSrc: img8,
        },
        {
            id: 9,
            imgSrc: img9,
        },
        {
            id: 10,
            imgSrc: img10,
        },
        {
            id: 11,
            imgSrc: img11,
        },
        {
            id: 12,
            imgSrc: img12,
        },
        {
            id: 13,
            imgSrc: img13,
        },
        {
            id: 14,
            imgSrc: img14,
        },
        {
            id: 15,
            imgSrc: img15,
        },
    ];
    const [model, setModel] = useState(false);
    const [tempimgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    };


    return (
        <>
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

            <div className="heading_gal">
                <h1>Gallery Page</h1>
            </div>
            <div className={model ? 'model open' : 'model'}>
                <img className='gal-pics' src={tempimgSrc} alt="" />
                <img className= 'close-icon' onClick={() => setModel(false)} src={closeicon} />
            </div>
            <div className="gallery">
                {data.map((item, index) => {
                    return (
                        <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} alt="" />
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Gallery;