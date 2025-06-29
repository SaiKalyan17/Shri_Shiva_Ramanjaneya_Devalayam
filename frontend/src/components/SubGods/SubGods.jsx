import g5 from '../../assets/newTemplePics/GanapatiM.jpeg';
import g6 from '../../assets/newTemplePics/KalaBhairavaM.jpeg';
import g7 from '../../assets/newTemplePics/Subramanya.jpeg';
import './SubGods.css';
const data = [
    {
        name: "SubramanyaSwamy",
        image: g7,
        pooja: "Every Shashti Panchamrutha Abhishekam"
    },
    {
        name: "Kaala Bhairava",
        image: g6,
        pooja: "Every Amavasya Kushmanda Deepam"
    },
    {
        name: "Ganapathi",
        image: g5,
        pooja: "Tuesday Panchamrutha Abhishekam"
    },
];

const SubGods = () => {
    return (
        <div className='god-box'>
            {data.map((item, index) => (
                <div className='subgod-cards' key={index}>
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                    <h3>{item.pooja}</h3>
                </div>
            ))}
        </div>
    );
};

export default SubGods;
