import React from 'react';
import './css/Aboutus.css';
import logo from './imgs/logo2.png';

function AboutUs() {
  return (
    <div className="aboutus-gradient p-5" id='aboutus'>
      <h1 className="text-center mb-4 title">About Us</h1>
      <div className="row d-flex align-items-center">
        <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
          <img 
            src={logo} 
            alt="Security Cameras" 
            className="img-fluid" 
            style={{ maxWidth: '100%', height: 'auto' }} 
          />
        </div>
        <div className="col-md-6">
          <p 
            className="pt-3 text-wrap" 
            style={{ maxWidth: '500px', fontSize: '1.25rem', lineHeight: '1.8' }}
          >
            At Berimbolo Security, we provide reliable security solutions designed to keep your property, business, and loved ones safe.
            With advanced technology and expert service, we offer comprehensive systems to monitor, protect, and give you peace of mind.
            Your safety is our priority, and we're committed to delivering professional, trusted, and efficient solutions to meet your needs.
          </p>
        </div>
      </div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div id="testimonialCarousel" className="carousel slide bg-white text-black rounded ps-5" data-bs-ride="carousel">
            <div className="carousel-inner ">
              <div className="carousel-item active text-center p-4">
                <h5 className="testimonial-title">Customer Testimonial</h5>
                <p className="testimonial-text">"Thanks to their 24/7 monitoring services, I feel safe knowing my home is protected even when I’m away!"</p>
                <p className="testimonial-author">- Sarah L.</p>
              </div>
              <div className="carousel-item text-center p-4">
                <h5 className="testimonial-title">Customer Testimonial</h5>
                <p className="testimonial-text">"Their smart lock installation has made managing my home security much easier and more efficient!"</p>
                <p className="testimonial-author">- John D.</p>
              </div>
              <div className="carousel-item text-center p-4">
                <h5 className="testimonial-title">Customer Testimonial</h5>
                <p className="testimonial-text">"The CCTV system they installed gave me peace of mind knowing that my property is always under surveillance."</p>
                <p className="testimonial-author">- Emily R.</p>
              </div>
            </div>
            <button className="carousel-control-prev me-5 " type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon me-5" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon ms-3" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
