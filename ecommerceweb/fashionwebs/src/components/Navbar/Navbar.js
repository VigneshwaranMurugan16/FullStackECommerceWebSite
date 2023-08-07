import React from 'react';
import './Navbar.css';

const Navbar = ({ onRouteChange ,userId}) => {
  const handleLinkClick = (route) => {
    onRouteChange(route);
  };

    
 
    return(
      <nav className="navbar1">
      <ul className="nav-list1">
        <li className="nav-item1">
          <a href="#" onClick={() => handleLinkClick('/shirts')}>Shirts</a>
        </li>
        <li className="nav-item1">
          <a href="#" onClick={() => handleLinkClick('/tshirts')}>T-Shirts</a>
        </li>
        <li className="nav-item1">
          <a href="#" onClick={() => handleLinkClick('/pants')}>Jeans</a>
        </li>
        <li className="nav-item1">
          <a href="#" onClick={() => handleLinkClick('/glasses')}>Glasses</a>
        </li>
      </ul>
    </nav>
    );
  
}
export default Navbar;


