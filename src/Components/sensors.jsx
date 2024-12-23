import React from 'react';
import './css/cards.css';
import sensor1 from './imgs/sensor1.webp';
import sensor2 from './imgs/sensor2.webp';
import sensor3 from './imgs/sensor3.webp';
import sensor4 from './imgs/sensor4.webp';
import sensor5 from './imgs/sensor5.webp';
import sensor6 from './imgs/sensor6.webp';
import sensor7 from './imgs/sensor7.webp';
import sensor8 from './imgs/sensor8.webp';
import { Link } from 'react-router-dom';

function ProductCard({ imageSrc, title, price, addToCart }) {
  return (
    <div className="product-card2 card shadow-sm h-100 w-100">
      <img src={imageSrc} alt={title} className="card-img-top" />
      <div className="card-body d-flex flex-column justify-content-between text-center">
        <div>
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-success">${price}</p>
        </div>
        <button onClick={addToCart} className="btn btn-dark add">Add to cart</button>
      </div>
    </div>
  );
}

function Sensors({ addToCart }) {
  const products = [
    { imageSrc: sensor1, title: 'eufy Water and Freeze Sensor with Remote Alerts', price: 24.5 },
    { imageSrc: sensor2, title: 'eufy Security Siren (105 dB Wireless Alarm', price: 40 },
    { imageSrc: sensor3, title: 'HomeBase S380 (HomeBase 3)', price: 150 },
    { imageSrc: sensor4, title: 'eufy Security Smoke and Carbon Monoxide Alarm', price: 40 },
    { imageSrc: sensor5, title: 'eufy Security Siren (105 dB Wireless Alarm)', price: 45 },
    { imageSrc: sensor6, title: '5-Piece Home Alarm Kit', price: 160 },
    { imageSrc: sensor7, title: 'Entry Sensor', price: 30 },
    { imageSrc: sensor8, title: 'Motion Sensor', price: 30 },
  ];

  return (
    <div className="products-container container py-5">
      <h2 className="text-center text-white mb-4 product-title">Products</h2>
      <div className="product-categories d-flex justify-content-center mb-4">
        <Link className="mx-3 text-decoration-none text-white h5" to="/Products">Security Cameras</Link>
        <Link className="mx-3 text-decoration-none text-white h4" to="/Products/Sensors">Sensors</Link>
        <Link className="mx-3 text-decoration-none text-white h5" to="/Products/SmartLocks">Smart Locks</Link>
      </div>
      <div className="products-list row justify-content-center">
        {products.map((product, index) => (
          <div className="col-md-3 col-sm-6 col-12 mb-4" key={index}>
            <ProductCard
              imageSrc={product.imageSrc}
              title={product.title}
              price={product.price}
              addToCart={() => addToCart(product)}
            />
          </div>
        ))}
      </div>
      <Link to="/cart">
        <button className="btn btn-light add">View Cart</button>
      </Link>
    </div>
  );
}

export default Sensors;
