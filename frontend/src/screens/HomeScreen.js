import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../products.js";
import Product from "../components/Product";

function HomeScreen() {
  return (
    <>
      <h1>Trending Products</h1>
      <hr
        style={{
          margin: "1rem 0rem 2rem 0rem ",
          border: "1px solid lightgrey",
        }}
      />
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
