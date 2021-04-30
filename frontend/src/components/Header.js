import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCartPlus, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" className="ml-auto">
        <Container>
          <Navbar.Brand href="#home">
            <h3>ShopNow</h3>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home" className="px-3">
                <FontAwesomeIcon className="nav-icon" icon={faHome} size="2x" />
                <h5 className="nav-link-name">Home</h5>
              </Nav.Link>
              <Nav.Link href="#" className="px-3">
                <FontAwesomeIcon
                  className="nav-icon"
                  icon={faCartPlus}
                  size="2x"
                />

                <h5 className="nav-link-name">Cart</h5>
              </Nav.Link>
              <Nav.Link href="##" className="px-3">
                <FontAwesomeIcon className="nav-icon" icon={faUser} size="2x" />
                <h5 className="nav-link-name">Sign In</h5>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
