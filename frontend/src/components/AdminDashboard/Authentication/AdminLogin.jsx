import axios from 'axios';
import { useState } from 'react';
import './AdminLogin.css'; // Optional CSS styling
const API = import.meta.env.VITE_API_BASE_URL;

const AdminLogin = () => {
  const [formData, setFormData] = useState({ mobileNumber: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post(`${API}/api/admin/login`, formData);

      const token = response.data.token;
      localStorage.setItem('token', token);

      setSuccess('Login successful!');
      setFormData({ mobileNumber: '', password: '' });

      // Redirect if needed
      window.location.href = "/admin/dashboard";
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>mobileNumber:</label>
        <input type="Number" name="mobileNumber" value={formData.email} onChange={handleChange} required />

        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />

        <button type="submit">Login</button>

        {error && <p className="error-msg">{error}</p>}
        {success && <p className="success-msg">{success}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
