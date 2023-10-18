import React from 'react';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';

function HomePage() {
  return (
    <>
      {/* Navbar */}
      <CustomNavbar />

      {/* Hero Section */}
      <Container fluid className="p-5 bg-primary text-white text-center">
        <h1>Welcome to Our Apps & Game Showcase</h1>
        <p>Your captivating subheadline here</p>
        <Button variant="light" href="#apps">Explore Apps</Button>
        <Button variant="light" href="#browser-game" className="ml-3">Play Game</Button>
      </Container>

      {/* Featured Section */}
      <Container className="my-5">
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="path-to-your-first-app-image.jpg" />
              <Card.Body>
                <Card.Title>First App</Card.Title>
                <Card.Text>Short description for the first app.</Card.Text>
                <Button variant="primary" href="#first-app">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            {/* Second App Card similar to the First App Card */}
          </Col>
          <Col md={4}>
            {/* Browser Game Card */}
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white p-4 text-center">
        <p>Your brief about section or mission statement here.</p>
        {/* Add social media links and other footer content */}
      </footer>
    </>
  );
}

export default HomePage;
