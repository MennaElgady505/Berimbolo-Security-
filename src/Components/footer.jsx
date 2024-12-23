import React from 'react';
import './css/footer.css';
import img from './imgs/logou.png';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer pe-4 ps-4 mt-5">
      <div className="container-fluid px-4">
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center text-lg-start mb-4">
            <img src={img} alt="Logo" className="footer-logo" />
            <p className="mt-3 footer-description">
              Advanced Security Solutions for <br /> a Safer Tomorrow.
            </p>
            <div className="social-icons mt-4">
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 text-center text-lg-start mb-4 footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/Products">Products</Link></li>
              <li><Link to='Services'>Our Services</Link></li>
              <li><Link to="/ContactUs">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-lg-5 col-md-12 text-center text-lg-start mb-4">
            <h4>Contact Us</h4>
            <p><i className="fas fa-envelope"></i> contact@berimbolosecurity.com</p>
            <p><i className="fas fa-map-marker-alt"></i> 1234 Sentinel Drive, Suite 101, Springfield, USA 62704</p>
            <p><i className="fas fa-phone"></i> +1 (555) 019-2837</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Berimbolo Security. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
