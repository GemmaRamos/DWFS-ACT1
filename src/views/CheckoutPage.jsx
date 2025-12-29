import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import '../styles/checkout-page.css';

const CheckoutPage = () => {
    const { cart, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();

    const [success, setSuccess] = useState(false);

    const handlePayment = () => {
        setSuccess(true);
    };

    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                clearCart();
                navigate('/books');
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [success, clearCart, navigate]);

    return (
        <div className="home-page checkout-page">
            <h1>Checkout</h1>

            {success ? (
                <div className="checkout-success">
                    ✅ <strong>¡Pago realizado con éxito!</strong>
                    <p>Gracias por tu compra 😊</p>
                </div>
            ) : (
                <>
                    <div className="checkout-summary">
                        {cart.map(({ book, quantity }) => (
                            <div key={book.id} className="checkout-item">
                                <h3>{book.title}</h3>
                                <p><strong>Cantidad:</strong> {quantity}</p>
                                <p>
                                    <strong>Subtotal:</strong>{' '}
                                    {(book.price * quantity).toFixed(2)} €
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="checkout-total">
                        <h2>Total: {totalPrice.toFixed(2)} €</h2>
                    </div>

                    <button className="nav-button" onClick={handlePayment}>
                        Realizar pago
                    </button>
                </>
            )}
        </div>
    );
};

export default CheckoutPage;
