import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import DeployedProductCard from "./DeployedProductCard";

import juliaZoneIcon from "../../assets/juliaZoneIcon.jpg";
import juliaZoneScreenshot from "../../assets/juliaZoneScreenshot1.png";
import timesTableIcon from "../../assets/timesTableIcon.png";
import timesTablesScreenshot from "../../assets/timesTablesScreenshot1.png";

// Dummy data structure for your local products.
const localProducts = [
  {
    name: "The Julia Zone",
    description: "White noise generator for a good night's sleep.",
    logo: juliaZoneIcon, 
    screenshot: juliaZoneScreenshot,
    // ... any other product-specific details you have
  },
  // ... add more products as needed
  {
    name: "Times the Times Tables",
    description: "Learn your times tables.",
    logo: timesTableIcon,
    screenshot: timesTablesScreenshot,
    // ... any other product-specific details you have
  },
];

const DeployedProduct = ({ heading }) => {
  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {localProducts.map((product, index) => (
            <DeployedProductCard
              key={`deployed-product-card-${index}`}
              id={`deployed-product-card-${index}`}
              value={product}
            />
          ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default DeployedProduct;
