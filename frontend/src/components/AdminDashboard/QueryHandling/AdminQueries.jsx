import axios from 'axios';
import { useEffect, useState } from 'react';
import './AdminQueries.css';

const API = import.meta.env.VITE_API_BASE_URL;

const AdminQueries = () => {
    const [queries, setQueries] = useState([]);

    useEffect(() => {
        axios.get(`${API}/api/admin/getAllQueries`)
            .then(res => {
                setQueries(res.data);
            })
            .catch(err => {
                console.error('Error fetching queries:', err);
                setQueries([]);
            });
    }, []);

    return (
        <div className="admin-queries-box">
            <h2>User Queries</h2>
            {queries.length === 0 ? (
                <p>No queries found.</p>
            ) : (
                <table className="query-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mobile Number</th>
                            <th>Query</th>
                        </tr>
                    </thead>
                    <tbody>
                        {queries.map((q, index) => (
                            <tr key={index}>
                                <td>{q.name}</td>
                                <td>{q.mobileNumber}</td>
                                <td>{q.Inquiry}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default AdminQueries;
