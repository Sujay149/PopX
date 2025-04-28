// SignupScreen.jsx
import React, { useState } from 'react';
import './SignupScreen.css';

function SignupScreen({ navigateTo }) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [isAgency, setIsAgency] = useState(true);

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
    navigateTo('profile');
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h1 className="signup-title">Create your<br />PopX account</h1>
        
        <form onSubmit={handleSignup}>
          <div className="form-field">
            <label className="field-label" style={{ color: '#6200ee' }}>Full Name*</label>
            <input 
              type="text" 
              placeholder="Enter your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          
          <div className="form-field">
            <label className="field-label" style={{ color: '#6200ee' }}>Phone number*</label>
            <input 
              type="tel" 
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          
          <div className="form-field">
            <label className="field-label" style={{ color: '#6200ee' }}>Email address*</label>
            <input 
              type="email" 
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="form-field">
            <label className="field-label" style={{ color: '#6200ee' }}>Password*</label>
            <input 
              type="password" 
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="form-field">
            <label className="field-label" style={{ color: '#6200ee' }}>Company name</label>
            <input 
              type="text" 
              placeholder="Enter your company name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          
          <div className="form-field">
            <label className="field-label">Are you an Agency?*</label>
            <div className="radio-group">
              <div className="radio-option">
                <input 
                  type="radio" 
                  id="agency-yes" 
                  name="agency" 
                  checked={isAgency}
                  onChange={() => setIsAgency(true)}
                />
                <label htmlFor="agency-yes">Yes</label>
              </div>
              <div className="radio-option">
                <input 
                  type="radio" 
                  id="agency-no" 
                  name="agency" 
                  checked={!isAgency}
                  onChange={() => setIsAgency(false)}
                />
                <label htmlFor="agency-no">No</label>
              </div>
            </div>
          </div>
          
          <button type="submit" className="create-button">
            Create Account
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
            onClick={() => navigateTo('login')}
          >&lt;</button>
          <span className="page-indicator">3 of 4</span>
          <button 
            className="next-btn"
            onClick={() => navigateTo('profile')}
          >&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default SignupScreen;
