import React, { useState, useEffect } from 'react';
import { Container, Card, ListGroup, Row, Col, Alert } from 'react-bootstrap';
import rentalOrderService from './RentalOrderServices'; // Make sure the path is correct
import './userOrders.css'; // Custom CSS for styling (optional)

function UserOrders() {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserOrders = async () => {
            try {
                const userId = sessionStorage.getItem('id');
                if (!userId) {
                    throw new Error('User not logged in.');
                }

                const fetchedOrders = await rentalOrderService.getRentalOrdersByUserId(userId);
                console.log(fetchedOrders)
                // Ensure the fetchedOrders is an array
                if (Array.isArray(fetchedOrders.data)) {
                    setOrders(fetchedOrders.data);
                } else {
                    setError('Unexpected response format from the server.');
                }
            } catch (err) {
                setError('Failed to fetch orders. Please try again later.');
                console.error(err);
            }
        };

        fetchUserOrders();
    }, []);

    return (
        <Container className="user-orders mt-5">
            <h2 className="mb-4 text-center">My Orders</h2>
            {error && <Alert variant="danger" className="text-center">{error}</Alert>}
            {orders.length === 0 ? (
                <Alert variant="info" className="text-center">You have no orders yet.</Alert>
            ) : (
                <Row>
                    {orders.map((order, index) => (
                        <Col key={index} md={6} className="mb-4">
                            <Card className="shadow-sm">
                                <Card.Header className="bg-primary text-white">
                                    Order #{order.id} - {new Date(order.orderDate).toLocaleDateString()}
                                </Card.Header>
                                <ListGroup variant="flush">
                                    {order.items && order.items.map((item, idx) => (
                                        <ListGroup.Item key={idx} className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <strong>{item.clothingItem.name}</strong>
                                                <div className="text-muted small">Qty: {item.quantity}</div>
                                                <div className="text-muted small">Rental Period: {new Date(item.rentalDate).toLocaleDateString()} - {new Date(item.returnDate).toLocaleDateString()}</div>
                                            </div>
                                            <span>₹{item.pricePerDay} x {item.quantity}</span>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                                {/* <Card.Footer className="text-center">
                                    <h5>Total: ₹{order.items.reduce((total, item) => total + item.pricePerDay * item.quantity, 0)}</h5>
                                </Card.Footer> */}
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}

export default UserOrders;
