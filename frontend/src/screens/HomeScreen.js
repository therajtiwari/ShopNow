import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
// import products from "../products.js";
import Product from "../components/Product";
import Loader from "../components/Loader";

import { listProducts } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";

function HomeScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const productList = useSelector((state) => state.productList);
  // console.log(productList);
  const { error, loading, products } = productList;

  return (
    <Container fluid style={{ width: "80%" }}>
      <h1>Trending Products</h1>
      <hr
        style={{
          margin: "1rem 0rem 2rem 0rem ",
          border: "1px solid lightgrey",
        }}
      />

      {loading ? (
        <Loader />
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={6} md={6} lg={4} xl={3} className="my-4" key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default HomeScreen;
