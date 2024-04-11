import React from "react";
import Card from 'react-bootstrap/Card';
import ProductItemForm from "./ProductItemForm";

const ProductItem = (props) =>{
    return (
        <React.Fragment>
            {props.data.map((donnee) => (
                <Card className="cards" key={donnee._id} style={{ width: '18rem' }}>
                    <Card.Img width={150} height={250} variant="top" src={donnee.mainImage} />
                    <Card.Body>
                        <Card.Title>{donnee.name}</Card.Title>
                    </Card.Body>
                    <ProductItemForm prix={donnee.price}/>
                </Card>
            ))}
        </React.Fragment>
    );


}

export default ProductItem;