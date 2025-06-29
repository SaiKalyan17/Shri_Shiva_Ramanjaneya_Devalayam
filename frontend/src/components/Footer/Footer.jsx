// import ig from '../../assets/instagram.png';
// import logo from '../../assets/logo2.png';
// import wa from '../../assets/whatsapp.png';
// import yt from '../../assets/youtube.png';
// import './Footer.css';

// const Footer = () => {
//     return (
//         <div className='footer-box'>
//     <img className='logo' src={logo} alt='Logo' />

//     <div className='link-box'>
//         <div className='icons'>
//             <img src={wa} alt='WhatsApp' />
//             <h4>Whatsapp</h4>
//         </div>
//         <div className='icons'>
//             <img src={ig} alt='Instagram' />
//             <h4>Instagram</h4>
//         </div>
//         <div className='icons'>
//             <img src={yt} alt='YouTube' />
//             <h4>YouTube</h4>
//         </div>
//     </div>
//     <div className='info-box'>
//         <h2>Acharya</h2>
//         <h2>Srinatha Charyulu</h2>
//         <h2>8185858998</h2>
//     </div>
// </div>

//     );
// }

// export default Footer;


import ig from '../../assets/instagram.png';
import logo from '../../assets/logo2.png';
import wa from '../../assets/whatsapp.png';
import yt from '../../assets/youtube.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-left">
        <img className='footer-logo' src={logo} alt='Temple Logo' />
        <h3 className='footer-title'>Shri Shiva Ramanjaneya</h3>
      </div>

      <div className="footer-center">
        <div className='footer-icon'>
          <img src={wa} alt='WhatsApp' />
          <span><a href="https://wa.me/918185858998" target="_blank" rel="noopener noreferrer"></a>
              WhatsApp
              </span>
        </div>
        <div className='footer-icon'>
          <img src={ig} alt='Instagram' />
          <span>Instagram</span>
        </div>
        <div className='footer-icon'>
          <img src={yt} alt='YouTube' />
          <span>
          <a href='https://youtube.com/@shrishivaramanjaneyadevalayam?si=31IZi6uTWnN36eqd' target="_blank" rel="noopener noreferrer">
          YouTube </a>
          </span>
        </div>
      </div>

      <div className="footer-right">
        <p>Acharya Srinatha Charyulu</p>
        <p>📞 8185858998</p>
      </div>
      <div className="footer-bottom">
  <p>&copy; {new Date().getFullYear()} Shri Shiva Ramanjaneya Devalayam. All rights reserved.</p>
</div>
    
    </footer>
  );
};

export default Footer;
