import React from "react";
import Card from 'react-bootstrap/Card';
import ProductItemForm from "./ProductItemForm";
const ProductItem = (props) =>{

    return (
        <React.Fragment>
            {props.data.map((donnee) => (
                <Card key={donnee.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={donnee.img} />
                    <Card.Body>
                        <Card.Title>{donnee.nom}</Card.Title>
                    </Card.Body>
                    <ProductItemForm/>
                </Card>
            ))}
                
        </React.Fragment>
    );


}

export default ProductItem;