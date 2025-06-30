import axios from 'axios';
import { useState } from 'react';
import qrcode from '../../assets/QrCode.png';
import './Donation.css'; // make sure CSS is imported

const API = import.meta.env.VITE_API_BASE_URL;
const Donations = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobileNumber: '',
        amount: ''
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
            const response = await axios.post(`${API}/api/user/donate`, formData); 
            console.log('Submitted successfully:', response.data);
            alert('Donation submitted successfully!');
            setFormData({ name: '', mobileNumber: '', amount: '' });
        } catch (err) {
            console.error('Error submitting donation:', err);
            alert('Something went wrong!');
        }
    };

    return (
        <div className='donation-box'>
            <h1>Donations</h1>
            <h2>For Donations Scan This QR Code And Fill the details</h2>
            <img src={qrcode} alt="Donation QR Code" />
            
            <form onSubmit={handleSubmit}>
                <div className="form-fields">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
                </div>

                <div className="form-fields">
                    <label>Mobile Number:</label>
                    <input type="tel"  name="mobileNumber"
                        value={formData.mobileNumber} onChange={handleChange} required/>
                </div>

                <div className="form-fields">
                    <label>Amount:</label>
                    <input type="number" name="amount" value={formData.amount}  onChange={handleChange} required />
                    
                </div>

                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default Donations;
