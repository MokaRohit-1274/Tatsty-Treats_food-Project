import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div id='footer' className='footer'>
        <div className='footer-content'>
            <div className="footer-content-left">
                <img src={assets.logo} alt="Logo"/>
                <p>Food Order</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook} alt="Facebook" />
                    <img src={assets.twitter} alt="Twitter" />
                    <img src={assets.insta} alt="Instagram" />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>*1-293749393746</li>
                    <li>contact@treaty.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copy-right'>© 2024 Food Order. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
