import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AuthPage.css'; // Create this file next

const AuthPage = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <button className="btn auth-btn" onClick={() => navigate('/signup')}>Sign Up</button>
      <button className="btn auth-btn" onClick={() => navigate('/login')}>Login</button>
    </div>
  );
};

export default AuthPage;