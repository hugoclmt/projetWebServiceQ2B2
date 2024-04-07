import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ProductItemForm = () =>{
    return(
        <React.Fragment>
            <div className="fondProductItemForm">
                <Form.Label htmlFor="inputPassword5">Prix</Form.Label>
                <div className="styleProductItemForm">
                    <Form.Control
                    type="number"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    min={0}
                    />
                    <Button variant="primary">Add</Button>{' '}
                </div>
            </div>

        </React.Fragment>
    );
}
export default ProductItemForm;