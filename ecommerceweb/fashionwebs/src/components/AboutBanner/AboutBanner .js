import React from 'react';
import './AboutBanner.css';
import bannerImage from './b1.jpg';
import facebookLogo from './fl1.png';
import twitterLogo from './tl1.png';
import instagramLogo from './il1.png';

const AboutBanner = () => {
  return (
    <div className="about-banner">
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <div className="about-content">
        <h2>About Our Website</h2>
        <p>
        Welcome to our fashion clothing website! We offer a wide range of stylish and trendy clothes for all occasions. 
        Our collection includes shirts, pants, t-shirts, and accessories to help you create your unique fashion statement.
        With our high-quality products and excellent customer service, we strive to provide the best shopping experience for fashion enthusiasts.
      </p>
        <p>Follow us on social media:</p>
        <div className="social-media-icons">
          <a href="https://www.facebook.com">
            <img src={facebookLogo} alt="Facebook" />
          </a>
          <a href="https://www.twitter.com">
            <img src={twitterLogo} alt="Twitter" />
          </a>
          <a href="https://www.instagram.com">
            <img src={instagramLogo} alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;
