import axios from 'axios';
import { useState } from 'react';
import './QueryForm.css';
const API = import.meta.env.VITE_API_BASE_URL;
const QueryForm = () => {
    const [formData, setFormData] = useState({name: '',mobileNumber: '',Inquiry: ''});

    const handleChange = (e) => {
    setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }));
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(`${API}/api/user/query`, formData);
        console.log('Submitted successfully:', response.data);
        alert('Query submitted successfully!');
        setFormData({ name: '', mobileNumber: '', Inquiry: '' });
    } catch (err) {
        console.error('Error submitting form:', err);
        alert('Something went wrong!');
    }
    };
    return (
    <div className="query-box">
        <h1>Need Information?</h1>
        <form className="form-section" onSubmit={handleSubmit}>
        <div className="form-fields">
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-fields">
            <label>Mobile Number:</label>
            <input type="number" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required/>
        </div>
        <div className="form-fields">
            <label>Query:</label>
            <textarea name="inquiry" value={formData.Inquiry} onChange={handleChange} rows="4" placeholder="Type your query here..." required/>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
        </form>
    </div>
);
};

export default QueryForm;
