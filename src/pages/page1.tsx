// src/pages/Page1.tsx
import React, { useState } from 'react';
import Input from '../components/Input';

const Page1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate the fields here, e.g., check if passwords match
    if (formData.password !== formData.confirmPassword || formData.password.length < 8) {
      setError(true);
    } else {
      setError(false);
      // Handle successful form submission
    }
  };

  return (
    <div className="form-container">
      <h2>Personal info</h2>
      <p>Please provide your name, email address, phone number, and set a password.</p>

      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          required={true}
          placeholder="Enter your name"
        />
        <Input
          type="email"
          label="Email Address"
          value={formData.email}
          onChange={handleChange}
          required={true}
          placeholder="name@domain.com"
        />
        <Input
          type="tel"
          label="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required={true}
          placeholder="e.g. +1 234 567 890"
        />
        <Input
          type="password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
          required={true}
          placeholder="Enter your password"
        />
        
        {error && <span className="error">Passwords do not match or are less than 8 characters</span>}
        
        <div className="form-footer">
          <button type="submit">Next Step</button>
        </div>
      </form>
    </div>
  );
};

export default Page1;