import axios from 'axios';
import { useState } from 'react';
import './CreateEvents.css';
const API = import.meta.env.VITE_API_BASE_URL;

const CreateEvents = () => {
  const [eventData, setEventdata] = useState({
    eventName: '',
    date: '',
    description: ''
  });

  const handleChange = (e) => {
    setEventdata(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${API}/api/admin/createevent`, eventData);
      console.log('Submitted successfully:', res.data);
      alert('Event submitted successfully!');
      setEventdata({ eventName: '', date: '', description: '' });
    } catch (err) {
      console.error('Error submitting form:', err);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="query-box">
      <h1>Create a New Event</h1>
      <form className="form-section" onSubmit={handleSubmit}>
        <div className="form-fields">
          <label>Event Name:</label>
          <input
            type="text"
            name="eventName"
            value={eventData.eventName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-fields">
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-fields">
          <label>Description:</label>
          <textarea
            name="description"
            value={eventData.description}
            onChange={handleChange}
            rows="4"
            placeholder="Describe the event..."
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default CreateEvents;
