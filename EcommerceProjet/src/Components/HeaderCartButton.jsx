import React from "react";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const HeaderCartButton = () =>
{
    return(
        <React.Fragment>
            <Button variant="primary">
                Profile <Badge bg="secondary">9</Badge>
                <span className="visually-hidden">unread messages</span>
            </Button>
        </React.Fragment>
    );
}

export default HeaderCartButton;