import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';

function AboutPage() {
  return (
    <>
      {/* Navbar */}
      <CustomNavbar />

      {/* Main About Section */}
      <Container className="my-5">
        <h2 className="mb-4">About Us</h2>

        <Row className="mb-4">
          <Col md={6}>
            <p>
              Write a compelling story about your company or team here. Discuss your vision, your 
              journey, and the values that guide your projects.
            </p>
          </Col>
          <Col md={6}>
            <img src="path-to-your-about-image.jpg" alt="About Us" className="img-fluid" />
          </Col>
        </Row>

        <h4 className="mb-4">Our Team</h4>

        {/* Team Member 1 */}
        <Row className="mb-4">
          <Col md={4}>
            <Card className="mb-4">
              <Card.Img variant="top" src="path-to-team-member1-image.jpg" />
              <Card.Body>
                <Card.Title>Team Member 1</Card.Title>
                <Card.Text>
                  A short bio or description about this team member. Their role, expertise, and some fun facts.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Team Member 2 */}
          <Col md={4}>
            {/* ...similar card structure */}
          </Col>

          {/* Team Member 3 */}
          <Col md={4}>
            {/* ...similar card structure */}
          </Col>
        </Row>

        {/* Optionally, you can add other sections like Testimonials, Press Coverage, etc. */}
      </Container>
    </>
  );
}

export default AboutPage;
