import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/beat Mosaic.png';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('English');

  const handleNext = () => {
    localStorage.setItem('preferredLanguage', language);
    navigate('/auth');
  };

  return (
    <div className="landing-container">
      <img src={logo} alt="BeatMosaic Logo" className="app-logo" />

      <div className="language-selector">
        <label htmlFor="language">Choose Language:</label>
        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option>English</option>
          <option>Telugu</option>
          <option>Tamil</option>
          <option>Hindi</option>
          <option>Malayalam</option>
          <option>Kannada</option>
        </select>
      </div>

      <button className="btn next" onClick={handleNext}>Next</button>
    </div>
  );
};

export default LandingPage;