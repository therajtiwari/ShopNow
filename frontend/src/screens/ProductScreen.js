import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  Nav,
  Tab,
  Form,
} from "react-bootstrap";

// components
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";

// redux
import { useSelector, useDispatch } from "react-redux";
import { listProductDetails } from "../actions/productActions";

function ProductScreen({ match, history }) {
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(match);
    dispatch(listProductDetails(match.params.id));
  }, [match, dispatch]);

  const productDetails = useSelector((state) => state.productDetails);
  // console.log(productDetails);
  const { product, error, loading } = productDetails;

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qnt=${quantity}`);
  };

  return (
    <>
      <Container fluid style={{ width: "80%" }}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message message={error} />
        ) : (
          <Row>
            <Col md={6} sm={12}>
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
                    reviewCount={product.numOfReviews}
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
                        {product.numInStock > 0 ? (
                          <h4 style={{ marginTop: "8px" }}>In Stock</h4>
                        ) : (
                          <h4 style={{ marginTop: "8px" }}> Not in Stock</h4>
                        )}
                      </ListGroup.Item>

                      {product.numInStock > 0 && (
                        <ListGroup.Item className="py-4">
                          <Row>
                            <Col>
                              <Form.Control
                                as="select"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                              >
                                {[
                                  ...Array(
                                    Math.min(10, product.numInStock)
                                  ).keys(),
                                ].map((x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                ))}
                              </Form.Control>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      )}
                    </ListGroup>
                  </Col>
                </Row>

                <ListGroup>
                  <Row>
                    <Col md={4} className="justify-content-center my-2">
                      {product.numInStock > 0 ? (
                        <Button
                          variant="success"
                          size="lg"
                          style={{ borderRadius: "0px !important" }}
                          onClick={addToCartHandler}
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
                      {/* </ListGroup.Item> */}
                    </Col>
                  </Row>
                </ListGroup>

                <hr className="my-4" />

                <div className="info-wrapper">
                  <Tab.Container id="info-tab" defaultActiveKey="first">
                    <Row>
                      <Col sm={12}>
                        <Nav variant="tabs">
                          <Nav.Item>
                            <Nav.Link
                              eventKey="first"
                              style={{ color: "black" }}
                            >
                              <h5>Description</h5>
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link
                              eventKey="second"
                              style={{ color: "grey" }}
                            >
                              <h5>Features</h5>
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link
                              eventKey="third"
                              style={{ color: "grey" }}
                            >
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ducimus odit et sunt eos illo, officia optio
                            nostrum dolorem explicabo porro, voluptatum autem
                            itaque dolores iste saepe laudantium blanditiis
                            voluptates. Repellendus, laborum? Et velit similique
                            asperiores animi totam sequi dolorum iure.
                          </Tab.Pane>
                          <Tab.Pane eventKey="second">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Alias tenetur sequi nisi harum hic voluptas
                            quidem aspernatur temporibus corporis in! Laboriosam
                            reprehenderit repellat libero quibusdam odit fugiat
                            debitis quam ex! Iste consequuntur impedit
                            voluptatem eligendi, quas magnam cumque! Numquam
                            aliquam laudantium laborum vitae doloribus cumque
                            libero unde at, ipsa voluptatem!
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                  </Tab.Container>
                </div>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}

export default ProductScreen;
