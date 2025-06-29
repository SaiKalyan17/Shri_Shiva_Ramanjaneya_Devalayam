import axios from 'axios';
import { useState } from 'react';
import './AdminRegistration.css';

const API = import.meta.env.VITE_API_BASE_URL;

const AdminRegistration = () => {
  const [formData, setFormData] = useState({
    userName: '',
    mobileNumber: '',
    password: '',
    role: 'admin'
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/api/admin/register`, formData);
      alert('Admin registered successfully!');
      console.log(res.data);
      setFormData({ userName: '', mobileNumber: '', password: '', role: 'admin' });
    } catch (error) {
      console.error(error);
      alert('Registration failed.');
    }
  };

  return (
    <div className="admin-registration-box">
      <h2>Admin Registration</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-field">
          <label>Username</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label>Mobile Number</label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="register-btn">Register</button>
      </form>
    </div>
  );
};

export default AdminRegistration;
