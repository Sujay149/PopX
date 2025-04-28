// App.js
import React, { useState } from 'react';
import './App.css';
// If you renamed to .jsx
import LandingPage from './pages/LandingPage.jsx';
import LoginScreen from './pages/LoginScreen.jsx';
import SignupScreen from './pages/SignupScreen.jsx';
import ProfileScreen from './pages/ProfileScreen.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage navigateTo={setCurrentPage} />;
      case 'login':
        return <LoginScreen navigateTo={setCurrentPage} />;
      case 'signup':
        return <SignupScreen navigateTo={setCurrentPage} />;
      case 'profile':
        return <ProfileScreen navigateTo={setCurrentPage} />;
      default:
        return <LandingPage navigateTo={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      {renderPage()}
    </div>
  );
}

export default App;