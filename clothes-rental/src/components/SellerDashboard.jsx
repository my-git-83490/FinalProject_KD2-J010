import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Row, Col } from 'react-bootstrap';
import clothingServices from '../components/clothingItemServices';
import { useNavigate } from 'react-router';
import './SellerDashboard.css'; // Import custom CSS for additional styling
import { toast } from 'react-toastify';

const SellerDashboard = () => {
    const [products, setProducts] = useState([]);
    const id = sessionStorage.getItem("id");
    const fullName = sessionStorage.getItem("fullName");
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/addProduct');
    };

    useEffect(() => {
        // Fetch products uploaded by the seller
        clothingServices.getClothingItemsBySellerId(id)
            .then((response) => {
                console.log(response.data)
                setProducts(response.data);
            }).catch((error) => {
                console.error("Error fetching seller products:", error);
            });
    }, [id]);

    const handleEdit = (id) => {
        navigate(`/editProduct/${id}`);
        console.log(`Editing product with id: ${id}`);
    };

    const handleDelete = (id) => {
        clothingServices.deleteProductById(id).then(() => {
            toast.success("Deleted product successfully");
            setProducts(products.filter(product => product.id !== id));
        }).catch(() => {
            toast.error("Failed to delete product");
        });
        console.log(`Deleting product with id: ${id}`);
    };

    return (
        <>
            <div className="container mt-5">
                <h2 className="text-center mb-4">Hello {fullName}, Welcome to your Dashboard</h2>
                <Row className="mb-4">
                    <Col className="text-center">
                        <Button variant="success" className="rounded-pill px-4" onClick={handleSubmit}>Add New Product</Button>
                    </Col>
                </Row>
                <h2 className="text-center mb-4">My Products</h2>
                <Row className="gy-4">
                    {products.length === 0 ? (
                        <Col>
                            <h5 className="text-center text-muted">No products are available.</h5>
                        </Col>
                    ) : (
                        products.map((product) => (
                            <Col key={product.id} md={4}>
                                <Card className="shadow-lg product-card h-100">
                                    <div className="image-container">
                                        <Card.Img
                                            variant="top"
                                            src={product.imageUrl}  // Use the correct field from your backend
                                            alt={product.name}
                                            className="product-image"
                                        />
                                    </div>
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title className="text-center text-uppercase">{product.name}</Card.Title>
                                        <Card.Text className="text-muted text-center">{product.description}</Card.Text>
                                        <Card.Text className="mt-auto">
                                            <strong>Price per Day:</strong> ₹{product.pricePerDay}
                                            <br />
                                            <strong>Size:</strong> {product.size}
                                            <br />
                                            <strong>Color:</strong> {product.color}
                                        </Card.Text>
                                        <div className="d-flex justify-content-between mt-3">
                                            <Button variant="primary" onClick={() => handleEdit(product.id)}>Edit</Button>
                                            <Button variant="danger" onClick={() => handleDelete(product.id)}>Delete</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    )}
                </Row>

            </div>
        </>
    );
};

export default SellerDashboard;
