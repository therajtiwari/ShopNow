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

  return (
    <div>
      <h1>Cart Screen</h1>
      {cartItems.map((x) => (
        <h1>{x.name}</h1>
      ))}
    </div>
  );
};

export default CartScreen;
