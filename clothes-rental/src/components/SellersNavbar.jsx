import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { IoIosLogOut } from "react-icons/io";
import { toast } from 'react-toastify';

function SellerNavbar() {

    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear session storage
        sessionStorage.removeItem('userRole');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('fullName');

        // Display success message
        toast.success("Logout successful");

        // Navigate to the login page
        // navigate('/login');
    };

    return (
        <>
            <nav className="container navbar navbar-expand-lg bg-body-tertiary bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home" >FashionFlex</Link>
                    <button className="navbar-toggler" type="button" >
                        {/* Add your toggler button content here if needed */}
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link " to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addProduct">Add Product</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" to={"/login"} onClick={handleLogout}>Sign out</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                        </ul>

                        <Link to="/login" onClick={handleLogout} className="btn">
                            <FontAwesomeIcon icon={IoIosLogOut} /> LogOut
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default SellerNavbar;
