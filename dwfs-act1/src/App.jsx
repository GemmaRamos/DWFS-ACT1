import React from 'react';
import './App.css';
import Footer from './components/Footer';
import { BookProvider } from './context/BookContext';
import { CartProvider } from './context/CartContext';
import GlobalRouter from "./routes/GlobalRouter";

function App() {
    return (
        <BookProvider>
            <CartProvider>
                <GlobalRouter></GlobalRouter>
                <Footer />
            </CartProvider>
        </BookProvider>
    );
}

export default App;
