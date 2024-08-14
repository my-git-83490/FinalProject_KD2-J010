import React, { useState } from 'react';
import { Container, Form, Button, Alert, Spinner } from 'react-bootstrap';
import userService from '../components/userServices';
import { useNavigate } from 'react-router-dom';

function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false); // Add loading state
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start the spinner
        setError(''); // Clear any previous error messages
        setSuccess(''); // Clear any previous success messages

        try {
            await userService.forgotPassword({ email });
            setSuccess('OTP sent to your email.');
            setTimeout(() => {
                setLoading(false); // Stop the spinner after navigation
                navigate('/reset-password');
            }, 2000);
        } catch (err) {
            setError('Failed to send OTP. Please try again.');
        } finally {
            setLoading(false); // Stop the spinner
        }
    };

    return (
        <Container className="mt-5">
            <h2 className="mb-4">Forgot Password</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {success && <Alert variant="success">{success}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                    <Form.Label>Enter your registered email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={loading} // Disable input when loading
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className="mt-3" disabled={loading}>
                    {loading ? (
                        <>
                            <Spinner animation="border" size="sm" className="me-2" />
                            Sending...
                        </>
                    ) : (
                        'Submit'
                    )}
                </Button>
            </Form>
        </Container>
    );
}

export default ForgotPasswordPage;
