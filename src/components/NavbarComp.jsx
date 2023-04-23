import React from 'react';
import { Navbar, Nav, Button, NavDropdown, Container } from 'react-bootstrap';
const NavbarComp = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Nav >
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <Button variant="outline-info" to="/login">
            Login
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
