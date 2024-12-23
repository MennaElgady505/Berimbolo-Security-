import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './css/ProductLayout.css'; 
import services from './imgs/services.jpeg';
import alarms from './imgs/alarm.jpg';
import cameras from './imgs/camera.jpg';
import keyless from './imgs/keyless.jpg';
import { Link } from 'react-router-dom';

const products = [
  { title: 'Smart Locks', image: keyless },
  { title: 'Sensors', image: alarms },
  { title: 'Security Cameras', image: cameras },
  { title: 'Our Services', image: services },
];

const ProductLayout = () => {
  return (
    <div className="product-layout">
      <h2 className="title text-center text-white">Products</h2>
      <div className="product-grid">
        <Link to='/Products/SmartLocks'>
        <div className="product-card large">
          <img src={products[0].image} alt={products[0].title} className="product-image" />
          <h3 className="overlay-title">
             {products[0].title}<FontAwesomeIcon icon={faArrowRight} className="icon" />
          </h3>
        </div>
        </Link>
        <div className='small'>
        <Link to='/Products/Sensors'>
          <div className="product-card mb-5">
            <img src={products[1].image} alt={products[1].title} className="product-image-2" />
            <h3 className="overlay-title">
               {products[1].title}<FontAwesomeIcon icon={faArrowRight} className="icon" />
            </h3>
          </div>
          </Link>
          <Link to='/Products'>
          <div className="product-card mt-2">
            <img src={products[2].image} alt={products[2].title} className="product-image-2" />
            <h3 className="overlay-title">
               {products[2].title}<FontAwesomeIcon icon={faArrowRight} className="icon" />
            </h3>
          </div>
          </Link>
        </div>
        <Link to='/Services'>
        <div className="product-card large">
          <img src={products[3].image} alt={products[3].title} className="product-image" />
          <h3 className="overlay-title">
            {products[3].title}<FontAwesomeIcon icon={faArrowRight} className="icon" /> 
          </h3>
        </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductLayout;