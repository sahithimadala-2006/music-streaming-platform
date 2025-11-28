// src/pages/Login.js
import React from 'react';
import LoginForm from '../components/LoginForm';
import '../components/Form.css';

function Login() {
  return (
    <div className="form-wrapper">
      <LoginForm
        onLoginSuccess={(user) => {
          if (user?.email) {
            localStorage.setItem('userEmail', user.email);
            console.log('Login successful:', user.email);
            window.location.href = '/choose-language';
          } else {
            console.warn('Login succeeded but no email found');
          }
        }}
      />
    </div>
  );
}

export default Login;