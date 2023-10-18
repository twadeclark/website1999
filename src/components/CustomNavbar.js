import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">YourLogo</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/apps">Apps</Nav.Link>
        <Nav.Link as={Link} to="/browser-game">Browser Game</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default CustomNavbar;
