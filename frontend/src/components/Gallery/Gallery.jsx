import './Gallery.css';

// Import your images

import img3 from '../../assets/newTemplePics/Navagraha.jpeg';
import img6 from '../../assets/newTemplePics/Tree1.jpeg';
import img7 from '../../assets/newTemplePics/Tree2.jpeg';
import img4 from '../../assets/newTemplePics/pooja2.jpeg';
import img2 from '../../assets/newTemplePics/pooja3.jpeg';
import img1 from '../../assets/newTemplePics/templeEntrance.jpeg';
import img8 from '../../assets/newTemplePics/templeView2.jpeg';
import img5 from '../../assets/newTemplePics/templeview.jpeg';
const images = [
  { src: img1, caption: 'Temple Entrance' },
  { src: img2, caption: 'Main Deity' },
  { src: img3, caption: 'NavaGrahaalu' },
  { src: img4, caption: 'Night Lighting' },
  { src: img5, caption: 'Temple View' },
  { src: img6, caption: 'Marri Chettu' },
  { src: img7, caption: 'Chettlu' },
  { src: img8, caption: 'Night Lighting' },
];


const Gallery = () => {
    return (
        <div className="gallery-container">
            <h2 className="gallery-title">Image Gallery</h2>
            <div className="gallery-grid">
  {images.map((image, index) => (
    <div key={index} className="gallery-item">
      <img src={image.src} alt={`gallery-${index}`} />
      <p className="image-caption">{image.caption}</p>
    </div>
  ))}
</div>

        </div>
    );
};

export default Gallery;
