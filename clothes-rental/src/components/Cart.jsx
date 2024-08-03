import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { X } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
    {
        id: 1,
        name: 'Throwback Hip Bag',
        href: '#',
        color: 'Salmon',
        price: '$90.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
        imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
        id: 2,
        name: 'Medium Stuff Satchel',
        href: '#',
        color: 'Blue',
        price: '$32.00',
        quantity: 1,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        imageAlt:
            'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
]

export default function Cart() {
    const [open, setOpen] = useState(true);

    return (
        <Modal show={open} onHide={() => setOpen(false)} dialogClassName="modal-lg" centered>
            <Modal.Header className="border-0">
                <Modal.Title>Shopping Cart</Modal.Title>
                <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={() => setOpen(false)}
                >
                    <X className="h-6 w-6" />
                </button>
            </Modal.Header>

            <Modal.Body className="py-0">
                <div className="container">
                    <div className="row">
                        {products.map((product) => (
                            <div key={product.id} className="d-flex align-items-center mb-4">
                                <div className="me-3">
                                    <img
                                        alt={product.imageAlt}
                                        src={product.imageSrc}
                                        className="img-fluid rounded border"
                                        style={{ width: '96px', height: '96px', objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="flex-fill">
                                    <h5 className="mb-1"><a href={product.href} className="text-dark text-decoration-none">{product.name}</a></h5>
                                    <p className="text-muted mb-0">{product.color}</p>
                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <p className="text-muted">Qty {product.quantity}</p>
                                        <p className="text-dark fw-bold">{product.price}</p>
                                        <button type="button" className="btn btn-link text-danger p-0">Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Modal.Body>

            <Modal.Footer className="flex-column align-items-stretch">
                <div className="d-flex justify-content-between w-100">
                    <p className="mb-1">Subtotal</p>
                    <p className="fw-bold">$262.00</p>
                </div>
                <p className="text-muted">Shipping and taxes calculated at checkout.</p>
                <div className="d-grid gap-2">
                    <a href="#" className="btn btn-primary">Checkout</a>
                    <button type="button" className="btn btn-link text-muted" onClick={() => setOpen(false)}>
                        Continue Shopping &rarr;
                    </button>
                </div>
            </Modal.Footer>
        </Modal>
    );
}
