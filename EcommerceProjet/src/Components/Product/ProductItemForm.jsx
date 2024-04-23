import React, { useContext, useState } from "react";
import { CartContext } from "../Contexts/Context";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ProductItemForm = (props) =>{
    const {dispatch} = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    const addProduct = () => {
        dispatch({
            type: "ADD_ITEM",
            payload: {
                id: props.produit._id,
                title: props.produit.name,
                price: props.produit.price,
                quantity: parseInt(quantity,10)
            }
        });
    }


    return(
        <React.Fragment>
            <div className="fondProductItemForm">
                <Form.Label htmlFor="inputPassword5">{props.produit.price}€</Form.Label>
                <div className="styleProductItemForm">
                    <Form.Control
                    placeholder="Quantité..."
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    type="number"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                    min={1}
                    />
                    <Button onClick={addProduct} variant="primary">Add</Button>
                </div>
            </div>

        </React.Fragment>
    );
}
export default ProductItemForm;