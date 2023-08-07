import React from 'react';
import bannerImage from './b5.jpg';
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={bannerImage} alt="Banner" className="banner" />
      <div className="banner-text">
        <h2>Shop Smart, Look Fabulous</h2>
        <p>Amazing Offers Inside</p>
      </div>
    </div>
  );
}

export default Banner;
