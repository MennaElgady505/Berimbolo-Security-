import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cart, removeFromCart }) {
  return (
    <div className="container py-5">
      <h2 className="text-center text-white mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-white">Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item d-flex justify-content-between mb-3 bg-white rounded ">
              <div className="d-flex ">
                <img src={item.imageSrc} alt={item.title} style={{ width: '100px', height: 'auto', marginRight: '20px' }} />
                <div>
                  <p>{item.title}</p>
                  <p className="text-success">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item)}
                className="btn btn-danger btn-sm"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="d-flex justify-content-between">
            <Link to="/Products">
              <button className="btn btn-light">Continue Shopping</button>
            </Link>
            <button className="btn btn-success">Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

