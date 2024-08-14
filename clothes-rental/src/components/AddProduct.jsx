import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import clothingItemServices from './clothingItemServices';
import CategoryService from './CategoryService';

const AddProduct = () => {
    const navigate = useNavigate();
    const sellerId = sessionStorage.getItem('id'); // Fetching seller ID from session storage
    const [categories, setCategory] = useState([]);

    useEffect(() => {
        // Fetch categories when the component loads
        CategoryService.getAll().then((response) => {
            setCategory(response.data);
        }).catch(error => {
            console.error("Error fetching categories:", error);
        });
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        pricePerDay: '',
        size: '',
        color: '',
        categoryId: '',
        image: null,  // Changed to null to handle file input
        sellerId: sellerId, // Set sellerId in the form data
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "image") {
            // If the input is for the image, handle it differently
            setFormData({
                ...formData,
                [name]: e.target.files[0], // Save the file object
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a new FormData object
        const data = new FormData();

        // Append form fields to the FormData object
        const productData = {
            name: formData.name,
            description: formData.description,
            pricePerDay: formData.pricePerDay,
            size: formData.size,
            color: formData.color,
            categoryId: formData.categoryId,
            sellerId: formData.sellerId
        };

        // Convert the product data to a JSON string and append it
        data.append('clothingItem', new Blob([JSON.stringify(productData)], { type: "application/json" }));

        // Append the image file to the FormData object
        data.append('file', formData.image);

        // Call the service to upload the product
        clothingItemServices.uploadProduct(data)
            .then(response => {
                console.log("Product added successfully", response.data);
                navigate('/home'); // Redirect to the seller dashboard after successful submission
            })
            .catch(error => {
                console.error("There was an error adding the product!", error);
            });
    };


    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg border-0 rounded-lg">
                        <div className="card-header bg-success text-white text-center">
                            <h3 className="my-3">Add New Product</h3>
                        </div>
                        <div className="card-body p-4">
                            <form onSubmit={handleSubmit} encType='multipart/form-data'>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Product Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter product name"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        placeholder="Enter product description"
                                        required
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="pricePerDay" className="form-label">Price Per Day</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="pricePerDay"
                                            name="pricePerDay"
                                            value={formData.pricePerDay}
                                            onChange={handleChange}
                                            placeholder="Enter price per day"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="size" className="form-label">Size</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="size"
                                            name="size"
                                            value={formData.size}
                                            onChange={handleChange}
                                            placeholder="Enter size (e.g., S, M, L)"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <label htmlFor="color" className="form-label">Color</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="color"
                                            name="color"
                                            value={formData.color}
                                            onChange={handleChange}
                                            placeholder="Enter color"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="categoryId" className="form-label">Category</label>
                                    <select
                                        className="form-select"
                                        id="categoryId"
                                        name="categoryId"
                                        value={formData.categoryId}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>Select category</option>
                                        {
                                            categories.map((category) => (
                                                <option key={category.id} value={category.id}>
                                                    {category.name}
                                                </option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="image" className="form-label">Image</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="image"
                                        name="image"
                                        onChange={handleChange} // No need for value here
                                        placeholder="Upload images"
                                        required
                                    />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-success btn-block">
                                        Add Product
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
