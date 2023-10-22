import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" className="navbar-gradient">
      <Navbar.Brand href="#home">App Showcase</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <NavDropdown title="Apps" id="basic-nav-dropdown">
            <NavDropdown.Item href="#app1">App 1</NavDropdown.Item>
            <NavDropdown.Item href="#app2">App 2</NavDropdown.Item>
            {/* Add more NavDropdown.Items as you add more apps */}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
