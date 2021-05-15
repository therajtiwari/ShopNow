import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-5">
            <h3>Made by Raj Tiwari</h3>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
