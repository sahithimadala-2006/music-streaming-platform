// src/pages/Home.js
import React, { useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const username = localStorage.getItem('username') || 'Guest';

  useEffect(() => {
    const timer = setTimeout(() => {
      // Optional: auto-navigate after delay
      // navigate('/choose-language');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleNext = () => {
    navigate('/choose-language');
  };

  return (
    <div className="home-container">
      <h1 className="home-title">🎶 Welcome to BeatMosaic, {username}!</h1>
      <p className="home-subtitle">Click below to continue your music journey.</p>
      <button className="next-button" onClick={handleNext}>Next</button>
    </div>
  );
}

export default Home;