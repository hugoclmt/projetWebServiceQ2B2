import React from "react";

import { Link } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import ProductItemForm from "./ProductItemForm";

const ProductItem = (props) =>{
    return (
        <React.Fragment>
            {props.data.map((donnee) => (
                <Card className="cards" key={donnee._id} style={{ width: '18rem' }}>
                    <Link to={`/Product/${donnee._id}`}>
                        <Card.Img  variant="top" src={donnee.mainImage} />
                    </Link>
                    <Card.Body>
                        <Card.Title>{donnee.name}</Card.Title>
                    </Card.Body>
                    <ProductItemForm produit={donnee}/>
                </Card>
            ))}
            
        </React.Fragment>
    );


}

export default ProductItem;