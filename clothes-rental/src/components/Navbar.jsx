import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { IoIosLogOut } from "react-icons/io";


function Navbar() {
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
                                <Link className="nav-link " to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/men">Men</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/women" >Women</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" >Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shop By
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" href="#">Categories</Link></li>
                                    <li><Link className="dropdown-item" href="#">Accessories</Link></li>
                                    {/* <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" href="#">Something else here</Link></li> */}
                                </ul>
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

export default Navbar;
