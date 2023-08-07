import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Profile.css';

const Profile = ({ onMainRouteChange, userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, [userId]);

  const fetchUser = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users/${userId}`);
      const userData = await response.json();

      if (response.ok) {
        setUser(userData);
      } else {
        console.error(userData.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLinkClick = (route) => {
    onMainRouteChange(route);
  };

  return (
    <div className="profile-container">
      <div>
        <header className="header">Fashion World Account</header>
        <button className="signout-button1" onClick={() => handleLinkClick('signin')}>
          Sign Out
        </button>
      </div>
      <div className="user-info">
   
        <div className="info-section">
          <div className="info-item">
            <span className="info-label">Name</span>
            <span className="info-value">{user ? user.name : ''}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Email</span>
            <span className="info-value">{user ? user.email : ''}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Mobile</span>
            <span className="info-value">9978979980</span>
          </div>
        </div>
      </div>
      <div>
    
      </div>
    </div>
  );
};

export default Profile;
