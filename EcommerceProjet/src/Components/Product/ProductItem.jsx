import React from "react";

import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import ProductItemForm from "./ProductItemForm";

const ProductItem = (props) => {
    
    return (
        <Card className="cards"  style={{ width: '22rem' }}>
            <Link to={`/Product/${props.item._id}`}>
                <Card.Img  variant="top" src={props.item.mainImage} />
            </Link>
            <Card.Body>
                <Card.Title>{props.item.name}</Card.Title>
            </Card.Body>
            <ProductItemForm produit={props.item}/>
        </Card>
    );
}

export default ProductItem;
