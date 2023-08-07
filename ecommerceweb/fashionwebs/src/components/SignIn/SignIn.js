import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css';
import '@fortawesome/fontawesome-free/css/all.css';

const SignIn = ({ onMainRouteChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitSignIn = () => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === 'Login successful') {
          // Successful login
          onMainRouteChange('home', data.user.id); // Pass the user ID when changing the route
        } else {
          // Failed login
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
          <h5>Login</h5>
          <p>
            Don't have an account?{' '}
            <Link to="#" onClick={() => onMainRouteChange('register')}>
              Create Your Account
            </Link>{' '}
            it takes less than a minute
          </p>
          <div className="inputs">
            <input type="text" placeholder="Email" value={email} onChange={onEmailChange} />
            <br />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={onPasswordChange}
            />
          </div>

          <br />
          <br />

          

          <br />
          <button onClick={onSubmitSignIn}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
