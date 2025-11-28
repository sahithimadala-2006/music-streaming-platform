// src/components/LoginForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import './Form.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/user/login', formData);
      const { message, username, language } = response.data;

      alert(message || 'Login successful!');
      localStorage.setItem('userEmail', formData.email);
      localStorage.setItem('username', username);

      if (language) {
        localStorage.setItem('sessionLanguage', language);
        navigate('/home');
      } else {
        navigate('/choose-language');
      }
    } catch (err) {
      let errorMessage = 'Login failed. Please try again.';
      if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      }
      alert(errorMessage);
      console.error('Login error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;