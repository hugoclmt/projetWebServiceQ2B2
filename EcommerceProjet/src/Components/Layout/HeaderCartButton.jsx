import React from "react";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const HeaderCartButton = (props) =>
{
    return(
        <React.Fragment>
            <div className="styleCartBtn">
                <Button onClick={props.setShow} variant="primary">
                    Panier <Badge bg="secondary">9</Badge>
                    <span className="visually-hidden">unread messages</span>
                </Button>
            </div>
        </React.Fragment>
    );
}

export default HeaderCartButton;