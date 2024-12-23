import React from 'react';
import './css/cards.css';
import lock1 from './imgs/lock1.webp';
import lock2 from './imgs/lock2.webp';
import lock3 from './imgs/lock3.webp';
import lock4 from './imgs/lock4.webp';
import lock5 from './imgs/lock5.webp';
import lock6 from './imgs/lock6.webp';
import lock7 from './imgs/lock7.webp';
import lock8 from './imgs/lock8.webp';
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

function SmartLocks({ addToCart }) {
  const products = [
    { imageSrc: lock1, title: 'Video Smart Lock E330', price: 280 },
    { imageSrc: lock2, title: 'Smart Lock S230', price: 260 },
    { imageSrc: lock3, title: 'Smart Lock C210', price: 100 },
    { imageSrc: lock4, title: 'Smart Lock C220', price: 150 },
    { imageSrc: lock5, title: 'Smart Lock C210 (Nickle)', price: 100 },
    { imageSrc: lock6, title: 'eufy Smart Lock C33', price: 160 },
    { imageSrc: lock7, title: 'eufy Smart Lock C33 (Nickle)', price: 160 },
    { imageSrc: lock8, title: 'Smart Lock C220', price: 150 },
  ];

  return (
    <div className="products-container container py-5">
      <h2 className="text-center text-white mb-4 product-title">Products</h2>
      <div className="product-categories d-flex justify-content-center mb-4">
        <Link className="mx-3 text-decoration-none text-white h5" to="/Products">Security Cameras</Link>
        <Link className="mx-3 text-decoration-none text-white h5" to="/Products/Sensors">Sensors</Link>
        <Link className="mx-3 text-decoration-none text-white h4" to="/Products/SmartLocks">Smart Locks</Link>
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
    </div>
  );
}

export default SmartLocks;
