import React from 'react';
import { Navbar, Nav, Container, Button, Card, Row, Col } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';

function AppsPage() {
  return (
    <>
      {/* Navbar (same as HomePage for consistency) */}
      <CustomNavbar />
      
      {/* Main Apps Section */}
      <Container className="my-5">
        <h2 className="mb-4">Our Mobile Apps</h2>

        {/* First Mobile App Details */}
        <Row className="mb-5">
          <Col md={6}>
            <img src="path-to-your-first-app-screenshot.jpg" alt="First App" className="img-fluid" />
          </Col>
          <Col md={6}>
            <h3>First App's Name</h3>
            <p>Detailed description for the first app.</p>
            <ul>
              <li>Feature 1</li>
              <li>Feature 2</li>
              {/* ... other features */}
            </ul>
            <Button variant="primary" href="#app-store-link">Download Now</Button>
          </Col>
        </Row>

        {/* Second Mobile App Details (similar structure to the first) */}
        <Row className="mb-5">
          {/* ... */}
        </Row>

        {/* Testimonials */}
        <h4>User Reviews</h4>
        <Row>
          <Col md={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Text>"This app is amazing! Highly recommended."</Card.Text>
                <Card.Footer>- User 1</Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            {/* Another testimonial card */}
          </Col>
          <Col md={4}>
            {/* Another testimonial card */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AppsPage;
