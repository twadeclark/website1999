import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const DeployedProductCard = ({ value }) => {
  const {
    name,
    description,
    logo,
    screenshot
    // ... add other attributes as per your requirements
  } = value;

  return (
    <Col md={6}>
      <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
        {/* <Card.Img variant="top" src={screenshot || logo || <Skeleton />} /> */}
        <Card.Img variant="top" src={logo || <Skeleton />} style={{ width: '200px' }} />
        <Card.Body>
          <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
          <Card.Text>{description || <Skeleton count={3} />} </Card.Text>
          <Card.Img variant="top" src={screenshot || <Skeleton />} />
          {/* You can add more product-specific details here as per your requirements */}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DeployedProductCard;
