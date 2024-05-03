import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./Components/Layout/Header";
import Product from "./Components/Product/Product";
import Cart from "./Components/Cart/Cart";
import ProductDetail from './Components/Product/ProductDetail';
import NotFoundPage from './Components/Error/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { CartProvider } from './Components/Contexts/Context';

function App() {
    const [isShow, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <CartProvider>
            <Header setShow={handleShow} />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Product/>}/>
                    <Route path="/Product/:id" element={<ProductDetail/>}  />
                    <Route path='*' element={<NotFoundPage/>} />
                </Routes>
                {isShow && <Cart isShow={isShow} setShow={handleClose} />}
            </BrowserRouter>
           
        </CartProvider>
    );
}
export default App;
