import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';
import clothingServices from '../components/clothingItemServices';
import categoryService from './CategoryService';
import { toast } from 'react-toastify';

const EditProduct = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [productData, setProductData] = useState({
        name: '',
        description: '',
        pricePerDay: 0,
        size: '',
        color: '',
        categoryId: '',
        imageUrl: '',
        sellerId: sessionStorage.getItem("id") || null,
    });
    const [categories, setCategories] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        // Fetch the product details by product ID
        clothingServices.getProductById(Number(productId))
            .then((response) => {
                const product = response.data;
                setProductData({
                    ...product,
                    categoryId: product.category ? product.category.id : '',
                    sellerId: sessionStorage.getItem("id"),
                });
            }).catch((error) => {
                console.error("Error fetching product details:", error);
            });
    }, [productId]);

    useEffect(() => {
        // Fetch all categories
        categoryService.getAll()
            .then((response) => {
                setCategories(response.data);
            }).catch((error) => {
                console.error("Error fetching categories:", error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({
            ...productData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('clothingItem', new Blob([JSON.stringify(productData)], { type: 'application/json' }));

        if (selectedFile) {
            formData.append('file', selectedFile);
        }

        clothingServices.updateProduct(productId, formData)
            .then(() => {
                toast.success("Product updated successfully!");
                navigate('/home');
            })
            .catch((error) => {
                console.error("Error updating product:", error);
                toast.error("Failed to update product. Please try again.");
            });
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Edit Product</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formProductName">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter product name"
                        name="name"
                        value={productData.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProductDescription">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter product description"
                        name="description"
                        value={productData.description}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProductPrice">
                    <Form.Label>Price Per Day</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter price per day"
                        name="pricePerDay"
                        value={productData.pricePerDay}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProductSize">
                    <Form.Label>Size</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter product size"
                        name="size"
                        value={productData.size}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProductColor">
                    <Form.Label>Color</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter product color"
                        name="color"
                        value={productData.color}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProductCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        as="select"
                        name="categoryId"
                        value={productData.categoryId || ''}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProductImage">
                    <Form.Label>Product Image</Form.Label>
                    <Form.Control
                        type="file"
                        name="file"
                        onChange={handleFileChange}
                    />

                    {productData.imageUrl && (
                        <img src={productData.imageUrl} alt="Product" style={{ width: '100px', height: 'auto', marginTop: '10px' }} />
                    )}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Update Product
                </Button>
            </Form>
        </Container>
    );
};

export default EditProduct;
