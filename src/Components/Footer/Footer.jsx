import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="footer_logo">
        {/* <img src={footer_logo} alt="" /> */}
        <h1>SHOPPER</h1>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          {/* <img src={instagram_icon} alt="" /> */}
        </div>
        <div className="footer-icons-container">
          {/* <img src={pintester_icon} alt="" /> */}
        </div>
        <div className="footer-icons-container">
          {/* <img src={whatsapp_icon} alt="" /> */}
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
