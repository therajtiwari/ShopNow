import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

// components
import Rating from "../components/Rating";
import products from "../products";

function ProductScreen({ match }) {
  const product = products.find((p) => String(p.id) === match.params.id);
  console.log(match);

  return (
    <Container fluid>
      <Row>
        <Col>{product.name}</Col>
      </Row>
    </Container>
  );
}

export default ProductScreen;
