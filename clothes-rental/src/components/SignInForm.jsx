import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import userServices from '../components/userServices';
import { toast } from 'react-toastify';

const SignInForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            console.log("Submitting: ", formData);
            const response = await userServices.login(formData);
            console.log(response);
            const { role, email, id, fullName } = response.data.user;
            console.log(response.data);

            sessionStorage.setItem("userRole", role);
            sessionStorage.setItem("email", email);
            sessionStorage.setItem("id", id);
            sessionStorage.setItem("fullName", fullName);

            toast.success("Login Successful");
            navigate('/home'); // Redirect immediately after success
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 401) {
                toast.error("Invalid Credentials");
            } else {
                toast.error("An error occurred. Please try again.");
            }
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow-lg border-0 rounded-lg">
                        <div className="card-header bg-primary text-white text-center">
                            <h3 className="my-3">Sign In</h3>
                        </div>
                        <div className="card-body p-4">
                            <form onSubmit={handleSignIn}>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name='email'
                                        placeholder="Enter your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        name='password'
                                        placeholder="Enter your password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                </div>
                                <div className="text-center mt-3">
                                    <Link to="/forgot-password" className="link-primary">Forgot your password?</Link>
                                </div>
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
