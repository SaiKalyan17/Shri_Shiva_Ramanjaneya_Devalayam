import axios from 'axios';
import { useEffect, useState } from 'react';
import './UpdateEvent.css';
const API = import.meta.env.VITE_API_BASE_URL;
const UpdateEvent = () => {
    const[events,setEvents] = useState([]);
    const[formData,setFormData] = useState({eventName:'',date:'',description:''});
    const[editId,setEditId] = useState(null);
    useEffect(()=>{
        axios.get(`${API}/api/user/getAllevents`)
        .then(res=>setEvents(res.data))
        .catch(err=>console.log('Fetch Error',err));
    },[]);
    const handleChange = (e) => {
    setFormData(prev => ({ 
        ...prev, 
        [e.target.name]: e.target.value }));
    };
    const handleEdit = (event) => {
        setEditId(event._id);
        setFormData({
        eventName: event.eventName,
        date: event.date,
        description: event.description
        });
    };
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`${API}/api/admin/updateevent/${editId}`, formData);
            alert('Event updated successfully!');
            setEvents(events.map(ev => (ev._id === editId ? res.data : ev)));
        setEditId(null);
        } catch (err) {
            console.error('Update error:', err);
            alert('Failed to update the event');
        }
    };
    return (
            <div className="update-container">
            <h1 className="update-title">Update Events</h1>
            {events.map(event => (
            <div className="update-card" key={event._id}>
            {editId === event._id ? (
            <form className="update-form" onSubmit={handleUpdate}>
            <input name="eventName" value={formData.eventName} onChange={handleChange} required />
            <input name="date" type="date" value={formData.date} onChange={handleChange} required />
            <textarea name="description" rows="4" value={formData.description} onChange={handleChange} required />
            <button type="submit" className="update-btn">Save</button>
            <button type="button" className="cancel-btn" onClick={() => setEditId(null)}>Cancel</button>
            </form>
            ) : (
            <>
            <h2>{event.eventName}</h2>
            <p>Date: {event.date}</p>
            <p>{event.description}</p>
            <button onClick={() => handleEdit(event)} className="update-btn">Edit</button>
            </>
            )}
            </div>
            ))}
            </div>
            );
            };

export default UpdateEvent;
