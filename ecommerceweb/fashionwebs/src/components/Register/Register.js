import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Register = ({ onMainRouteChange }) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');



  const handleLinkClick = (route) => {
    onMainRouteChange(route);
  };

  const handleRegister = () => {
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: userName,
        email: email,
        password: password,
        phone : phone
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Registration successful') {
          // Successful registration
          alert('Registration successful');
          onMainRouteChange('home', data.user.id); // Pass the user ID when changing the route
        } else {
          // Failed registration
          alert(data.message);
        }
      })
      .catch((error) => {
        console.log(error);
        alert('An error occurred. Please try again.');
      });
  };

  return (
    <div className="signin-page">
      <div className="box-form">
        <div className="left">
          <div className="overlay">
            <h1>Hello Customers</h1>
            <p>Unleash Your Inner Fashionista and Stay Trendy</p>

            
          </div>
        </div>

        <div className="right">
          <h5>SignUp</h5>
          <p>
            Already have an account?{' '}
            <Link to="#" onClick={() => handleLinkClick('signin')}>
              Sign In
            </Link>{' '}
            instead.
          </p>

          <div className="inputs">
            <input
              type="text"
              placeholder="user name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            <input
              type="number"
              placeholder="Mobile Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <br />
          <br />

          <br />
          <button onClick={handleRegister}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
