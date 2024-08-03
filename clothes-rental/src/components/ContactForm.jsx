import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = () => {
    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card shadow">
                        <div className="card-body">
                            <h3 className="card-title text-center mb-4">Contact Us</h3>
                            <form>
                                <div className="form-group mb-3">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" className="form-control" id="subject" placeholder="Enter subject" required />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" id="message" rows="5" placeholder="Enter your message" required></textarea>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-warning btn-lg">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
