import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; 

import './css/Header.css'; 
import img from './imgs/logo.png';

const Nav = ({ cart }) => {
  return (
    <header className="container-fluid bg-light gradient position-sticky sticky-top">
      <div className="row align-items-center py-2">
        <div className="col-md-3 text-center text-md-left">
          <Link to='/'>
            <img src={img} alt="Berimbolo Security" className="logo img-fluid" />
          </Link>
        </div>
        <div className="col-md-9">
          <nav className="navbar navbar-expand-md navbar-light">
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarNav" 
              aria-controls="navbarNav" 
              aria-expanded="false" 
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                  <Link className="nav-link nav-custom-link" to="/Products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-custom-link" to="/ContactUs">Contact Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-custom-link" to="/Services">Services</Link>
                </li>
              </ul>
              <Link className="btn btn-dark rounded-pill pe-4 ps-4" to='/SignUp'>Sign Up</Link>
              <Link className="nav-link cart-icon ms-3" to="/Cart">
                <FaShoppingCart size={24} />
                {cart.length > 0 && (
                  <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Nav;
