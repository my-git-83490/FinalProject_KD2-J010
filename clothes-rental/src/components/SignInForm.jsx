import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import userServices from '../components/userServices'
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

    const handleSignIn = (e) => {
        e.preventDefault();
        console.log("Submitting: ", formData);
        userServices.login(formData).then((response) => {
            const { role, email, id, fullName } = response.data;
            console.log(response.data);
            setFormData({
                email: formData.email,
                password: formData.password
            });
            sessionStorage.setItem("userRole", role)
            sessionStorage.setItem("email", email)
            sessionStorage.setItem("id", id);
            sessionStorage.setItem("fullName", fullName);
            toast.success("Login Successful")
            setTimeout(() => {
                navigate('/home')
            }, 2000)
        }).catch((error) => {
            console.log(error);
            toast.error("Invalid Credentials")
        })
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
                                    <Link to="#" className="link-primary">Forgot your password?</Link>
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