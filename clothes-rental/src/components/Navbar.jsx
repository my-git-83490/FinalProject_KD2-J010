import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { IoIosLogOut } from "react-icons/io";
import { toast } from 'react-toastify';
import { useCart } from './CartProvider'; // Make sure this path is correct
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

function Navbar() {
    const navigate = useNavigate();
    const { cart } = useCart(); // Get cart item count from context

    // Get the user's role from sessionStorage
    const userRole = sessionStorage.getItem('userRole');

    const handleLogout = () => {
        // Clear session storage
        sessionStorage.clear();

        // Display success message
        toast.success("Logout successful");

        // Navigate to the login page
        navigate('/login');
    };

    return (
        <BootstrapNavbar expand="lg" className="mb-1">
            <Container>
                <BootstrapNavbar.Brand as={Link} to="/">FashionFlex</BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
                <BootstrapNavbar.Collapse id="navbar-nav">
                    <Nav className="me-auto">
                        {userRole === 'CUSTOMER' && (
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                        )}

                        {userRole === 'SELLER' && (
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        )}

                        {/* Render Customer-specific nav items */}
                        {userRole === 'CUSTOMER' && (
                            <>
                                <Nav.Link as={Link} to="/men">Men</Nav.Link>
                                <Nav.Link as={Link} to="/women">Women</Nav.Link>
                                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                                <Nav.Link as={Link} to="/userOrders">Orders</Nav.Link>
                            </>
                        )}

                        {/* Render Seller-specific nav items */}
                        {userRole === 'SELLER' && (
                            <>
                                <Nav.Link as={Link} to="/addProduct">Add Product</Nav.Link>
                                <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                            </>
                        )}

                        {/* Common nav items */}
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                    </Nav>

                    {/* Render Login button if no user is logged in */}
                    {!userRole && (
                        <Link to="/login" className="btn btn-primary ms-3">
                            Login
                        </Link>
                    )}

                    {/* Render Logout and Cart button if user is logged in */}
                    {userRole && (
                        <div className="d-flex align-items-center">
                            {userRole === 'CUSTOMER' && (
                                <Link to="/cart" className="btn ms-3 position-relative">
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                    {cart && cart.cartItems && cart.cartItems.length > 0 && (
                                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            {cart.cartItems.length}
                                        </span>
                                    )}
                                </Link>
                            )}
                            <Link to="/login" onClick={handleLogout} className="btn btn-danger ms-3">
                                <IoIosLogOut /> Logout
                            </Link>
                        </div>
                    )}
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
}

export default Navbar;
