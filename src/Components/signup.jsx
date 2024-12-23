import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10 p-4 text-white rounded">
                    <h2 className="text-center mb-4">Sign Up</h2>
                    <form>
                        <div className="form-group mb-3">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" placeholder="Choose a username" required />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" required />
                        </div>
                        <button type="submit" className="btn btn-light w-100 mt-3">Sign Up</button>
                    </form>
                    <div className="mt-3 text-center">
                        <p>
                            Already have an account? <Link to="/LogIn" className="text-light">Log In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
