import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCartPlus, faUser } from "@fortawesome/free-solid-svg-icons";

// Route
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" className="ml-auto">
        <Container fluid style={{ width: "85%" }}>
          <LinkContainer to="/">
            <Navbar.Brand>
              <h3>ShopNow</h3>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link className="px-3">
                  <FontAwesomeIcon
                    className="nav-icon"
                    icon={faHome}
                    size="2x"
                  />
                  <h5 className="nav-link-name">Home</h5>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link className="px-3">
                  <FontAwesomeIcon
                    className="nav-icon"
                    icon={faCartPlus}
                    size="2x"
                  />

                  <h5 className="nav-link-name">Cart</h5>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signin">
                <Nav.Link className="px-3">
                  <FontAwesomeIcon
                    className="nav-icon"
                    icon={faUser}
                    size="2x"
                  />
                  <h5 className="nav-link-name">Sign In</h5>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
