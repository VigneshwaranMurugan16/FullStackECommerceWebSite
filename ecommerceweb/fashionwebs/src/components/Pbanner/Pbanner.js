import React from 'react';
import bannerImage from './cb.jpg';
import './Pbanner.css'


const Pbanner = () => {
  return (
    <div className="banner-container">
    <img src={bannerImage} alt="Banner" className="banner" />
    <div className="banner-text">

    </div>
  </div>
  );
}

export default Pbanner;