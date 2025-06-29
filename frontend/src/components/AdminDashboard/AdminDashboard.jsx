import { Link } from 'react-router-dom';
import profile from '../../assets/profile.png';
import './AdminDashboard.css';
const AdminDashboard = () => {
    const handleLogout = () => {
  localStorage.removeItem('token');
  window.location.href = '/admin/login';
};

    return (
        <div className='main-box'>
            <h1> Admin Dashboard </h1>
            <div className='admin-box' >
                <div className='profile'>
                <img src={profile} />
                <h2>UserName</h2>
                <h2>Password</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>
            <div className='sub-box'>
                <div className='events-block'>
                    <button><Link to='/createevent'>Create Event </Link></button>
                    <button><Link to='/updateevent'>Update Event </Link></button>
                    <button><Link to='/deleteevent'>Delete Event </Link></button>
            </div>
            <div className='queries-box'>
                <button><Link to='/adminquery'>Show Questions</Link></button>
                <button><Link to='/adminregister'>Add Admin</Link></button>
                <button><Link to='/admindonation'>Check Donations</Link></button>
            </div>
            </div>
            </div>
        </div>
    );
}

export default AdminDashboard;

