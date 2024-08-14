import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Spinner, Alert } from 'react-bootstrap';
import { useCart } from '../components/CartProvider';
import './cart.css';
import { useNavigate } from 'react-router';

function CartPage() {
    const { cartItems, removeFromCart, clearCart } = useCart();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        if (cartItems.length >= 0) {
            setLoading(false);
        }
    }, [cartItems]);

    const handleRemove = async (productId) => {
        setLoading(true);
        try {
            await removeFromCart(productId);
        } catch (error) {
            setError('Error removing item from cart.');
            console.error('Error removing item from cart:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleProceedToOrder = () => {
        navigate('/order');
    };

    const handleClearCart = async () => {
        setLoading(true);
        try {
            await clearCart();
        } catch (error) {
            setError('Error clearing cart.');
            console.error('Error clearing cart:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container className="mt-5">
            <h2 className="mb-4 text-center">Your Cart</h2>
            {loading ? (
                <div className="text-center">
                    <Spinner animation="border" />
                </div>
            ) : error ? (
                <Alert variant="danger" className="text-center">
                    {error}
                </Alert>
            ) : cartItems.length === 0 ? (
                <p className="text-center">Your cart is empty.</p>
            ) : (
                <Row>
                    {cartItems.map((item, index) => (
                        <Col key={index} md={12} className="mb-4">
                            <div className="cart-item shadow-sm p-4 bg-white rounded">
                                <div className="d-flex align-items-center">
                                    <img
                                        src={item.clothingItem.imageUrl}
                                        alt={item.clothingItem.name}
                                        className="cart-item-image"
                                    />
                                    <div className="cart-item-details ml-4">
                                        <h5 className="cart-item-title">{item.clothingItem.name}</h5>
                                        <p className="cart-item-price">Price per Day: ₹{item.pricePerDay}</p>
                                        <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                                    </div>
                                </div>
                                <Button
                                    variant="danger"
                                    className="cart-item-remove-button"
                                    onClick={() => handleRemove(item.clothingItem.id)}
                                >
                                    Remove
                                </Button>
                            </div>
                        </Col>
                    ))}
                    <Col md={12} className="text-center mt-4">
                        <Button variant="secondary" onClick={handleClearCart}>Clear Cart</Button>
                    </Col>
                    <Col md={12} className="text-center mt-4">
                        <Button variant="primary" onClick={handleProceedToOrder}>Proceed to Order</Button>
                    </Col>
                </Row>
            )}
        </Container>
    );
}

export default CartPage;
