import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./Components/Layout/Header";
import Product from "./Components/Product/Product";
import Cart from "./Components/Cart/Cart";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import ProductDetail from './Components/Product/ProductDetail';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { CartProvider } from './Components/Contexts/Context';

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isShow, setShow] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3000/api/product')
        .then(response => {
            setData(response.data.products);
            setLoading(false);
        })
        .catch(err => {
            setError(err);
            setLoading(false);
        });
    }, []);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <CartProvider>
            <Header setShow={handleShow} />
            {loading ? (
                <div className='containerSpin'>
                    <Spinner className='spinnerclass' animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            ) : error ? (
                <Alert variant="danger">
                    <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                    <p>{error.message || "Network Error"}</p>
                </Alert>
            ) : (
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Product data={data}/>}/>
                        <Route path="/Product/:id" element={<ProductDetail/>}  />
                    </Routes>
                    {isShow && <Cart isShow={isShow} setShow={handleClose} />}
                </BrowserRouter>
            )}
        </CartProvider>
    );
}

export default App;
