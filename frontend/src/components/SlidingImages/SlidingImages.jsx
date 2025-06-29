import { useEffect, useState } from 'react';
import img1 from './Images/img1.jpg';
import img11 from './Images/img11.jpeg';
import img2 from './Images/img2.jpg';
import img22 from './Images/img22.jpeg';
import img3 from './Images/img3.jpg';
import img33 from './Images/img33.jpeg';
import img4 from './Images/img4.jpg';
import img44 from './Images/img44.jpeg';
import img5 from './Images/img5.jpg';
import img55 from './Images/img55.jpeg';
import './SlidingImages.css';
const images = [img11,img22,img33,img44,img55,img1,img2,img3,img4,img5]

const SlidingImages = () =>{
    const [current,setCurrent] = useState(0);
    useEffect(() => {
    const interval = setInterval(() => {
    setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const nextSlide =()=>{
        setCurrent((prev) => (prev + 1) % images.length);
    }
    const prevSlide =()=>{
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    }
    return(
        <div className='sliding-box'>
         <img src={images[current]} alt="slide" />
            <div className='btn-grp'>
            <button className="slide-btn prev" onClick={prevSlide}> {'<'}</button> 
            <button className="slide-btn next" onClick={nextSlide}>{'>'}</button>
            </div>
        </div>
    )
}

export default SlidingImages;