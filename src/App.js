import React, { useState } from 'react';
import {Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Mainpage from './Components/mainpage';
import ProductLayout from './Components/products';  
import AboutUs from './Components/Aboutus';
import Footer from './Components/footer';
import Cameras from './Components/cameras';
import ContactForm from './Components/contactus';
import SignUp from './Components/signup';
import LogIn from './Components/login';
import Cart from './Components/cart';  
import './App.css'
import Sensors from './Components/sensors';
import SmartLocks from './Components/smartlocks';
import Services from './Components/services';
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item !== product));
  };

  return (
      <div className="bebas-neue-regular text bg">
        <Nav />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Mainpage />
                <ProductLayout />
                <AboutUs />
              </>
            } 
          /> 
          <Route path="/Products" element={<Cameras addToCart={addToCart} />} />
          <Route path="/Products/Sensors" element={<Sensors addToCart={addToCart} />} />
          <Route path="/Products/SmartLocks" element={<SmartLocks addToCart={addToCart} />} />
          <Route path="/ContactUs" element={<ContactForm />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
        
        <Footer />
      </div>
  );
}

export default App;
