import axios from 'axios';
import { useEffect, useState } from 'react';
import './DeleteEvent.css';
const API = import.meta.env.VITE_API_BASE_URL;

const DeleteEvent = () => {
    const [events, setEvents] = useState([]);
        useEffect(() => {
        axios.get(`${API}/api/user/getAllevents`)
        .then(res => {
            setEvents(res.data);
        })
        .catch(err => {
            console.error('Error fetching data:', err);
            setEvents([]);
        });
    }, []);
    const handleDelete = async(id)=>{
        try{
            await axios.delete(`${API}/api/admin/deleteevent/${id}`);
            alert("Successfully Deleted");
            setEvents(prev => prev.filter(event => event._id !== id));
        }catch (err) {
            console.error('Delete error:', err);
            alert('Failed to delete the event');
        }
    }
return (
    <>
        <div className='delete-container'>
        <h1 className='title-1'>Upcoming Event</h1>
        {events.map((event, index) => (
        <div className='event-details-2' key={index}>
            <h1 className='ename-2'> Event Name : {event.eventName} </h1>
            <h2> Date :{event.date}</h2>
            <div className='con-2'>
            <h3>{event.description}</h3>
            {/* <h3>{event._id}</h3> */}
            <button onClick={() => handleDelete(event._id)} className='delete-btn'>
            Delete
            </button>
            </div>
        </div>
        ))}
    </div>
    </>
);
}

export default DeleteEvent;

// return (<>
//     
//     <Events />
//     </>
        
//     );