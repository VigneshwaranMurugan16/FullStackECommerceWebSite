import React from 'react';
import bannerImage from './b2.jpg';
import './SecondBanner.css'

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={bannerImage} alt="Banner" className="banner" />
      <div className="banner-text">
        <h2>Upgrade your style game with our exclusive designs</h2>
        <p>Amazing Offers Inside</p>
      </div>
    </div>
  );
}

export default Banner;
