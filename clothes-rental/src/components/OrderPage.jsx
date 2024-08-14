import React, { useState, useEffect } from 'react';
import { Container, Form, Button, Row, Col, Card, ListGroup, Alert } from 'react-bootstrap';
import { useCart } from '../components/CartProvider';
import rentalOrderService from './RentalOrderServices';
import rentalOrderItemService from './RentalOrderItemServices';
import './orderPage.css'; // Custom CSS file
import { useNavigate } from 'react-router';

function OrderPage() {
    const { cartItems, clearCart } = useCart();
    const [address, setAddress] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('cod');
    const [rentalPeriodStart, setRentalPeriodStart] = useState('');
    const [rentalPeriodEnd, setRentalPeriodEnd] = useState('');
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [userId, setUserId] = useState("");
    const navigate = useNavigate();

    // Fetch user ID from sessionStorage when the component mounts
    useEffect(() => {
        const storedUserId = sessionStorage.getItem('id');
        if (storedUserId) {
            setUserId(storedUserId);
        } else {
            setError('User not logged in. Please log in to place an order.');
        }
    }, []);

    const handleOrderSubmit = async (e) => {
        e.preventDefault();
        try {
            // Prepare order data
            const orderItems = cartItems.map(item => ({
                clothingItemId: item.clothingItem.id,
                quantity: item.quantity,
                pricePerDay: item.pricePerDay,
                rentalPeriodStart,
                rentalPeriodEnd,
            }));
            const orderData = {

                userId: userId, // Include the userId here
                address,
                items: orderItems,
                rentalPeriodStart,
                rentalPeriodEnd,
            };

            // Create the order
            await rentalOrderService.createRentalOrder(orderData);

            // Clear the cart
            await clearCart();

            setSuccess('Order placed successfully!');
            navigate("/order-confirmation")
        } catch (error) {
            setError('The cart is empty. Cannot create a rental order.');
            console.error('Error placing order:', error);
        }
    };

    return (
        <Container className="order-page mt-5">
            <h2 className="mb-4 text-center">Review Your Order</h2>
            {success && <Alert variant="success" className="text-center">{success}</Alert>}
            {error && <Alert variant="danger" className="text-center">{error}</Alert>}
            <Row>
                <Col md={8}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <h4 className="mb-3">Delivery Address</h4>
                            <Form onSubmit={handleOrderSubmit}>
                                <Form.Group controlId="userId">
                                    {/* Hidden input to store the userId */}
                                    <Form.Control
                                        type="hidden"
                                        value={userId}
                                    />
                                </Form.Group>

                                <Form.Group controlId="address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter delivery address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                        className="form-control-lg"
                                    />
                                </Form.Group>

                                <Form.Group controlId="rentalDates" className="mt-4">
                                    <Form.Label>Rental Dates</Form.Label>
                                    <Row>
                                        <Col md={6}>
                                            <Form.Label>Start Date</Form.Label>
                                            <Form.Control
                                                type="date"
                                                value={rentalPeriodStart}
                                                onChange={(e) => {
                                                    const selectedDate = new Date(e.target.value);
                                                    const formattedDate = selectedDate.toISOString().split('T')[0];
                                                    console.log(formattedDate)
                                                    setRentalPeriodStart(formattedDate);
                                                }}
                                                required
                                            />
                                        </Col>
                                        <Col md={6}>
                                            <Form.Label>End Date</Form.Label>
                                            <Form.Control
                                                type="date"
                                                value={rentalPeriodEnd}
                                                onChange={(e) => {
                                                    const selectedDate = new Date(e.target.value);
                                                    const formattedDate = selectedDate.toISOString().split('T')[0];
                                                    console.log(formattedDate)
                                                    setRentalPeriodEnd(formattedDate);
                                                }}
                                                required
                                            />
                                        </Col>
                                    </Row>
                                </Form.Group>

                                <h4 className="mt-4">Payment Method</h4>
                                <Form.Group controlId="paymentMethod" className="mt-2">
                                    <Form.Check
                                        type="radio"
                                        label="Cash on Delivery"
                                        name="paymentMethod"
                                        value="cod"
                                        checked={paymentMethod === 'cod'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="form-check-lg"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Credit/Debit Card"
                                        name="paymentMethod"
                                        value="card"
                                        checked={paymentMethod === 'card'}
                                        onChange={(e) => setPaymentMethod(e.target.value)}
                                        className="form-check-lg"
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="mt-4 btn-lg btn-block">
                                    Place Order
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card className="shadow-sm">
                        <Card.Header className="bg-primary text-white">
                            <h4>Your Items</h4>
                        </Card.Header>
                        <ListGroup variant="flush">
                            {cartItems.map((item, index) => (
                                <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <strong>{item.clothingItem.name}</strong>
                                        <div className="text-muted small">Qty: {item.quantity}</div>
                                    </div>
                                    <span>₹{item.pricePerDay} x {item.quantity}</span>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                        <Card.Footer className="text-center">
                            <h5>Total: ₹{cartItems.reduce((total, item) => total + item.pricePerDay * item.quantity, 0)}</h5>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default OrderPage;
