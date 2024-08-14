// src/components/Profile.js
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router';

function Profile() {
    const [customerDetails, setCustomerDetails] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const email = sessionStorage.getItem('email');
        if (!email) {
            navigate('/login'); // Redirect to login if not logged in
        } else {
            const customer = {
                fullName: sessionStorage.getItem('fullName'),
                email: email,
                role: sessionStorage.getItem('userRole')
            };
            setCustomerDetails(customer);
        }
    }, [navigate]);
    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card>
                        <Card.Header className="text-center">
                            <h4>Customer Profile</h4>
                        </Card.Header>
                        <Card.Body>
                            <p><strong>Name:</strong> {customerDetails.fullName}</p>
                            <p><strong>Email:</strong> {customerDetails.email}</p>
                            <p><strong>Role:</strong> {customerDetails.role}</p>
                            {/* Add more fields as needed */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;
