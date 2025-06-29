import React, { useState,useEffect } from 'react';
import axios from 'axios';
const API = import.meta.env.VITE_API_BASE_URL;
const AdminDonation = () => {
    const [donation,setDontation] = useState([]);

    useEffect(() => {
        axios.get(`${API}/api/admin/getdonations`)
        // axios.get('http://localhost:8989/api/user/getAllevents')
        .then(res => {
            setDontation(res.data);
        })
        .catch(err => {
            console.error('Error fetching data:', err);
            setDontation([]); 
        });
    }, []);
 return (
        <div className="admin-donation-box">
            <h2>Donation Records</h2>
            {donation.length === 0 ? (
                <p>No donations found.</p>
            ) : (
                <table className="donation-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mobile Number</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donation.map((don, index) => (
                            <tr key={index}>
                                <td>{don.name}</td>
                                <td>{don.mobileNumber}</td>
                                <td>₹{don.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AdminDonation;
