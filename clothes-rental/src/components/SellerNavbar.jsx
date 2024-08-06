import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { IoIosLogOut } from "react-icons/io";
import { toast } from 'react-toastify';

function SellerNavbar() {

    const navigate = useNavigate();
    const handleLogout = () => {
        sessionStorage.removeItem('userRole');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('id');
        sessionStorage.removeItem('fullName');
        navigate('/login');
        toast.success("Logout successful");
    }
    return (
        <>

            <nav className="container navbar navbar-expand-lg bg-body-tertiary bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" >FashionFlex</Link>
                    <button className="navbar-toggler" type="button" >

                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <Link className="nav-link " to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/addProduct">Add Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" onClick={handleLogout} >Sign out</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" >Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>

                            {/* <li className="nav-item">
                                <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
                            </li> */}
                        </ul>

                        <Link to="/cart" className="btn">
                            <FontAwesomeIcon icon={faShoppingCart} /> Cart
                        </Link>
                        <Link to="/login" className="btn">
                            <IoIosLogOut />
                        </Link>

                    </div>
                </div>
            </nav >

        </>
    );
}

export default SellerNavbar;