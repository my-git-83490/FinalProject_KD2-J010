import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const SignInForm = () => {
    return (
        // Main container with margin at the top
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    {/* Card to hold the sign-in form with shadow and rounded corners */}
                    <div className="card shadow-lg border-0 rounded-lg">
                        {/* Card header with a primary background color and centered text */}
                        <div className="card-header bg-primary text-white text-center">
                            <h3 className="my-3">Sign In</h3>
                        </div>
                        {/* Card body to contain the form with padding */}
                        <div className="card-body p-4">
                            <form>
                                {/* Email input field */}
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>
                                {/* Password input field */}
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </div>
                                {/* Submit button with full width */}
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                </div>
                                {/* Link for forgotten password */}
                                <div className="text-center mt-3">
                                    <Link to="#" className="link-primary">Forgot your password?</Link>
                                </div>
                                {/* Link to the registration page */}
                                <div className="text-center mt-3">
                                    <Link to="/register" className="link-primary">Not Registered? Register Here</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;
