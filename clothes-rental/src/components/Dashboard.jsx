import React, { useEffect, useState } from 'react';
import SellerDashboard from './SellerDashboard';
import Navbar from './Navbar';
import { useNavigate } from 'react-router';
import { Spinner, Container } from 'react-bootstrap';

function Dashboard() {
    const [loading, setLoading] = useState(true); // Loading state
    const userRole = sessionStorage.getItem("userRole"); // Retrieve the role of the user from session storage
    const navigate = useNavigate();
    console.log(userRole + " role");

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // Stop loading after a brief delay
        }, 500); // Simulate loading delay (500ms)

        if (!userRole || userRole === "null") {
            navigate("/login");
        } else if (userRole === "CUSTOMER") {
            navigate("/");
            return; // Return here to prevent any further rendering
        }

        return () => clearTimeout(timer); // Cleanup the timer
    }, [userRole, navigate]);

    if (loading) {
        // Render spinner while loading
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </Container>
        );
    }

    if (userRole === "SELLER") {
        return (
            <>
                <Navbar />
                <SellerDashboard />
            </>
        );
    }

    return null; // Return null if no dashboard should be rendered
}

export default Dashboard;
