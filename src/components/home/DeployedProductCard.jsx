import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Skeleton from "react-loading-skeleton";

const DeployedProductCard = ({ value }) => {
  const {
    name,
    description,
    logo,
    screenshot1,
    screenshot2,
    privacyPolicyLink,
  } = value;

return (
  <Col md={6}>
    <Card className="card shadow-lg p-3 mb-5 bg-white rounded">

    <Card.Body className="d-flex flex-column">
    <div className="d-flex align-items-start mb-3"> {/* Add margin-bottom for spacing */}
        <Card.Img 
            src={logo} 
            style={{ 
                width: '80px', 
                height: '80px', 
                objectFit: 'cover', 
                marginRight: '15px' 
            }} 
        />
        <div>
            <Card.Title as="h5">{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <a href={privacyPolicyLink} target="_blank" rel="noopener noreferrer" className="mt-2">
                    Privacy Policy
            </a>
        </div>
    </div>
    <div className="d-flex justify-content-between"> {/* Flex container for side-by-side images */}
        <Card.Img 
            src={screenshot1} 
            style={{ 
                width: 'calc(50% - 10px)', 
                objectFit: 'cover', 
                marginRight: '10px' 
            }} 
        />
        <Card.Img 
            src={screenshot2} 
            style={{ 
                width: 'calc(50% - 10px)', 
                objectFit: 'cover', 
                marginLeft: '10px' 
            }} 
        />
    </div>
    </Card.Body>

    </Card>
  </Col>
);

};

export default DeployedProductCard;
