import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';

function Cart(props) {

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
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
                </Table>
                <h3>Total Amount</h3>
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