import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../products.js";
import Product from "../components/Product";

function HomeScreen() {
  return (
    <>
      <h2>Trending Products</h2>
      <Row>
        {products.map((product) => (
          <Col sm={6} md={6} lg={4} xl={3} className="my-4" key={product.id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default HomeScreen;
