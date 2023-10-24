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
    // ... add other attributes as per your requirements
  } = value;

//   return (
//     <Col md={6}>
//       <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
//         {/* <Card.Img variant="top" src={screenshot || logo || <Skeleton />} /> */}
//         <Card.Img variant="top" src={logo || <Skeleton />} style={{ width: '100px' }} />
//         <Card.Body>
//           <Card.Title as="h5">{name || <Skeleton />} </Card.Title>
//           <Card.Text>{description || <Skeleton count={3} />} </Card.Text>
//           <Card.Img variant="top" src={screenshot1 || <Skeleton />} style={{ width: '200px' }} />
//           <Card.Img variant="top" src={screenshot2 || <Skeleton />} style={{ width: '200px' }} />
//           {/* You can add more product-specific details here as per your requirements */}
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };

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
