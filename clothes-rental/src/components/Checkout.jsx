import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Checkout() {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    cardName: '',
    expDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to backend)
    console.log('Form submitted', formData);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="fullName" 
            name="fullName" 
            value={formData.fullName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Address</label>
          <input 
            type="text" 
            className="form-control" 
            id="address" 
            name="address" 
            value={formData.address} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="city" className="form-label">City</label>
            <input 
              type="text" 
              className="form-control" 
              id="city" 
              name="city" 
              value={formData.city} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="state" className="form-label">State</label>
            <input 
              type="text" 
              className="form-control" 
              id="state" 
              name="state" 
              value={formData.state} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="zip" className="form-label">Zip</label>
            <input 
              type="text" 
              className="form-control" 
              id="zip" 
              name="zip" 
              value={formData.zip} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>
        <h5 className="mb-3">Payment Information</h5>
        <div className="mb-3">
          <label htmlFor="cardNumber" className="form-label">Card Number</label>
          <input 
            type="text" 
            className="form-control" 
            id="cardNumber" 
            name="cardNumber" 
            value={formData.cardNumber} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cardName" className="form-label">Name on Card</label>
          <input 
            type="text" 
            className="form-control" 
            id="cardName" 
            name="cardName" 
            value={formData.cardName} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="expDate" className="form-label">Expiration Date</label>
            <input 
              type="text" 
              className="form-control" 
              id="expDate" 
              name="expDate" 
              value={formData.expDate} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="cvv" className="form-label">CVV</label>
            <input 
              type="text" 
              className="form-control" 
              id="cvv" 
              name="cvv" 
              value={formData.cvv} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-100">Confirm Order</button>
      </form>
    </div>
  );
}

export default Checkout;
