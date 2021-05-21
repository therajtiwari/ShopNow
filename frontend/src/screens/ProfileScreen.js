import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserDetails } from "../actions/userActions.js";

import { Row, Col, Form, Button, Container } from "react-bootstrap";
import Message from "../components/Message";
import Loader from "../components/Loader";

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userProfile = useSelector((state) => state.userProfile);
  const { loading, error, user } = userProfile;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [history, userInfo, user, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch register
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else if (password.length < 8) {
      setMessage("Password has to be atleast 8 characters long");
    } else {
      //dispatch update user
    }
  };

  return (
    <Container>
      <Row>
        <Col md={4}>
          <h2>User Profile</h2>
          {message && <Message variant="danger" message={message} />}
          {error && <Message variant="danger" message={error} />}
          {loading && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name" style={{ textAlign: "start" }}>
              <Form.Label>Name </Form.Label>
              <Form.Control
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="email" style={{ textAlign: "start" }}>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password" style={{ textAlign: "start" }}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              controlId="confirmPassword"
              style={{ textAlign: "start" }}
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Button type="submit" variant="success">
              Update
            </Button>
          </Form>
        </Col>
        <Col md={8}> Orders</Col>
      </Row>
    </Container>
  );
};

export default ProfileScreen;
