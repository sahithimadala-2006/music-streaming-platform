import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AuthPage from './pages/AuthPage';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import LanguageChoicePage from './pages/LanguageChoicePage'; // ✅ Import this
import Home from './pages/Home';
import ArtistSelectionPage from './pages/ArtistSelectionPage';
import MusicFeed from './pages/MusicFeed';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/choose-language" element={<LanguageChoicePage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/artist-selection" element={<ArtistSelectionPage />} />
        <Route path="/music-feed" element={<MusicFeed />} />
      </Routes>
    </Router>
  );
}

export default App;