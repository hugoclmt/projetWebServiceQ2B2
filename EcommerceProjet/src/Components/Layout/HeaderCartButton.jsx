import React from "react";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { CartContext } from '../Contexts/Context';

const HeaderCartButton = (props) =>
{
    const { getTotalItems } = useContext(CartContext);
    const totalItems = getTotalItems();
    return(
        <React.Fragment>
            <div className="styleCartBtn">
                <Button onClick={props.setShow} variant="primary">
                    Panier <Badge bg="secondary">{totalItems}</Badge>
                    <span className="visually-hidden">unread messages</span>
                </Button>
            </div>
        </React.Fragment>
    );
}

export default HeaderCartButton;