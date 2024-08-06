import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
// import userServices from '../components/userServices';
import clothingServices from '../components/clothingItemServices'
import { useNavigate } from 'react-router';
import SellerNavbar from './SellersNavbar';
const SellerDashboard = () => {
    const [products, setProducts] = useState([]);
    const id = sessionStorage.getItem("id")
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/addProduct')
    }

    useEffect(() => {
        // Fetch products uploaded by the seller
        clothingServices.getClothingItemsBySellerId(id)
            .then((response) => {
                setProducts(response.data);
            }).catch((error) => {
                console.error("Error fetching seller products:", error);
            });
    }, []);

    const handleEdit = (id) => {
        // Handle product edit logic here
        console.log(`Editing product with id: ${id}`);
    };

    const handleDelete = (id) => {
        // Handle product delete logic here
        console.log(`Deleting product with id: ${id}`);
        // Optionally, you could also update the state to remove the deleted product
    };

    return (
        <>
            <SellerNavbar></SellerNavbar>
            <Container className="mt-5">
                <h2 className="text-center mb-4">Seller Dashboard</h2>
                <Row className="mb-4">
                    <Col className="text-center">
                        <Button variant="success" className="rounded-pill px-4" onClick={handleSubmit}>Add New Product</Button>
                    </Col>
                </Row>
                <Row>
                    {products.length > 0 ? (
                        products.map(product => (
                            <Col md={6} lg={4} className="mb-4" key={product.id}>
                                <Card className="shadow-sm">
                                    <Card.Img variant="top" src={product.image} />
                                    <Card.Body>
                                        <Card.Title className="text-primary">{product.name}</Card.Title>
                                        <Card.Text>{product.description}</Card.Text>
                                        <Card.Text><strong>Price:</strong> ${product.price}</Card.Text>
                                        <div className="d-flex justify-content-between">
                                            <Button variant="warning" onClick={() => handleEdit(product.id)}>Edit</Button>
                                            <Button variant="danger" onClick={() => handleDelete(product.id)}>Delete</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <Col>
                            <p className="text-center">No products found. Start adding new products!</p>
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    );
};

export default SellerDashboard;
