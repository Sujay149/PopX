// LandingPage.jsx
import React from 'react';
import './LandingPage.css'; // You'll need to create this CSS file

function LandingPage({ navigateTo }) {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">Welcome to PopX</h1>
        <p className="landing-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
        <button 
          className="primary-button"
          onClick={() => navigateTo('signup')}
        >
          Create Account
        </button>
        
        <button 
          className="secondary-button"
          onClick={() => navigateTo('login')}
        >
          Already Registered? Login
        </button>
      </div>
      
      <div className="page-navigation">
        <div className="nav-home-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          </svg>
        </div>
        <div className="nav-pagination">
          <button className="prev-btn">&lt;</button>
          <span className="page-indicator">1 of 4</span>
          <button className="next-btn">&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;