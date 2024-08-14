import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import clothingItemServices from './clothingItemServices';
import './products.css';

function Men() {
    const [menClothingItems, setMenClothingItems] = useState([]);

    useEffect(() => {
        // Fetch all clothing items
        clothingItemServices.getAllClothingItems()
            .then(response => {
                // Filter items based on the "Men" category
                const filteredItems = response.data.filter(item => item.category.name.toLowerCase() === 'women');
                setMenClothingItems(filteredItems);
            })
            .catch(error => {
                console.error('Error fetching clothing items:', error);
            });
    }, []);

    return (
        <Container className="mt-4">
            <h2 className="text-center">Women's Clothing</h2>
            <Row className="gy-4">
                {menClothingItems.length > 0 ? (
                    menClothingItems.map((item) => (
                        <Col key={item.id} md={4}>
                            <Link to={`/product/${item.id}`} className="text-decoration-none">
                                <Card className="shadow-lg product-card h-100">
                                    <Card.Img variant="top" src={item.imageUrl} alt={item.name} className="product-image" />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title className="text-center text-uppercase">{item.name}</Card.Title>
                                        <Card.Text className="text-muted text-center">{item.description}</Card.Text>
                                        <Card.Text className="mt-auto">
                                            <strong>Price per Day:</strong> ₹{item.pricePerDay}
                                            <br />
                                            <strong>Size:</strong> {item.size}
                                            <br />
                                            <strong>Color:</strong> {item.color}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))
                ) : (
                    <p className="text-center">No products available in this category.</p>
                )}
            </Row>
        </Container>
    );
}

export default Men;
