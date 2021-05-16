import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  Nav,
  Tab,
} from "react-bootstrap";
import axios from "axios";

// components
import Rating from "../components/Rating";

function ProductScreen({ match }) {
  const [product, setproduct] = useState({});

  useEffect(() => {
    const getDetails = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setproduct(data);
    };
    getDetails();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col md={6} sm={5}>
          <img
            src={product.image}
            style={{ width: "100%" }}
            alt={product.image}
          />
        </Col>
        <Col md={6}>
          <div
            className="contents"
            style={{ margin: "2rem 1rem", textAlign: "start" }}
          >
            <h1>{product.name}</h1>
            <hr style={{ margin: "1rem 0rem 2rem 0rem " }} />
            <h5>{product.description}</h5>
            <div className="rating-div my-3">
              <Rating
                rating={product.rating}
                reviewCount={product.reviewCount}
                size={"1.3rem"}
                color="#295939"
              />
            </div>
            <h1 className="my-3">Rs {product.price}</h1>
            <Row>
              <Col md={12} className="my-3">
                <ListGroup horizontal>
                  <ListGroup.Item
                    className="py-3 "
                    style={{
                      backgroundColor: "white",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    {product.avalaibleStock > 0 ? (
                      <h4 style={{ marginTop: "8px" }}>In Stock</h4>
                    ) : (
                      <h4 style={{ marginTop: "8px" }}> Not in Stock</h4>
                    )}
                  </ListGroup.Item>
                  <ListGroup.Item className="py-3 ">
                    {product.avalaibleStock > 0 ? (
                      <Button
                        variant="success"
                        size="lg"
                        style={{ borderRadius: "0px !important" }}
                      >
                        Add to Cart
                      </Button>
                    ) : (
                      <Button
                        variant="dark"
                        size="lg"
                        style={{ borderRadius: "0px !important" }}
                        disabled
                      >
                        Add to Cart
                      </Button>
                    )}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>

            <hr className="my-4" />

            <div className="info-wrapper">
              <Tab.Container id="info-tab" defaultActiveKey="first">
                <Row>
                  <Col sm={12}>
                    <Nav variant="tabs">
                      <Nav.Item>
                        <Nav.Link eventKey="first" style={{ color: "black" }}>
                          <h5>Description</h5>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" style={{ color: "grey" }}>
                          <h5>Features</h5>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" style={{ color: "grey" }}>
                          <h5>Reviews</h5>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <Tab.Content className="my-4">
                      <Tab.Pane eventKey="first">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus odit et sunt eos illo, officia optio nostrum
                        dolorem explicabo porro, voluptatum autem itaque dolores
                        iste saepe laudantium blanditiis voluptates.
                        Repellendus, laborum? Et velit similique asperiores
                        animi totam sequi dolorum iure.
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Alias tenetur sequi nisi harum hic voluptas quidem
                        aspernatur temporibus corporis in! Laboriosam
                        reprehenderit repellat libero quibusdam odit fugiat
                        debitis quam ex! Iste consequuntur impedit voluptatem
                        eligendi, quas magnam cumque! Numquam aliquam laudantium
                        laborum vitae doloribus cumque libero unde at, ipsa
                        voluptatem!
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductScreen;
