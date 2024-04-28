import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import HeaderCartButton from './HeaderCartButton';

import { Link } from 'react-router-dom';


const Header = (props) =>
{
    return (
        <React.Fragment>
            <div className='styleHeader'>
                <Navbar id='navbarHeader' expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand href="/">E-Commerce</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/">Accueil</Nav.Link>
                                <Nav.Link href="#link">Liens</Nav.Link>
                                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                        
                    </Container>
                    <HeaderCartButton setShow={props.setShow}/>    
                </Navbar>
                
                
                
            </div>
        </React.Fragment>
    );
}

export default Header;