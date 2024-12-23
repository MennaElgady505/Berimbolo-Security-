import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cart, removeFromCart }) {
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    if (cart.length > 0) {
      alert('Thank you for your purchase! Your order has been placed.');
    } else {
      alert('Your cart is empty. Add items before checking out.');
    }
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-white mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-white">Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item d-flex justify-content-between mb-3 bg-white rounded">
              <div className="d-flex">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  style={{ width: '100px', height: 'auto', marginRight: '20px' }}
                />
                <div>
                  <p>{item.title}</p>
                  <p className="text-success">${item.price.toFixed(2)}</p>
                </div>
              </div>
              <button onClick={() => removeFromCart(item)} className="btn btn-danger btn-sm">
                Remove
              </button>
            </div>
          ))}
          <div className="d-flex justify-content-between align-items-center mt-4">
            <h5 className="text-white">Total: ${totalPrice.toFixed(2)}</h5>
            <div>
              <Link to="/Products">
                <button className="btn btn-light me-2">Continue Shopping</button>
              </Link>
              <button className="btn btn-success" onClick={handleCheckout}>Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
