import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer_1">
          <h2>Get in Touch</h2>
          <h3>Don't miss any updates from us !!</h3>
          <form action="" className='footer_form'>
            <input type="email" name="footer_email" id="footer_email" placeholder='Email'/>
            <button name='footer_button'> Subscribe </button>
          </form>
        </div>
        <div className="footer_2">
          <h2>Useful Links</h2>
          <div className="footer_2_inside">
            <h3>Home</h3>
            <h3>About Us</h3>
            <h3>Contact Us</h3>
            <h3>Gallery</h3>
          </div>
        </div>
        <div className="footer_3">
          <h2>Help</h2>
          <div className="footer_3_inside">
            <h3>FAQ</h3>
            <h3>Terms and Conditions</h3>
            <h3>Reporting</h3>
            <h3>Documentation</h3>
            <h3>Support Policy</h3>
            <h3>Privacy</h3>
          </div>
        </div>
        <div className="footer_4">
          <h2>Follow Us</h2>
          <div className="footer_4_inside">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-pinterest"></i>
          </div>
        </div>
      </div>
      <div class="footer_bg">
            <div class="footer_bg_one"></div>
            <div class="footer_bg_two"></div>
      </div>
    </>
  );
};

export default Footer;
