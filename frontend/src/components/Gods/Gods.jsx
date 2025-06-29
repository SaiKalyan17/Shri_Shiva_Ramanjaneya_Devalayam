import './Gods.css';
import data from './godData.js';

const Gods = () => {
return (
    <div className='container'>
      {data.map((item, index) => (
        <div className='details' key={index}>
          <img className='img-block' src={item.image} alt={item.name} />
          <div className='content' >
            <h2>{item.name}</h2>
            <p>{item.des}</p>
            <h2>{item.pooja}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Gods;