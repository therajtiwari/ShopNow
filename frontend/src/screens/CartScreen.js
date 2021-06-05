import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  ListGroup,
  Image,
  Row,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import Message from "../components/Message";

import { addToCart } from "../actions/cartActions";
import ProductScreen from "./ProductScreen";
const CartScreen = ({ match, history, location }) => {
  const productID = match.params.id;
  // console.log(match);
  // console.log(history);
  // console.log(location);
  const quantity = location.search ? Number(location.search.split("=")[1]) : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();

  useEffect(() => {
    if (productID) {
      dispatch(addToCart(productID, quantity));
    }
  }, [dispatch, productID, quantity]);

  const removeFromCartHandler = (id) => {
    console.log("removed");
  };
  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <Row className="mx-3">
        <Col md={8} sm={10} style={{ margin: "auto" }}>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty. <Link to="/">Go to HomePage</Link>
            </Message>
          ) : (
            <ListGroup vvariant="flush" ariant="flush">
              {cartItems.map((product) => (
                <ListGroup.Item key={product.productID} className="my-2">
                  <Row>
                    <Col md={3}>
                      <Image
                        src={product.image}
                        alt={product.image}
                        fluid
                        rounded
                        style={{ width: "90%", margin: "auto" }}
                      />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${product.productID}`}>
                        <h4 style={{ color: "black" }}> {product.name}</h4>
                      </Link>
                    </Col>
                    <Col md={3}>
                      <h4>Rs {product.price}</h4>
                    </Col>
                    <Col md={1}>
                      <Form.Control
                        as="select"
                        value={product.quantity}
                        onChange={(e) =>
                          dispatch(
                            addToCart(product.productID, Number(e.target.value))
                          )
                        }
                      >
                        {[
                          ...Array(Math.min(10, product.numInStock)).keys(),
                        ].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(product.productID)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  );
};

export default CartScreen;
