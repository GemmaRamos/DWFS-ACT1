import React from 'react';
import { useCart } from '../hooks/useCart';
import { useNavigate } from 'react-router-dom';
import {FaCartPlus} from "react-icons/fa";
import '../styles/book-card.css';

const BookCard = ({ book }) => {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    return (
        <div className="book">
            <div className="book-left">
                <div className="book-left-data">
                    <h2>{book.title}</h2>
                    <p><strong>Autor:</strong> {book.author}</p>
                    <p><strong>Género:</strong> {book.genre}</p>
                    <p><strong>Precio:</strong> {book.price} €</p>
                    <p><strong>Valoración:</strong> ⭐ {book.rating}</p>
                </div>
                <div className="book-actions">
                    <button
                        className="nav-button"
                        onClick={() => navigate(`/book/${book.id}`)}
                    >
                        Ver detalles
                    </button>
                    <button
                        className="nav-button"
                        onClick={() => addToCart(book)}
                    >
                        <FaCartPlus/>
                        Añadir al carrito
                    </button>
                </div>
            </div>
            <div className="book-right">
                <img src={book.cover} alt={book.title} />
            </div>
        </div>
    );
};

export default BookCard;
