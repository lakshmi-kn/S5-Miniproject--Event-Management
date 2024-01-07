import React from 'react';

import "./card.css"

const Card = ({ title, description, image, price, onBookNowClick}) => {
    return (
        <div className="wrapper">
            <div className="product-img" style={{ backgroundImage: `url(${image})` }}></div>
            <div className="product-info">
                <div className="product-text">
                    <h1>{title}</h1>
                    <h2>{description}</h2>
                </div>
                <p className='price'><span>{price}</span>$</p>
                <div className="product-price-btn">
                    <button type="button">View Details</button>
                    <button type="button" onClick={onBookNowClick}>Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
