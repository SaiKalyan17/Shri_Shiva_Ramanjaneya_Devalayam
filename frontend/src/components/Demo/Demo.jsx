import axios from 'axios';
import { useState } from 'react';
import './Demo.css';

const Demo = () => {

  const[data, setData] = useState({
    name:'',
    mobileNumber:'',
    Inquiry:''
  });
  const handleChange = (e) => {
    setData(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }));
    };
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const res = await axios.post('http://localhost:8989/api/user/query/',data);
      console.log("Data is ",res)
      alert(' Data Submitted Successfully')
    }catch(err){
      console.error('Error submitting form:', err);
      alert('Something went wrong!');
    }
    
  }
  return (
    <div className="query-box">
        <h1>Need Information?</h1>
        <form className="form-section" onSubmit={handleSubmit}>
        <div className="form-fields">
            <label>Name:</label>
            <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            required
            />
        </div>
        <div className="form-fields">
            <label>Mobile Number:</label>
            <input
            type="number"
            name="mobileNumber"
            value={data.mobileNumber}
            onChange={handleChange}
            required
            />
        </div>
        <div className="form-fields">
            <label>Query:</label>
            <textarea
            name="Inquiry"
            value={data.Inquiry}
            onChange={handleChange}
            rows="4"
            placeholder="Type your query here..."
            required
            />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
        </form>
    </div>
  );
}

export default Demo;
