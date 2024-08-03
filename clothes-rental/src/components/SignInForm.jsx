import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignInForm = () => {
    return (
        <div className="container mt-20">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">Sign In</h3>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                </div>
                                <div className="text-center mt-3">
                                    <a href="#" className="link-primary">Forgot your password?</a>
                                </div>
                                <div className="text-center mt-3">
                                    <a href="/register" className="link-primary">Not Registered? Register Here</a>
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
