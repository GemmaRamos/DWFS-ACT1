import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from "../views/Landing";
import HomePage from "../views/HomePage";
import BookDetails from "../views/BookDetails";
import CartPage from "../views/CartPage";
import CheckoutPage from "../views/CheckoutPage";
import Header from "../components/Header";


function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/books" element={<Layout><HomePage /></Layout>} />
                <Route path="/book/:id" element={<Layout><BookDetails /></Layout>} />
                <Route path="/cart" element={<Layout><CartPage /></Layout>} />
                <Route path="/checkout" element={<Layout><CheckoutPage /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        <Header />
        {children}
    </>
);

export default GlobalRouter;