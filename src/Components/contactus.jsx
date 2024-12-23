import React from 'react';
const ContactForm = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-lg-6 col-md-6 mb-4">
                    <div className="mt-5 p-4 text-white rounded">
                        <h3 className="mb-4">Contact Info</h3>
                        <div className="mb-3">
                            <i className="fas fa-phone-alt me-2"></i>
                            <p className="d-inline">+1 (555) 019-2837</p>
                        </div>
                        <div className="mb-3">
                            <i className="fas fa-envelope me-2"></i>
                            <p className="d-inline">contact@timberbolsecurity.com</p>
                        </div>
                        <div className="mb-3">
                            <i className="fas fa-map-marker-alt me-2"></i>
                            <p className="d-inline">1234 Sentinel Drive, Suite 101, Springfield, USA 62704</p>
                        </div>
                        <div className="mt-4">
                            <h4>Follow us on:</h4>
                            <div className="mt-2">
                                <i className="fab fa-instagram me-3"></i>
                                <i className="fab fa-facebook-f me-3"></i>
                                <i className="fab fa-twitter me-3"></i>
                                <i className="fab fa-linkedin"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6">
                    <div className="p-4 text-white rounded">
                        <h2 className="text-center mb-4">Contact Us</h2>
                        <form>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="surname">Surname</label>
                                <input type="text" className="form-control" id="surname" placeholder="Enter your surname" required />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="message">Message</label>
                                <textarea className="form-control" id="message" rows="4" placeholder="Type your message here..." required></textarea>
                            </div>
                            <button type="submit" className="btn btn-light w-100 mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
