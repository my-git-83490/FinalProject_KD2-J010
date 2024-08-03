import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-4 mt-4">
            <div className="container text-center text-md-left">
                <div className="row text-center text-md-left">
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Cloth Rental</h5>
                        <p>
                            We provide the best quality clothes for rent. Explore our vast collection and choose the best fit for your special occasion.
                        </p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Products</h5>
                        <p>
                            <Link to="/men" className="text-white" style={{ textDecoration: 'none' }}>Men's Clothing</Link>
                        </p>
                        <p>
                            <Link to="/women" className="text-white" style={{ textDecoration: 'none' }}>Women's Clothing</Link>
                        </p>
                        <p>
                            <Link href="/accessories" className="text-white" style={{ textDecoration: 'none' }}>Accessories</Link>
                        </p>
                        <p>
                            <Link href="/categories" className="text-white" style={{ textDecoration: 'none' }}>Categories</Link>
                        </p>
                    </div>

                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Useful Links</h5>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Your Account</a>
                        </p>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Become an Affiliate</a>
                        </p>
                        <p>
                            <a href="#" className="text-white" style={{ textDecoration: 'none' }}>Shipping Rates</a>
                        </p>
                        <p>
                            <Link to="/contact" className="text-white" style={{ textDecoration: 'none' }}>Help</Link>
                        </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Contact</h5>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} className="mr-3" /> clothRental@gmail.com
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} className="mr-3" /> +91 8303679587
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faEnvelope} className="mr-3" /> +91 9120896037
                        </p>
                    </div>

                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-warning">Follow us</h5>
                        <div className=''>
                            <a href="#" className="text-white m-2" style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faFacebook} className="mr-3" /></a>
                            <a href="#" className="text-white m-2" style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faTwitter} className="mr-3" /></a>
                            <a href="#" className="text-white m-2" style={{ textDecoration: 'none' }}><FontAwesomeIcon icon={faInstagram} className="mr-3" /></a>
                        </div>
                    </div>
                </div>

                <hr className="mb-4" />

                <div className="row align-items-center">
                    <div className="col-md-7 col-lg-8">
                        <p className="text-center text-md-left">
                            © {new Date().getFullYear()} All rights reserved by:
                            <strong className="text-warning"> ClothRental.com</strong>
                        </p>
                    </div>

                    <div className="col-md-5 col-lg-4">
                        <div className="text-center text-md-right">
                            <form className="form-inline">
                                <div className="input-group">
                                    <input type="email" className="form-control" placeholder="Subscribe for updates" />
                                    <div className="input-group-append">
                                        <button className="btn btn-warning" type="button">Subscribe</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
