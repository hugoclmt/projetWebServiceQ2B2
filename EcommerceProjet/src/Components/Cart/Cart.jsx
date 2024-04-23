import React, { useContext } from 'react';
import { CartContext } from '../Contexts/Context';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

function Cart(props) {

    const { state, dispatch } = useContext(CartContext);
    const { items, totalAmount } = state;

    const removeProduct = (id) => {
        dispatch({
            type: "REMOVE_ITEM",
            payload: {
                id: id,
            }
        });
    };

    

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
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <div className='containerTrash'>
                                        <button onClick={()=>removeProduct(item.id)}>
                                            <p>Delete</p>
                                        </button>
                                    </div>
                                </td>
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

