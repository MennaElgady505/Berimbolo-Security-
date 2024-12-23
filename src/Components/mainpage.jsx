import React from 'react';
import MP from './imgs/MP.png'; 
import './css/Mainpage.css';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="main-page ">
      <div className="text-white ms-5">
        <h1 className="text-wrap " style={{ maxWidth: '350px' ,fontSize:'60px' }}>
          Advanced Security Solutions for a Safer Tomorrow.
        </h1>
        <Link className="btn btn-light btn-lg mt-4" to='/Products'>Buy Now</Link>
      </div>
      <div className="image-container pb-5 mb-5" >
        <img
          src={MP}
          alt="Security Camera"
          style={{ maxWidth: '100%', height: '500px' }} 
        />
      </div>
    </div>

  );
};

export default MainPage;
