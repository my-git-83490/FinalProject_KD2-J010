import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartProvider';
import './orderConfirmation.css';

function OrderConfirmationPage() {
    const { clearCart } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        // Clear the cart when the component is mounted
        clearCart();
    }, [clearCart]);

    const handleGoToHome = () => {
        navigate('/');
    };

    return (
        <Container className="order-confirmation mt-5 text-center">
            <Row className="justify-content-center">
                <Col md={8}>
                    <div className="confirmation-message shadow-sm p-5 bg-white rounded">
                        <h1 className="mb-4">Thank You for Your Order!</h1>
                        <p>Your order has been placed successfully. We'll start processing it right away.</p>
                        <Button variant="primary" className="mt-4" onClick={handleGoToHome}>
                            Go to Homepage
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default OrderConfirmationPage;
