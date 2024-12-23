import React from 'react';
import { FaShieldAlt, FaCogs, FaCameraRetro, FaClock } from 'react-icons/fa';
import './css/Aboutus.css'

const Services = () => {
  return (
    <div className="container py-5">
      <h2 className="text-center text-white mb-4">Our Services</h2>

      <div className="row justify-content-center">
        <div className="col-md-3 mb-4">
          <div className="card text-center p-4 bg-white shadow border-light h-100">
            <FaShieldAlt className="mb-3" size={40} />
            <h5 className="service-title">24/7 Monitoring</h5>
            <p className="service-description">Our advanced monitoring system ensures round-the-clock protection for your home and business.</p>
            <div className="d-flex justify-content-center">
              <button className="btn btn-dark w-75">Learn More</button>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card text-center p-4 bg-white shadow border-light h-100">
            <FaCogs className="mb-3" size={40} />
            <h5 className="service-title">Smart Lock Installation</h5>
            <p className="service-description">Upgrade your home with smart locks for enhanced security and convenience.</p>
            <div className="d-flex justify-content-center">
              <button className="btn btn-dark w-75">Learn More</button>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card text-center p-4 bg-white shadow border-light h-100">
            <FaCameraRetro className="mb-3" size={40} />
            <h5 className="service-title">CCTV Installation</h5>
            <p className="service-description">Protect your property with high-definition cameras and 24/7 surveillance.</p>
            <div className="d-flex justify-content-center">
              <button className="btn btn-dark w-75">Learn More</button>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card text-center p-4 bg-white shadow border-light h-100">
            <FaClock className="mb-3" size={40} />
            <h5 className="service-title">Emergency Response</h5>
            <p className="service-description">Rapid response team available to assist you during emergencies anytime and anyplace.</p>
            <div className="d-flex justify-content-center">
              <button className="btn btn-dark w-75">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div id="testimonialCarousel" className="carousel slide bg-white rounded ps-5" data-bs-ride="carousel">
            <div className="carousel-inner">
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
            <button className="carousel-control-prev me-5" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
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

      <div className="row justify-content-center mt-5">
        <div className="col-md-12">
          <div className="service-packages text-center">
            <h3 className="packages-title text-white">Our Service Packages</h3>
            <div className="row">
              <div className="col-md-4">
                <div className="card p-4 mb-3 bg-white shadow border-light h-100">
                  <h5>Basic Package</h5>
                  <p>Includes camera installation and monitoring.</p>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-dark w-75">Get Started</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-4 mb-3 bg-white shadow border-light h-100">
                  <h5>Premium Package</h5>
                  <p>Includes cameras, smart locks, and 24/7 monitoring.</p>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-dark w-75">Get Started</button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card p-4 mb-3 bg-white shadow border-light h-100">
                  <h5>Enterprise Package</h5>
                  <p>Custom solutions for large-scale businesses .</p>
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-dark w-75">Get Started</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
