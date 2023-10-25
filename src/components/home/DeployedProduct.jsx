import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Row from "react-bootstrap/Row";
import DeployedProductCard from "./DeployedProductCard";

const DeployedProduct = ({ heading, localProducts }) => {
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
