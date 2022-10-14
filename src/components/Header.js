import React from 'react'

import {Navbar, Nav, Container, Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
//import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
//import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  return (
    <div>
      <header>  

          <Navbar bg="dark" variant="dark" expand="lg" coLLapseOnSelect className="mb-3">
              <Container fluid>
                <Navbar.Brand href="/">ProShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" placement="start">
                    <Nav className="mr-auto">
                      <Nav.Link href="/cart"><i className="fas fa-shopping-cart"> </i> Cart</Nav.Link>
                      <Nav.Link href="/login"><i className="fas fa-user"> </i>Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
      </header>
    </div>
  )
}

export default Header