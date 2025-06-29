import axios from 'axios';
import { useEffect, useState } from 'react';
import './Events.css';
const API = import.meta.env.VITE_API_BASE_URL;
const Events = () => {
    const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get(`${API}/api/user/getAllevents`)
    // axios.get('http://localhost:8989/api/user/getAllevents')
      .then(res => {
        setEvents(res.data);
      })
      .catch(err => {
        console.error('Error fetching data:', err);
        setEvents([]); 
      });
  }, []);
   return (
  <div className='event-container'>
    <h1 className='title'>Upcoming Event</h1>
    {events.map((event, index) => (
      <div className='event-details' key={index}>
        <h1 className='ename'> Event Name : {event.eventName} </h1>
        <h2> Date :{event.date}</h2>
        <div className='con2'>
        <h3>{event.description}</h3>
        {/* <h3>{event._id}</h3> */}

        </div>
      </div>
    ))}
  </div>
);
}
export default Events;
