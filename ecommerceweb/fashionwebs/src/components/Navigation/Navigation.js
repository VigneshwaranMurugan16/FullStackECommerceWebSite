import React from 'react';
import './Navigation.css';
import logo from './logo.png';



 
const Navigation = ({ onMainRouteChange,userId }) => {
  const handleLinkClick = (route) => {
    onMainRouteChange(route,userId);
  };

    
 
    return(
      <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#" onClick={() => handleLinkClick('home')}>Home</a></li>
        <li><a href="#" onClick={() => handleLinkClick('fav')}>Favourites</a></li>
        <li><a href="#" onClick={() => handleLinkClick('cart')}>Cart</a></li>
        <li><a href="#"onClick={() => handleLinkClick('profile')}>Profile</a></li>
      </ul>
    </nav>
    );
  
}
export default Navigation;

