// src/pages/LanguageChoicePage.js
import React, { useState, useEffect } from 'react';
import './LanguageChoicePage.css';
import { useNavigate } from 'react-router-dom';

const LanguageChoicePage = () => {
  const navigate = useNavigate();
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [email, setEmail] = useState('');

  const languages = [
    'తెలుగు', 'தமிழ்', 'हिन्दी', 'ಕನ್ನಡ', 'മലയാളം', 'English',
    'मराठी', 'ଓଡ଼ିଆ', 'বাংলা', 'ਪੰਜਾਬੀ', 'ગુજરાતી',
    'অসমীয়া', 'कोंकणी', 'ढाकणी', 'भोजपुरी', 'संस्कृत',
    'उर्दू', 'मैथिली', 'नेपाली'
  ];

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      console.warn('No userEmail found in localStorage');
    }
  }, []);

  const toggleLanguage = (lang) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang) ? prev.filter(l => l !== lang) : [...prev, lang]
    );
  };

  const handleNext = async () => {
    if (selectedLanguages.length === 0) {
      alert('Please select at least one language.');
      return;
    }

    if (!email) {
      alert('User email not found. Please login again.');
      return;
    }

    const languageString = selectedLanguages.join(',');
    localStorage.setItem('sessionLanguage', languageString);

    try {
      const response = await fetch('http://localhost:8081/api/user/language', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, language: languageString })
      });

      if (!response.ok) {
        throw new Error('Failed to update language');
      }

      console.log('Language updated:', languageString);
      navigate('/artist-selection');
    } catch (error) {
      console.error('Error updating language:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="language-choice-container">
      <h1 className="page-title">🎧 Which language do you want to listen?</h1>

      <div className="language-checkbox-grid">
        {languages.map((lang) => (
          <label key={lang} className="language-checkbox">
            <input
              type="checkbox"
              checked={selectedLanguages.includes(lang)}
              onChange={() => toggleLanguage(lang)}
            />
            <span>{lang}</span>
          </label>
        ))}
      </div>

      <div className="button-wrapper">
        <button className="next-button" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default LanguageChoicePage;