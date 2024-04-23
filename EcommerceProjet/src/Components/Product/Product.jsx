
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductItem from "./ProductItem";



const Product = (props) =>{
    return (
        <React.Fragment>
            <Container fluid className="containerProduct">
                <Row>
                    <Col>
                        
                    </Col>
                    <ProductItem data={props.data}/>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default Product;
