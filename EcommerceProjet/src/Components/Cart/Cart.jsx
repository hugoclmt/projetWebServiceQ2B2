import React, { useContext } from 'react';
import { CartContext } from '../Contexts/Context';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

function Cart(props) {

    const { state } = useContext(CartContext);
    const { items, totalAmount } = state;

  return (
    <>
        <Modal
            show={props.isShow}
            onHide={props.setShow}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Panier</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Ref</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                            </tr>
                        ))}
                </tbody>
                </Table>
                <h3>Total Amount : {totalAmount.toFixed(2)}</h3>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.setShow}>
                    Fermer
                </Button>
                <Button variant="primary">Payer</Button>
            </Modal.Footer>
        </Modal>
    </>
  );
}

export default Cart;