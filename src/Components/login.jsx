import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10 p-4 text-white rounded">
                    <h2 className="text-center mb-4">Log In</h2>
                    <form>
                        <div className="form-group mb-3">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                        </div>
                        <button type="submit" className="btn btn-light w-100 mt-3">Log In</button>
                    </form>
                    <div className="mt-3 text-center">
                        <p>
                            Don't have an account? <Link to="/SignUp" className="text-light">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;

