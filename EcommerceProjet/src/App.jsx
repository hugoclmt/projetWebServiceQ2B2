import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from "./Components/Layout/Header";
import Product from "./Components/Product/Product";
import Cart from "./Components/Cart/Cart";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

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
        <React.Fragment>
            <Header setShow={handleShow} />
            {loading ? (
                <div className='containerSpinner'>
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
                <React.Fragment>
                    <Product data={data} />
                    {isShow && <Cart isShow={isShow} setShow={handleClose} />}
                </React.Fragment>
            )}
        </React.Fragment>
    );
}

export default App;
