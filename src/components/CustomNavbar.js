import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../global.css';  // Assuming you have styles for the navbar
import logo from '../assets/logo_small.png';  // Adjust the path based on the exact location of your assets directory src/assets/logo_small.png
import { Link } from 'react-router-dom';

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Your Logo" className="navbar-logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link className="nav-link" to="/">Home</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
