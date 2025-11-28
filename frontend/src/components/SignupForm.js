// src/components/SignupForm.js
import React, { useState } from 'react';
import api from '../services/api';
import './Form.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

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
      const response = await api.post('/user/signup', formData);

      const successMessage =
        response.data?.message ||
        `${response.data?.username || 'User'} signed up successfully!`;

      alert(successMessage);

      // Optional: redirect to login or dashboard
      // window.location.href = '/login';
    } catch (err) {
      let errorMessage = 'Signup failed. Please try again.';

      if (err.response?.data?.message) {
        errorMessage = err.response.data.message;
      } else if (typeof err.response?.data === 'string') {
        errorMessage = err.response.data;
      }

      alert(errorMessage);
      console.error('Signup error:', err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        required
      />
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
      <button type="submit">Create Account</button>
    </form>
  );
};

export default SignupForm;