import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function RentNowModal({ show, onHide, onConfirm }) {
    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Rental</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to add this item to your cart?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancel
                </Button>
                <Button variant="primary" onClick={onConfirm}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default RentNowModal;
