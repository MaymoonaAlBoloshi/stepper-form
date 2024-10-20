import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';

const Page1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
  });
  const navigate = useNavigate(); 
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password.length < 8) {
      setError(true);
    } else {
      setError(false);
      navigate('/page2');
    }
  };

  return (
    <div className="form-content">
    <div className="form-header">
      <h2>Personal info</h2>
      <p>Please provide your name, email address, phone number, and set a password.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          name="name" 
          type="text"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          required={true}
          placeholder="Enter your name"
        />
        <Input
          type="email"
          name="email"
          label="Email Address"
          value={formData.email}
          onChange={handleChange}
          required={true}
          placeholder="name@domain.com"
        />
        <Input
          type="tel"
          name="phone" 
          label="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required={true}
          placeholder="e.g. +1 234 567 890"
        />
        <Input
          type="password"
          name="password" 
          label="Password"
          value={formData.password}
          onChange={handleChange}
          required={true}
          placeholder="Enter your password"
        />

        {error && <span className="error">Password must be at least 8 characters long</span>}

        <div className="form-footer">
          <button type="submit">Next Step</button>
        </div>
      </form>
    </div>
  );
};

export default Page1;