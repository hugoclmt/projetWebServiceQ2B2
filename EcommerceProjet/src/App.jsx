import Header from "./Components/Layout/Header"
import Product from "./Components/Product/Product";
import Cart from "./Components/Cart/Cart";

import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import {useState,useEffect} from 'react'

function App() {

    const data = [
        {id :1, nom : "biere", prix: 5, img : 'https://dummyimage.com/286x180/702470/fff.png&text=biere'},
        {id :2, nom : "soft", prix: 2,img: 'https://dummyimage.com/286x180/702470/fff.png&text=soft' },
        {id :3, nom : "alcool", prix: 8, img: 'https://dummyimage.com/286x180/702470/fff.png&text=alcool'}
    ];


    // usestate pour afficher le panier
    const [show, setShow] = useState(false); 

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    return(
        <React.Fragment>
            <Header setShow={handleShow}/>
            <Product data={data}/>
            <Cart show={show} setShow={handleClose}/>
        </React.Fragment>
    );
}
export default App
