import React, {useState,useEffect} from "react";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductItem from "./ProductItem";
import axios from "axios";

const Product = () =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        axios.get('http://localhost:3000/api/product')
        .then(response => {
            setData(response.data.products);
            setLoading(false);
        })
        .catch(err => {
            setError(err);
            setLoading(false);
        });
    }, []);
    
    return (
        <React.Fragment>
            {
                loading ? (
                    <div className='containerSpin'>
                        <Spinner className='spinnerclass' animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) : error ? (
                    <Alert variant="danger">
                        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                        <p>{error.message || "Network Error"}</p>
                    </Alert>
            ) : (

                    <Container fluid className="containerProduct">
                        <Row>
                            {data.map(product => (
                                <Col className="colCards" key={product._id}  md={5}>
                                    <ProductItem item={product} />    
                                </Col>
                            ))}
                        </Row>
                    </Container>

            )}
        </React.Fragment>
    );
}
export default Product;

