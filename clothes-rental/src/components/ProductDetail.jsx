import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image, Button, Form } from 'react-bootstrap';
import clothingItemServices from './clothingItemServices';
import { useCart } from '../components/CartProvider';
import { Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Importing icons


function ProductDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1); // Default quantity to 1
    const [showModal, setShowModal] = useState(false);
    const { addToCart } = useCart();

    useEffect(() => {
        clothingItemServices.getProductById(productId)
            .then(response => setProduct(response.data))
            .catch(error => console.error('Error fetching product details:', error));
    }, [productId]);

    const handleQuantityChange = (newQuantity) => {
        setQuantity(Math.max(1, newQuantity)); // Ensure quantity is at least 1
    };

    const handleRentNow = async () => {
        if (quantity > 0) {
            console.log(product.id)
            await addToCart(product, quantity); // Pass size and quantity
            setShowModal(true); // Show the modal on successful addition
        } else {
            toast.error("Please enter a valid quantity.");
        }
    };

    const handleCloseModal = () => setShowModal(false);

    if (!product) return <p>Loading product details...</p>;

    return (
        <Container className="mt-5">
            <Row>
                <Col md={6}>
                    <Image src={product.imageUrl} alt={product.name} fluid />
                </Col>
                <Col md={6}>
                    <h2 className="mb-3">{product.name}</h2>
                    <p>{product.description}</p>
                    <p><strong>Price per Day:</strong> ₹{product.pricePerDay}</p>
                    <p><strong>Color:</strong> {product.color}</p>
                    <p><strong>Seller Name:</strong> {product.seller.fullName}</p>
                    <p><strong>Seller Email:</strong> {product.seller.email}</p>
                    <p><strong>Size:</strong> {product.size}</p> {/* Display the size from product data */}

                    <Form.Group controlId="formQuantity">
                        <Form.Label>Quantity</Form.Label>
                        <div className="d-flex align-items-center">
                            <Button
                                variant="outline-secondary"
                                onClick={() => handleQuantityChange(quantity - 1)}
                                className="me-2"
                            >
                                <FaMinus />
                            </Button>
                            <Form.Control
                                type="number"
                                value={quantity}
                                onChange={(e) => handleQuantityChange(Number(e.target.value))}
                                min="1"
                                className="text-center"
                                style={{ width: '60px' }}
                            />
                            <Button
                                variant="outline-secondary"
                                onClick={() => handleQuantityChange(quantity + 1)}
                                className="ms-2"
                            >
                                <FaPlus />
                            </Button>
                        </div>
                    </Form.Group>

                    <Button variant="primary" className="mt-3" onClick={handleRentNow}>Rent Now</Button>

                    {/* Modal for item added to cart */}
                    <Modal show={showModal} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Success</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Item has been added to your cart!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
                            <Button variant="primary" onClick={() => { handleCloseModal(); window.location.href = '/cart'; }}>Go to Cart</Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductDetail;
