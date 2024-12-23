import React from 'react';
import './css/cards.css';
import camera1 from './imgs/camera1.jpeg';
import camera2 from './imgs/camera2.jpg';
import camera3 from './imgs/camera3.jpg';
import camera4 from './imgs/camera4.jpeg';
import camera5 from './imgs/camera5.jpg';
import camera6 from './imgs/camera6.jpeg';
import camera7 from './imgs/camera7.jpg';
import camera8 from './imgs/camera8.jpeg';
import { Link } from 'react-router-dom';

function ProductCard({ imageSrc, title, price, addToCart }) {
  return (
    <div className="product-card2 card shadow-sm">
      <img src={imageSrc} alt={title} className="card-img-top" />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-success">${price}</p>
        <button onClick={addToCart} className="btn btn-dark add">Add to cart</button>
      </div>
    </div>
  );
}

function Cameras({ addToCart }) {
  const products = [
    { imageSrc: camera1, title: 'Advision Analog Wired Indoor Dome Camera', price: 19 },
    { imageSrc: camera2, title: 'Xiaomi C200 Wireless Indoor Security Camera', price: 47 },
    { imageSrc: camera3, title: 'SkyWorth H50 Pro Wireless Indoor Dome Camera', price: 34 },
    { imageSrc: camera4, title: 'Advision Analog Wired Bullet Security Camera', price: 15 },
    { imageSrc: camera5, title: 'SkyWorth Wireless Outdoor Dome Security Camera', price: 67 },
    { imageSrc: camera6, title: 'Advision Smart Connection Bullet Security Camera', price: 45 },
    { imageSrc: camera7, title: 'Xiaomi Mi Home Security Camera', price: 34 },
    { imageSrc: camera8, title: 'Advision Analog Wired Bullet Security Camera', price: 35 },
  ];

  return (
    <div className="products-container container py-5">
      <h2 className="text-center text-white mb-4 product-title">Products</h2>
      <div className="product-categories d-flex justify-content-center mb-4">
        <Link className="mx-3 text-decoration-none text-white h4" to="/Products">Security Cameras</Link>
        <Link className="mx-3 text-decoration-none text-white h5" to="/Products/Sensors">Sensors</Link>
        <Link className="mx-3 text-decoration-none text-white h5" to="/Products/SmartLocks">Smart Locks</Link>
      </div>
      <div className="products-list row justify-content-center">
        {products.map((product, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <ProductCard
              imageSrc={product.imageSrc}
              title={product.title}
              price={product.price}
              addToCart={() => addToCart(product)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cameras;

