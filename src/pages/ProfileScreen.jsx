// AccountSettings.jsx
import React, { useState } from 'react';
import './AccountSettings.css';

function AccountSettings({ navigateTo }) {
  const [user] = useState({
    name: "Marry Doe",
    email: "Marry@Gmail.Com",
    bio: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam"
  });

  return (
    <div className="account-settings-container">
      <div className="account-settings-content">
        <h1 className="account-settings-title">Account Settings</h1>
        
        <div className="profile-section">
          <div className="profile-image-container">
            <img 
              className="profile-image" 
              src="profile-picture.jpg" 
              alt="Profile" 
            />
            <div className="verification-badge">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
          </div>
          
          <div className="profile-info">
            <h3 className="profile-name">{user.name}</h3>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>
        
        <div className="bio-section">
          <p className="bio-text">{user.bio}</p>
        </div>
        
        <div className="empty-area">
          {/* Additional settings would go here */}
        </div>
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
            onClick={() => navigateTo('signup')}
          >&lt;</button>
          <span className="page-indicator">4 of 4</span>
          <button 
            className="next-btn"
            onClick={() => navigateTo('landing')}
          >&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default AccountSettings;