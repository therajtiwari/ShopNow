import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
// import products from "../products.js";
import Product from "../components/Product";
import axios from "axios";

function HomeScreen() {
  const [products, getproducts] = useState([]);

  useEffect(() => {
    const getDetails = async () => {
      const responeInfo = await axios.get("/api/products");
      // const {data} = await axios.get("/api/products");
      console.log(responeInfo);
      getproducts(responeInfo.data);
    };
    getDetails();
  }, []);
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
