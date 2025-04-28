// LoginScreen.jsx
import React, { useState } from 'react';
import './LoginScreen.css';

function LoginScreen({ navigateTo }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    navigateTo('profile');
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1 className="login-title">Signin to your<br />PopX account</h1>
        <p className="login-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
        <form onSubmit={handleLogin}>
          <div className="form-field">
            <label className="field-label" style={{ color: '#6200ee' }}>Email Address</label>
            <input 
              type="email" 
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-field">
            <label className="field-label" style={{ color: '#6200ee' }}>Password</label>
            <input 
              type="password" 
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
      
      <div className="page-navigation">
        <div 
          className="nav-home-icon"
          onClick={() => navigateTo('landing')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          </svg>
        </div>
        <div className="nav-pagination">
          <button 
            className="prev-btn" 
            onClick={() => navigateTo('landing')}
          >&lt;</button>
          <span className="page-indicator">2 of 4</span>
          <button 
            className="next-btn"
            onClick={() => navigateTo('signup')}
          >&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;